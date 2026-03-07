"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InterviewPage() {
  const router = useRouter();

  const [role, setRole] = useState("frontend");
  const [questions, setQuestions] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [started, setStarted] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [finished, setFinished] = useState(false);

  const [scores, setScores] = useState<number[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  //save interview

  async function saveInterview() {
  const avgScore =
    scores.reduce((a, b) => a + b, 0) / scores.length

  await fetch("/api/save-interview", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      role,
      questions,
      answers,
      scores,
      avgScore,
      userId: "ec255975-3197-40a4-a781-483d20f7c15b", // replace with session user later
    }),
  })
}

  // Start interview
  const startInterview = async () => {
    const res = await fetch("/api/generate-questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role }),
    });

    const data = await res.json();
    const parsedQuestions = JSON.parse(data.questions);

    setQuestions(parsedQuestions);
    setStarted(true);
  };

  // Submit answer
  const submitAnswer = async () => {
    const res = await fetch("/api/evaluate-answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: questions[currentIndex],
        answer,
      }),
    });

    const data = await res.json();
    setFeedback(data.feedback);

    // extract score
    const match = data.feedback.match(/Score:\s*(\d+)/i);

    if (match) {
      const score = Number(match[1]);
      setScores((prev) => [...prev, score]);
    }

    setAnswers((prev) => [...prev, answer]);
  };

  // Next question
  const nextQuestion =async () => {
    setAnswer("");
    setFeedback("");

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      await saveInterview()
    setFinished(true)
    }
  };

  // Stats
  const attempted = scores.length;
  const total = questions.length;

  const avgScore =
    scores.length > 0
      ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1)
      : "0";

  // remark
  let remark = "";

  if (Number(avgScore) >= 8) {
    remark = "Excellent performance. You're interview ready.";
  } else if (Number(avgScore) >= 6) {
    remark = "Good attempt. A bit more practice will help.";
  } else {
    remark = "Needs improvement. Focus on fundamentals.";
  }

  // Reset interview
  const resetInterview = () => {
    setFinished(false);
    setStarted(false);
    setQuestions([]);
    setCurrentIndex(0);
    setScores([]);
    setAnswers([]);
    setAnswer("");
    setFeedback("");
  };

  // REPORT SCREEN
  if (finished) {
    return (
      <main className="min-h-screen bg-black text-white p-10">

        <h1 className="text-4xl font-bold mb-8">
          Interview Report
        </h1>

        <div className="bg-gray-900 p-6 rounded-xl mb-8">
          <p className="mb-2">
            Questions Attempted: {attempted} / {total}
          </p>

          <p className="mb-2">
            Average Score: {avgScore} / 10
          </p>

          <p className="text-green-400 font-semibold">
            Remark: {remark}
          </p>
        </div>

        <h2 className="text-2xl mb-4">
          Question Breakdown
        </h2>

        <div className="space-y-4">

          {questions.map((q, i) => (
            <div key={i} className="bg-gray-900 p-4 rounded">

              <p className="font-semibold mb-2">
                Q{i + 1}: {q}
              </p>

              <p className="text-gray-400 mb-2">
                Your Answer: {answers[i] || "Not answered"}
              </p>

              <p className="text-blue-400">
                Score: {scores[i] || 0} / 10
              </p>

            </div>
          ))}

        </div>

        <div className="mt-10 flex gap-4">

          <button
            onClick={resetInterview}
            className="bg-blue-600 px-6 py-3 rounded"
          >
            Start Another Interview
          </button>

          <button
            onClick={() => router.push("/dashboard")}
            className="bg-gray-700 px-6 py-3 rounded"
          >
            Go to Dashboard
          </button>

        </div>

      </main>
    );
  }

  // MAIN INTERVIEW UI
  return (
    <main className="min-h-screen bg-black text-white p-10">

      {!started ? (

        <div className="space-y-4">

          <h1 className="text-3xl font-bold">
            Start Interview
          </h1>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="bg-gray-800 p-3 rounded"
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
          </select>

          <button
            onClick={startInterview}
            className="bg-blue-600 px-6 py-3 rounded"
          >
            Generate Questions
          </button>

        </div>

      ) : (

        <div>

          <h2 className="text-xl mb-4">
            Question {currentIndex + 1} / {questions.length}
          </h2>

          <p className="mb-6">
            {questions[currentIndex]}
          </p>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full bg-gray-800 p-4 rounded mb-4"
          />

          <button
            onClick={submitAnswer}
            className="bg-green-600 px-6 py-3 rounded mr-4"
          >
            Submit Answer
          </button>

          <button
            onClick={nextQuestion}
            className="bg-blue-600 px-6 py-3 rounded"
          >
            Next Question
          </button>

          {feedback && (
            <div className="mt-6 bg-gray-900 p-4 rounded">
              <h3 className="font-bold mb-2">
                AI Feedback
              </h3>

              <p className="whitespace-pre-wrap">
                {feedback}
              </p>
            </div>
          )}

        </div>

      )}

    </main>
  );
}