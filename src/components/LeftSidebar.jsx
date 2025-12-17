import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function LeftSidebar() {
  return (
    <div className="flex gap-4 p-4">

     
      <div className="w-76 p-3 text-center bg-[#0b1225] border-r border-white/10 flex flex-col overflow-y-auto rounded-2xl">

        <div className="p-4 text-white font-bold text-lg">VISION UI FREE</div>

        <div className="px-2 space-y-2 text-white">
          <div className="font-semibold rounded-lg bg-blue-700/50 text-white text-xs px-2">MENU</div>

          <Link to="/" className="block p-2 rounded-lg hover:bg-white/10 cursor-pointer">Dashboard</Link>
          <Link to="/game" className="block p-2 rounded-lg hover:bg-white/10 cursor-pointer">Game</Link>
          <Link to="/attendance" className="block p-2 rounded-lg hover:bg-white/10 cursor-pointer">Attendance</Link>
          <Link to="/gallery" className="block p-2 rounded-lg hover:bg-white/10 cursor-pointer">Gallery</Link>

          <div className="font-semibold rounded-lg bg-blue-700/50 text-white text-xs mt-4 px-2">
            ACCOUNT PAGES
          </div>

          <div className="p-2 rounded-lg hover:bg-white/10 cursor-pointer">Profile</div>
          <div className="p-2 rounded-lg hover:bg-white/10 cursor-pointer">Sign In</div>
          <div className="p-2 rounded-lg hover:bg-white/10 cursor-pointer">Sign Up</div>

          <div className="mt-6 p-4 bg-gradient-to-br from-[#0a4bff] to-[#7a3cff] rounded-xl text-center">
            <div className="text-white font-semibold mb-2">Need help?</div>
            <button className="bg-white text-black px-3 py-1 rounded-md text-sm font-medium">
              DOCUMENTATION
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full">
        <Outlet />
      </div>
    </div>
  );
}
