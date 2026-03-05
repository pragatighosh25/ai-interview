export default function Hero() {
  return (
    <section className="text-center py-32 px-6">

      <h1 className="text-6xl font-bold leading-tight">
        Practice Interviews
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
  {" "}with AI
</span>
      </h1>

      <p className="text-gray-400 mt-6 max-w-xl mx-auto">
        Simulate real technical interviews and get AI-powered
        feedback to improve faster.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-blue-600 px-6 py-3 rounded-lg">
          Start Interview
        </button>

        <button className="border border-gray-700 px-6 py-3 rounded-lg">
          View Demo
        </button>
      </div>

    </section>
  )
}