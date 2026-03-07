import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

type SaveInterviewBody = {
  role: string
  questions: string[]
  answers: string[]
  scores: number[]
  userId: string
}

export async function POST(req: Request) {
  try {
    const body: SaveInterviewBody = await req.json()
    console.log("SAVE INTERVIEW API HIT")
    console.log(body)

    const { role, questions, answers, scores, userId } = body

    const avgScore =
      scores.length > 0
        ? scores.reduce((a, b) => a + b, 0) / scores.length
        : 0

    const session = await prisma.interviewSession.create({
      data: {
        role,
        avgScore,
        userId,
        answers: {
          create: questions.map((q, i) => ({
            question: q,
            userAnswer: answers[i] ?? "",
            score: scores[i],
          })),
        },
      },
      include: {
        answers: true,
      },
    })

    return NextResponse.json(session)
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: "Failed to save interview" },
      { status: 500 }
    )
  }
}