"use client"

import { Github, Linkedin, Mail, Brain } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Footer() {

  const router = useRouter()

  return (
    <footer className="bg-[#0B0F19] border-t border-gray-800 mt-24">

      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Brand */}

        <div>

          <div className="flex items-center gap-2 mb-4">

            <Brain className="text-[#6366F1]" size={22} />

            <h2 className="text-xl font-bold">
              AI Simulator
            </h2>

          </div>

          <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-sm">
            Practice real technical interviews with AI-powered feedback
            and track your improvement through detailed analytics.
          </p>

        </div>


        {/* Product */}

        <div>

          <h3 className="font-semibold mb-4 text-white">
            Product
          </h3>

          <ul className="space-y-3 text-[#9CA3AF] text-sm">

            <li
              onClick={()=>router.push("/dashboard")}
              className="hover:text-white cursor-pointer transition"
            >
              Start Interview
            </li>

            <li
              onClick={()=>router.push("/dashboard")}
              className="hover:text-white cursor-pointer transition"
            >
              Dashboard
            </li>

            <li
              onClick={()=>router.push("/")}
              className="hover:text-white cursor-pointer transition"
            >
              Features
            </li>

          </ul>

        </div>


        {/* Connect */}

        <div>

          <h3 className="font-semibold mb-4 text-white">
            Connect
          </h3>

          <ul className="space-y-3 text-[#9CA3AF] text-sm">

            <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
              <Github size={16} />
              GitHub
            </li>

            <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
              <Linkedin size={16} />
              LinkedIn
            </li>

            <li className="flex items-center gap-2 hover:text-white cursor-pointer transition">
              <Mail size={16} />
              Contact
            </li>

          </ul>

        </div>

      </div>


      {/* Bottom bar */}

      <div className="border-t border-gray-800 text-center py-5 text-[#9CA3AF] text-sm">

        © {new Date().getFullYear()} AI Simulator. Built with AI.

      </div>

    </footer>
  )
}