"use client"

import { useState } from "react"

export default function Signup() {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleSignup = async () => {

    const res = await fetch("/api/signup",{
      method:"POST",
      body: JSON.stringify({
        name,
        email,
        password
      })
    })

    const data = await res.json()

    console.log(data)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="bg-gray-900 p-8 rounded-xl w-96">

        <h1 className="text-2xl mb-6">Signup</h1>

        <input
        placeholder="Name"
        className="w-full p-3 mb-3 bg-gray-800"
        onChange={(e)=>setName(e.target.value)}
        />

        <input
        placeholder="Email"
        className="w-full p-3 mb-3 bg-gray-800"
        onChange={(e)=>setEmail(e.target.value)}
        />

        <input
        type="password"
        placeholder="Password"
        className="w-full p-3 mb-3 bg-gray-800"
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button
        onClick={handleSignup}
        className="bg-blue-600 w-full py-3 rounded">
          Signup
        </button>

      </div>

    </main>
  )
}