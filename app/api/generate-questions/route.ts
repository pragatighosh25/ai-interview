import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { role } = await req.json();

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: `
Generate 5 interview questions for a ${role} developer.

Return ONLY a valid JSON array.

Example format:
["question1","question2","question3","question4","question5"]

Rules:
- Do not add explanations
- Do not add numbering
- Do not add text before or after the JSON
`,
        },
      ],
    });

    return NextResponse.json({
      questions: response.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "AI generation failed" },
      { status: 500 },
    );
  }
}
