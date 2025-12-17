import React from "react";
import Attendance from "./Attendance";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="rounded-2xl p-10 relative overflow-hidden bg-blue-400 text-center">
        <h2 className="text-black text-6xl font-bold mb-1">Welcome</h2>
        <h1 className="text-white text-3xl font-extrabold mt-2">Dashboard Page</h1>
        <p className="mt-6 text-3xl font-light text-black/80">
          Glad to see you again! Ask me anything.
        </p>
        <br/>
        <h2 className="ext-black text-4xl font-bold mb-1">hey'👋</h2>
        {/* <button className="mt-8 text-white bg-black/80 px-6 py-2 rounded-full text-md border-2 border-white/70 hover:bg-black/40 cursor-pointer transition">
          Visit my Page →
        </button> */}
      </div>

      <div className="flex flex-row gap-6 items-center justify-center flex-wrap">
        <div className="w-[550px] text-center bg-[#0a0f2d]/50 backdrop-blur-xl rounded-2xl p-10 border border-white/10 shadow-lg relative overflow-hidden">
          <img
            src="public/img/tic-tac-toe-3.avif"
            className="absolute right-0 bottom-0 rounded-2xl w-32 h-32 opacity-90"
          />
          <h2 className="text-white text-3xl font-bold mb-1">Welcome,</h2>
          <h1 className="text-blue-300 text-3xl font-extrabold">My Game Page</h1>
          <p className="text-lg text-white mt-2">Glad to see you again!<br />Ask me anything.</p>
          <button className="mt-6 text-white bg-white/10 px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 cursor-pointer transition">
            Game Page →
          </button>
        </div>

        <div className="w-[550px] text-center bg-[#0a0f2d]/50 backdrop-blur-xl rounded-2xl p-10 border border-white/10 shadow-lg relative overflow-hidden">
          <img
            src="public/img/621e3b9a66d83d63c970eb72_619cef5c40cb89333a33f4e9_template-vignette-ATTENDANCE-SHEET-1200x900.jpeg"
            className="absolute right-0 bottom-0 rounded-2xl w-32 h-32 opacity-90"
          />
          <h2 className="text-white text-3xl font-bold mb-1">Welcome,</h2>
          <h1 className="text-blue-300 text-3xl font-extrabold">My Attendance Page</h1>
          <p className="text-lg text-white mt-2">Glad to see you again!<br />Ask me anything.</p>
          <button className="mt-6 text-white bg-white/10 px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 cursor-pointer transition">
            Attendance Page →
          </button>
        </div>
      </div>

    </div>
  );
}