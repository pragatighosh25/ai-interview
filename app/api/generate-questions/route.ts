import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {

    const { role } = await req.json()

    const questions = [
      `What is ${role}?`,
      `Explain closures in JavaScript.`,
      `What is React reconciliation?`,
      `What is the Virtual DOM?`,
      `Difference between var, let, and const?`
    ]

    return NextResponse.json({ questions })

  } catch (error) {

    console.error(error)

    return NextResponse.json(
      { error: "Failed to generate questions" },
      { status: 500 }
    )
  }
}