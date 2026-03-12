"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sparkles, PlayCircle } from "lucide-react";

export default function Hero() {

  const router = useRouter();

  const startInterview = () => {
    const token = localStorage.getItem("token");

    if (token) {
      router.replace("/dashboard");
    } else {
      router.replace("/login");
    }
  };

  const viewDemo = () => {
    document
      .getElementById("features")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (

    <section className="bg-[#0B0F19] text-white py-32 px-6 relative z-10">

      <div className="max-w-6xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 bg-[#111827] px-4 py-2 rounded-full text-sm text-[#9CA3AF] mb-8">
          <Sparkles size={16} className="text-[#6366F1]" />
          AI Powered Interview Practice
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">

          Practice Technical Interviews{" "}

          <span className="bg-linear-to-r from-[#6366F1] to-purple-400 bg-clip-text text-transparent">
            with AI
          </span>

        </h1>

        <p className="text-[#9CA3AF] mt-6 max-w-xl mx-auto text-lg">
          Simulate real technical interviews, get instant AI feedback,
          and track your improvement with performance analytics.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Button
            type="button"
            onClick={startInterview}
            className="bg-[#6366F1] hover:bg-indigo-500 text-white px-6 py-6 text-lg cursor-pointer transition"
          >
            Start Interview
          </Button>

          <Button
            type="button"
            onClick={viewDemo}
            variant="outline"
            className="border-gray-700 text-gray-300 hover:bg-[#111827] px-6 py-6 text-lg cursor-pointer flex items-center gap-2"
          >
            <PlayCircle size={18} />
            View Demo
          </Button>

        </div>

      </div>

    </section>
  );
}