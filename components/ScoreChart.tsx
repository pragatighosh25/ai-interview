"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

export default function ScoreChart({ history }: any){
const orderedHistory = [...history].reverse()
  const data = orderedHistory.map((session: any, index: number) => {

    const scores = session.answers.map((a:any)=>a.score)

    const avg =
      scores.reduce((a:number,b:number)=>a+b,0) /
      scores.length

    return {
      interview: index + 1,
      score: avg
    }

  })

  return (

    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">

      <h2 className="text-xl font-semibold mb-6">
        Score Progress
      </h2>

      <div className="h-62.5">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid stroke="#333" />

            <XAxis dataKey="interview" />

            <YAxis domain={[0,10]} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#3b82f6"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  )
}