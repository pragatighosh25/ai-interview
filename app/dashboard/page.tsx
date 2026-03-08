"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ScoreChart from "@/components/ScoreChart";

export default function Dashboard() {
  const router = useRouter();

  const [stats, setStats] = useState({
    totalInterviews: 0,
    averageScore: 0,
    bestScore: 0,
  });

  const [history, setHistory] = useState<any[]>([]);

  // auth check
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, []);

  // fetch stats
  useEffect(() => {
    async function fetchStats() {
      const res = await fetch("/api/interview-stats");
      const data = await res.json();
      setStats(data);
    }

    fetchStats();
  }, []);


  // fetch history
  useEffect(() => {
    async function fetchHistory() {
      const res = await fetch("/api/interview-history");
      const data = await res.json();
      setHistory(data);
    }

    fetchHistory();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-6xl p-8 space-y-8">
        <h1 className="text-3xl font-bold mb-10">Dashboard</h1>

        {/* Stats cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h2 className="text-gray-400 text-sm">Total Interviews</h2>

            <p className="text-3xl font-bold mt-2">{stats.totalInterviews}</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h2 className="text-gray-400 text-sm">Average Score</h2>

            <p className="text-3xl font-bold mt-2">
              {stats.averageScore.toFixed(1)}
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h2 className="text-gray-400 text-sm">Best Score</h2>

            <p className="text-3xl font-bold mt-2">
              {stats.bestScore.toFixed(1)}
            </p>
          </div>
        </div>

        {/* Start Interview Card */}

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-2">Start New Interview</h2>

          <p className="text-gray-400 text-sm mb-6">
            Practice with AI-generated interview questions
          </p>

          <p className="text-sm text-gray-400 mb-2">Select role</p>

          <div className="grid mb-10 grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "frontend",
              "backend",
              "fullstack",
              "ai-ml",
              "cybersecurity",
              "data-analyst",
              "devops",
              "mobile",
            ].map((role) => (
              <button
                key={role}
                onClick={() => router.push(`/interview?role=${role}`)}
                className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg capitalize transition"
              >
                {role.replace("-", " ")}
              </button>
            ))}
          </div>

          {/* Generate Questions Button */}

          
        </div>

        <ScoreChart history={history} />
        {/* Interview History */}

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h2 className="text-xl font-semibold mb-6">Interview History</h2>

          <div className="space-y-3 max-h-87.5 overflow-y-auto pr-2">
            {history.map((session: any) => {
              const scores = session.answers.map((a: any) => a.score);

              const avg =
                scores.reduce((a: number, b: number) => a + b, 0) /
                scores.length;

              return (
                <div
                  key={session.id}
                  className="bg-gray-800 p-4 rounded-lg flex items-center justify-between hover:bg-gray-700 transition"
                >
                  <div>
                    <p className="font-semibold capitalize">
                      {session.role} Interview
                    </p>

                    <p className="text-sm text-gray-400">
                      {new Date(session.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="text-right">
                    <p
                      className={`font-bold text-lg ${
                        avg >= 8
                          ? "text-green-400"
                          : avg >= 6
                            ? "text-yellow-400"
                            : "text-red-400"
                      }`}
                    >
                      {avg.toFixed(1)} / 10
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
