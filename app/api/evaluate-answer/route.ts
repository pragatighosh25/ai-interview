import Groq from "groq-sdk"
import { NextResponse } from "next/server"

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

export async function POST(req: Request){

  const { question, answer } = await req.json()

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages:[
      {
        role:"user",
        content:`
You are a senior software engineer interviewer.

Evaluate this answer.

Question: ${question}
Answer: ${answer}

Return:

Score: X/10
Feedback:
Improved Answer:
`
      }
    ]
  })

  return NextResponse.json({
    feedback: response.choices[0].message.content
  })
}