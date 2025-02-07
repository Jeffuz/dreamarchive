import { supabase } from "@/utils/supabase";
import { NextRequest, NextResponse } from "next/server";
import { deepseek } from "@/utils/deepseek";
import { openai } from "@/utils/openai";

// Get all dreams
export async function GET() {
  try {
    // const { data: { user }, error: authError } = await supabase.auth.getUser()
    // if (authError || !user) {
    //   return NextResponse.json({ error: "Not authorized: Please log in" }, { status: 401 });
    // }

    const fetchAllDreamsQuery = supabase.from("dreams").select()
    // .eq("user_id", user.id);
    const { data, error } = await fetchAllDreamsQuery;
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

async function analyzeDream(dreamDescription: string) {
  const prompt = `
  You are an expert in dream analysis and emotion recognition. Given a dream description, extract the main themes and assign an emotion score between 0 (very negative) and 1 (very positive).

  ### Instructions:
  - Identify **key themes** in the dream (e.g., "flying", "falling", "chased", "water", "unknown place").
  - Assign an **emotion score** between \`0.0\` (very negative) and \`1.0\` (very positive).
  - Return the response in valid **JSON format**, with keys: \`"themes"\` (list of strings) and \`"emotion_score"\` (float).

  ### Example Input:
  Dream: "I was flying over a dark ocean, feeling a mix of excitement and fear. Suddenly, I started falling, and I woke up before hitting the water."

  ### Example Output:
  {
    "themes": ["flying", "ocean", "falling", "fear", "excitement"],
    "emotion_score": 0.5
  }

  ### Now, analyze the following dream:

  Dream: "${dreamDescription}"
  `;
  const completion = await deepseek.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt
      }
    ],
    model: "deepseek-chat",
    response_format: { type: "json_object" },
    max_tokens: 500,
  });

  return completion.choices[0].message.content || "{}";
}

async function generateEmbedded(dreamDescription: string) {
  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: dreamDescription,
  });
  return response.data[0].embedding;
}

// Create a dream
export async function POST(req: NextRequest) {
  try {
    const { title, description, user_id } = await req.json();
    // console.log("Loading title and desription...");

    // const insertDreamQuery = supabase.from("dreams").select().insert();
    // const { data, error } = await insertDreamQuery;

    // Extract theme and emotion
    // console.log("Analyzing dream...")
    const analyze = await analyzeDream(description);
    const { themes, emotion_score } = JSON.parse(analyze);
    // console.log("Successfully extracted themes and emotions")

    // Generate embeddeding
    const embedding = await generateEmbedded(description);
    // console.log("Successfully stored in embeddings")

    // Store data in db
    const insertDreamQuery = supabase.from("dreams").insert([
      {
        user_id,
        title,
        description,
        themes,
        emotion_score,
        embedding,
      }
    ]).select();
    const { data, error } = await insertDreamQuery;
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: "Dream added successfully", dream: data }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
