import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-purple-600 opacity-20 blur-[150px]"></div>

      <Hero />
      <Features />
      <Footer />

    </main>
  )
}