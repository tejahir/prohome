import React from "react";
import { Link } from "react-router-dom";

export default function LeftSidebar() {
  return (
    <div className="h-146 text-center bg-[#0b1225] border-r border-white/10 flex flex-col overflow-y-auto rounded-2xl items-center justify-center">
      <div className="p-4 text-white font-bold text-lg">VISION UI FREE</div>

      <div className="px-2 space-y-2 text-white">
        <div className="font-semibold w-60 rounded-lg bg-blue-700/50 text-white text-xs px-2">
          MENU
        </div>

        <Link to="/" className="block p-1 rounded-lg hover:bg-white/10">
          Dashboard
        </Link>
        <Link to="/game" className="block p-1 rounded-lg hover:bg-white/10">
          Game
        </Link>
        <Link to="/attendance" className="block p-1 rounded-lg hover:bg-white/10">
          Attendance
        </Link>
        <Link to="/gallery" className="block p-1 rounded-lg hover:bg-white/10">
          Gallery
        </Link>
        <Link to="/section" className="block p-1 rounded-lg hover:bg-white/10">
          Section
        </Link>

        <div className="font-semibold rounded-lg bg-blue-700/50 text-white text-xs mt-4 px-2">
          ACCOUNT PAGES
        </div>
        <Link to="/profile" className="block p-1 rounded-lg hover:bg-white/10">
          Profile
        </Link>
        <div className="p-1 rounded-lg hover:bg-white/10">Sign In</div>
        <div className="p-1 rounded-lg hover:bg-white/10">Sign Up</div>
      </div>

      <div className="mt-5 p-3 w-60 justify-center items-center bg-gradient-to-br
      from-[#0a4bff] to-[#7a3cff] rounded-xl text-center">
            <div className="text-white font-semibold mb-2">Need help?</div>
            <button className="bg-white text-black px-3 py-1 rounded-md text-sm font-medium">
              DOCUMENTATION
            </button>
          </div>
          
    </div>
  );
}
