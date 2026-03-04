export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2>Total Interviews</h2>
          <p className="text-2xl font-bold mt-2">0</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2>Average Score</h2>
          <p className="text-2xl font-bold mt-2">0</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2>Last Interview</h2>
          <p className="text-2xl font-bold mt-2">-</p>
        </div>

      </div>

    </main>
  )
}