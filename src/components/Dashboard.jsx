import React from "react";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-w-298 h-146 gap-2">

      {/* HERO */}
      <div className="rounded-2xl p-10 relative overflow-hidden bg-blue-400 text-center">
        <h2 className="text-black text-6xl font-bold mb-1">Welcome</h2>
        <h1 className="text-white text-3xl font-extrabold mt-2">
          Dashboard Page
        </h1>
        <p className="mt-6 text-3xl font-light text-black/80">
          Glad to see you again! Ask me anything.
        </p>
        <br />
        <h2 className="text-black text-4xl font-bold mb-1">
          hey 👋
        </h2>
      </div>

      {/* CARDS */}
      <div className="flex flex-row gap-6 items-center justify-center flex-wrap">

        {/* GAME CARD */}
        <div className="w-[550px] text-center bg-[#0a0f2d]/50 backdrop-blur-xl rounded-2xl p-10 border border-white/10 shadow-lg relative overflow-hidden">
          <img
            src="/img/tic-tac-toe-3.avif"
            alt="Game"
            className="absolute right-0 bottom-0 rounded-2xl w-32 h-32 opacity-90"
          />
          <h2 className="text-white text-3xl font-bold mb-1">Welcome,</h2>
          <h1 className="text-blue-300 text-3xl font-extrabold">
            My Game Page
          </h1>
          <p className="text-lg text-white mt-2">
            Glad to see you again!
            <br />
            Ask me anything.
          </p>
          <button className="mt-6 text-white bg-white/10 px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition">
            Game Page →
          </button>
        </div>

        {/* ATTENDANCE CARD */}
        <div className="w-[550px] text-center bg-[#0a0f2d]/50 backdrop-blur-xl rounded-2xl p-10 border border-white/10 shadow-lg relative overflow-hidden">
          <img
            src="/img/attendance.jpeg"
            alt="Attendance"
            className="absolute right-0 bottom-0 rounded-2xl w-32 h-32 opacity-90"
          />
          <h2 className="text-white text-3xl font-bold mb-1">Welcome,</h2>
          <h1 className="text-blue-300 text-3xl font-extrabold">
            My Attendance Page
          </h1>
          <p className="text-lg text-white mt-2">
            Glad to see you again!
            <br />
            Ask me anything.
          </p>
          <button className="mt-6 text-white bg-white/10 px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition">
            Attendance Page →
          </button>
        </div>

      </div>
    </div>
  );
}
