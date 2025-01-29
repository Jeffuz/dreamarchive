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
      You are an expert dream analyst. Given the following dream descriptions from a single user over the past week, 
      generate a summary highlighting key themes, emotions, and recurring patterns:

      ${dreamTexts}

      Please provide an insightful and concise summary.
    `;

    const completion = await deepseek.chat.completions.create({
        messages: [
            {
                role: "user",
                content: prompt
            }
        ],
        model: "deepseek-chat",
        max_tokens: 300,
    });

    return completion.choices[0].message.content;
}

export async function GET() {
    try {

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
