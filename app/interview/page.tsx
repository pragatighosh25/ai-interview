export default function InterviewPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white">

      <h1 className="text-3xl font-bold mb-6">
        Start Interview
      </h1>

      <select className="p-3 bg-gray-900 rounded mb-4">
        <option>Frontend Developer</option>
        <option>Backend Developer</option>
        <option>Fullstack Developer</option>
      </select>

      <button className="bg-blue-600 px-6 py-3 rounded-lg">
        Begin Interview
      </button>

    </main>
  )
}