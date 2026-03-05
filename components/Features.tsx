export default function Features() {
  return (
    <section className="px-10 pb-24">

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-gray-900 hover:bg-gray-800 transition p-6 rounded-xl col-span-2">
          <h3 className="text-2xl font-semibold mb-2">
            AI Generated Questions
          </h3>
          <p className="text-gray-400">
            Get unique interview questions tailored to your role.
          </p>
        </div>

        <div className="bg-gray-900 hover:bg-gray-800 transition p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">
            Instant Feedback
          </h3>
          <p className="text-gray-400">
            AI analyzes your answers and gives improvements.
          </p>
        </div>

        <div className="bg-gray-900 hover:bg-gray-800 transition p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">
            Track Progress
          </h3>
          <p className="text-gray-400">
            Monitor improvement across interviews.
          </p>
        </div>

        <div className="bg-gray-900 hover:bg-gray-800 transition p-6 rounded-xl col-span-2">
          <h3 className="text-2xl font-semibold mb-2">
            Role Based Interviews
          </h3>
          <p className="text-gray-400">
            Practice for frontend, backend, or system design roles.
          </p>
        </div>

      </div>

    </section>
  )
}