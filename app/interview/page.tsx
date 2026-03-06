"use client"

import { useState } from "react"

export default function InterviewPage(){

  const [questions,setQuestions] = useState("")
  const [role,setRole] = useState("frontend")

  const startInterview = async ()=>{

    const res = await fetch("/api/generate-questions",{
      method:"POST",
      body: JSON.stringify({role})
    })

    const data = await res.json()

    setQuestions(data.questions)
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-3xl mb-6">Start Interview</h1>

      <select
      onChange={(e)=>setRole(e.target.value)}
      className="bg-gray-800 p-3 mb-4"
      >
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="fullstack">Fullstack</option>
      </select>

      <button
      onClick={startInterview}
      className="bg-blue-600 px-6 py-3 rounded">
        Generate Questions
      </button>

      <pre className="mt-6 whitespace-pre-wrap">
        {questions}
      </pre>

    </main>
  )
}