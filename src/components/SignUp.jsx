import { useState } from "react";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Sign Up Data:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b1225] to-[#020617]">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl">

        <h2 className="text-2xl font-bold text-white text-center">
          Create Account
        </h2>
        <p className="text-sm text-gray-400 text-center mt-2">
          Sign up to get started
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          <div>
            <label className="text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              required
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <a href="SignIn" className="text-blue-400 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
