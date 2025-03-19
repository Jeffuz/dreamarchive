import { supabase } from "@/utils/supabase";
import { NextRequest, NextResponse } from "next/server";
import { deepseek } from "@/utils/deepseek";

// https://www.geeksforgeeks.org/cosine-similarity/
function cosineSimilarity(vectorX: number[], vectorY: number[]) {
    const dotProduct = vectorX.reduce((sum, val, i) => sum + val * vectorY[i], 0);
    const magnitudeX = Math.sqrt(vectorX.reduce((sum, val) => sum + val ** 2, 0));
    const magnitudeY = Math.sqrt(vectorY.reduce((sum, val) => sum + val ** 2, 0));
    return dotProduct / (magnitudeX * magnitudeY)
}

async function analyzeDream(dreamTexts: string) {
    const prompt = `
      You are an expert dream analyst. Summarize the following dreams in **a concise JSON format**:

      - **summary**: A one-liner overview (10-15 words)
      - **themes**: Recurring ideas (3-5 words max)
      - **emotions**: Dominant feelings (3-5 words max)
      - **recurring_symbols**: Common elements (3-5 words max)
      
      Keep responses **brief, readable, and scannable**.

      Example Output:
      {
        "summary": "Dreams focused on exploration, change, and hidden mysteries.",
        "themes": ["Exploration", "Transformation", "Mystery"],
        "emotions": ["Curious", "Anxious", "Hopeful"],
        "recurring_symbols": ["Stairs", "Animals", "Floating cities"]
      }

      Dreams:
      ${dreamTexts}
    `;

    const completion = await deepseek.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "deepseek-chat",
        max_tokens: 150,
        response_format: { type: "json_object" },
    });

    const responseContent = completion.choices[0]?.message?.content;
    if (!responseContent) {
        return {
            summary: "No strong patterns found this week.",
            themes: ["Unclear"],
            emotions: ["Neutral"],
            recurring_symbols: ["None"]
        };
    }

    return JSON.parse(responseContent);
}


export async function POST(req: NextRequest) {
    const { user_id } = await req.json();
    try {
        // Grab embeddings from past week of dreams
        const lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7)

        const fetchDreamsFromPastWeek = supabase
            .from("dreams")
            .select("id, title, description, embedding")
            .eq("user_id", user_id)
            .gte("created_at", lastWeek.toISOString());

        const { data: dreams, error } = await fetchDreamsFromPastWeek;
        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        // Edge case for no dreams
        if (!dreams || dreams.length === 0) {
            return NextResponse.json({ message: "No dreams recorded this week" }, { status: 200 });
        }

        // Extract Embeddings
        const validEmbeddings = dreams
            .filter((dreams) => dreams.embedding !== null)
            .map((dream) => ({
                id: dream.id,
                title: dream.title,
                description: dream.description,
                embedding: JSON.parse(dream.embedding)
            }))

        // Compute similarities using "cosine similarity"
        const similarityScore = []

        for (let x = 0; x < validEmbeddings.length; x++) {
            for (let y = x + 1; y < validEmbeddings.length; y++) {
                const similarity = cosineSimilarity(
                    validEmbeddings[x].embedding,
                    validEmbeddings[y].embedding
                );
                similarityScore.push({
                    dream1: validEmbeddings[x].description,
                    dream2: validEmbeddings[y].description,
                    similarity: Number(similarity.toFixed(3)),
                });
            }
        }


        // Analyze themes
        const similarDreams = similarityScore.filter(pair => pair.similarity > 0.8);

        // Remove duplicate dream descriptions
        const uniqueDreams = new Set();
        similarDreams.map(pair => {
            uniqueDreams.add(pair.dream1);
            uniqueDreams.add(pair.dream2);
        });
        const uniqueDreamList = Array.from(uniqueDreams)

        // Analyze dream
        const dreamTexts = uniqueDreamList.join("\n")
        const summary = await analyzeDream(dreamTexts)

        return NextResponse.json(summary, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
