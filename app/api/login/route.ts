import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"

export async function POST(req: Request) {

  const { email, password } = await req.json()
  

  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user) {
    return NextResponse.json({ error: "User not found" })
  }

  const validPassword = await bcrypt.compare(
    password,
    user.password
  )

  if (!validPassword) {
    return NextResponse.json({ error: "Invalid password" })
  }

  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET!,
    { expiresIn: "1d" }
  )

  return NextResponse.json({ 
    token,
    name: user.name,
    userId: user.id
   })
}
