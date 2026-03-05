export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">

      <div className="max-w-6xl mx-auto px-8 py-10 grid md:grid-cols-3 gap-8">

        {/* Logo + description */}
        <div>
          <h2 className="text-xl font-bold mb-3">AI Interviewer</h2>
          <p className="text-gray-400 text-sm">
            Practice technical interviews with AI-powered feedback and improve your skills faster.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Start Interview</li>
            <li className="hover:text-white cursor-pointer">Dashboard</li>
            <li className="hover:text-white cursor-pointer">Features</li>
          </ul>
        </div>

        {/* Social / links */}
        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">GitHub</li>
            <li className="hover:text-white cursor-pointer">LinkedIn</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} AI Interviewer. All rights reserved.
      </div>

    </footer>
  )
}