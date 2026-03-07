import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {

    const sessions = await prisma.interviewSession.findMany({
      include: {
        answers: true
      }
    })

    const totalInterviews = sessions.length

    let totalScore = 0
    let bestScore = 0

    sessions.forEach(session => {
      const scores = session.answers.map(a => a.score)

      const avg =
        scores.reduce((a, b) => a + b, 0) / scores.length

      totalScore += avg

      if (avg > bestScore) bestScore = avg
    })

    const averageScore =
      totalInterviews > 0 ? totalScore / totalInterviews : 0

    const recentInterviews = sessions
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, 5)

    return NextResponse.json({
      totalInterviews,
      averageScore,
      bestScore,
      recentInterviews
    })

  } catch (error) {

    console.error(error)

    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    )
  }
}