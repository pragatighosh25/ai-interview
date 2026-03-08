"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {

  setError("")

  const res = await fetch("/api/login", {
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  const data = await res.json();
  console.log("LOGIN RESPONSE:", data);

  if (!res.ok || data.error) {
    setError(data.error || "Login failed");
    return;
  }

  localStorage.setItem("token", data.token);
  localStorage.setItem("name", data.name);
  localStorage.setItem("userId", data.userId);

  window.location.href = "/dashboard";
};

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-xl w-96">
        <h1 className="text-2xl mb-6">Login</h1>

        <input
          placeholder="Email"
          className="w-full p-3 mb-3 bg-gray-800"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-3 bg-gray-800"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 w-full py-3 rounded"
        >
          Login
        </button>
      </div>
    </main>
  );
}
