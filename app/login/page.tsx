export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="bg-gray-900 p-8 rounded-xl w-96">

        <h1 className="text-2xl font-bold mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-gray-800"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-gray-800"
        />

        <button className="w-full bg-blue-600 py-3 rounded">
          Sign In
        </button>

      </div>
    </main>
  )
}