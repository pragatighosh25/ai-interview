"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Dashboard(){

  const router = useRouter()

  useEffect(()=>{

    const token = localStorage.getItem("token")

    if(!token){
      router.push("/login")
    }

  },[])

  return (
  <main className="min-h-screen bg-black text-white p-10">

    <h1 className="text-3xl font-bold mb-8">
      Dashboard
    </h1>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-gray-900 p-6 rounded-xl">
        <h2 className="text-lg">Total Interviews</h2>
        <p className="text-2xl font-bold mt-2">0</p>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl">
        <h2 className="text-lg">Average Score</h2>
        <p className="text-2xl font-bold mt-2">0</p>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl">
        <h2 className="text-lg">Best Score</h2>
        <p className="text-2xl font-bold mt-2">0</p>
      </div>

    </div>

    <div className="mt-10 bg-gray-900 p-6 rounded-xl">
      <h2 className="text-xl mb-4">Start New Interview</h2>

      <button
      onClick={()=>router.push("/interview")}
      className="bg-blue-600 px-6 py-3 rounded">
        Start Interview
      </button>

    </div>

  </main>
)
}