"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Navbar(){

  const router = useRouter()

  const [name,setName] = useState<string | null>(null)
  const [loggedIn,setLoggedIn] = useState(false)

  useEffect(()=>{

    const token = localStorage.getItem("token")
    const storedName = localStorage.getItem("name")

    if(token){
      setLoggedIn(true)
      setName(storedName)
    }

  },[])

  function logout(){

  localStorage.clear()
  setLoggedIn(false)
  setName(null)

  window.location.href = "/"

}

  return(

    <nav className="w-full border-b border-gray-800 bg-black">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1
          className="font-bold text-lg cursor-pointer"
          onClick={()=>router.push("/")}
        >
          AI Interview
        </h1>

        <div className="flex items-center gap-4">

          {loggedIn ? (
            <>
              <span className="text-sm text-gray-400">
                Hi {name}
              </span>

              <button
                onClick={logout}
                className="bg-red-500 px-4 py-2 rounded"
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