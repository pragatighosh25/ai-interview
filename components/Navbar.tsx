"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Navbar(){

  const router = useRouter()

  const [token,setToken] = useState<string | null>(null)
  const [name,setName] = useState<string | null>(null)

  useEffect(()=>{

    const storedToken = localStorage.getItem("token")
    const storedName = localStorage.getItem("name")

    setToken(storedToken)
    setName(storedName)

  },[])

  function logout(){
    localStorage.clear()
    window.location.href = "/"
  }

  return(

    <nav className="w-full border-b border-gray-800 bg-black">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}

        <h1
          className="font-bold text-amber-50 text-xl cursor-pointer"
          onClick={()=>router.push("/")}
        >
          AI Simulator
        </h1>

        <div className="flex items-center gap-6">

          <button
            onClick={()=>router.push("/")}
            className="text-gray-300 hover:text-white cursor-pointer"
          >
            Home
          </button>

          {token && (
            <button
              onClick={()=>router.push("/dashboard")}
              className="text-gray-300 cursor-pointer hover:text-white"
            >
              Dashboard
            </button>
          )}

          {token ? (
            <>
              <span className="text-sm text-gray-400">
                Hi {name}
              </span>

              <button
                onClick={logout}
                className="bg-violet-500 text-gray-50 hover:bg-violet-600 px-4 py-2 rounded cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={()=>router.push("/login")}
                className="text-gray-300"
              >
                Login
              </button>

              <button
                onClick={()=>router.push("/signup")}
                className="bg-blue-600 px-4 py-2 rounded"
              >
                Signup
              </button>
            </>
          )}

        </div>

      </div>

    </nav>
  )
}