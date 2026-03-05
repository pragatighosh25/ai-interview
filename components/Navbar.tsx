export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
      <h1 className="text-xl font-bold">AI Interviewer</h1>

      <div className="space-x-4">
        <button className="text-gray-300">Login</button>
        <button className="bg-blue-600 px-4 py-2 rounded-lg">
          Start Interview
        </button>
      </div>
    </nav>
  )
}