import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {

    const sessions = await prisma.interviewSession.findMany({
      include: {
        answers: true
      },
      orderBy: {
        createdAt: "desc"
      }
    })

    return NextResponse.json(sessions)

  } catch (error) {

    console.error(error)

    return NextResponse.json(
      { error: "Failed to fetch history" },
      { status: 500 }
    )
  }
}