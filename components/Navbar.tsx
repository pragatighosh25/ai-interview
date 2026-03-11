"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Brain, LayoutDashboard, Home, LogOut } from "lucide-react"

export default function Navbar() {

  const router = useRouter()

  const [token, setToken] = useState<string | null>(null)
  const [name, setName] = useState<string | null>(null)

  useEffect(() => {

    const storedToken = localStorage.getItem("token")
    const storedName = localStorage.getItem("name")

    setToken(storedToken)
    setName(storedName)

  }, [])

  function logout() {
    localStorage.clear()
    window.location.href = "/"
  }

  return (

    <nav className="w-full border-b border-gray-800 bg-[#0B0F19] sticky top-0 z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/")}
        >

          <Brain className="text-[#6366F1]" size={22} />

          <h1 className="font-semibold text-lg text-white">
            AI Simulator
          </h1>

        </div>

        {/* Navigation */}

        <div className="flex items-center gap-6">

          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-1 text-[#9CA3AF] hover:text-white cursor-pointer transition"
          >
            <Home size={16} />
            Home
          </button>

          {token && (
            <button
              onClick={() => router.push("/dashboard")}
              className="flex items-center gap-1 text-[#9CA3AF] hover:text-white cursor-pointer transition"
            >
              <LayoutDashboard size={16} />
              Dashboard
            </button>
          )}

          {token ? (
            <>
              <span className="text-sm text-[#9CA3AF]">
                Hi {name}
              </span>

              <button
                onClick={logout}
                className="flex items-center gap-2 bg-[#EF4444] hover:bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer transition"
              >
                <LogOut size={16} />
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => router.push("/login")}
                className="text-[#9CA3AF] hover:text-white cursor-pointer transition"
              >
                Login
              </button>

              <button
                onClick={() => router.push("/signup")}
                className="bg-[#6366F1] hover:bg-indigo-500 text-white px-4 py-2 rounded-lg cursor-pointer transition"
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