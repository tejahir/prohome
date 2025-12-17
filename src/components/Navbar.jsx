import { Search, Bell, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  return (
    <nav
      className="
        sticky top-4 z-50
        w-[90%] m-2 ml-auto px-6 py-3
        bg-[#0a0f2d]/50 backdrop-blur
        border border-white/10
        flex items-center justify-between
        rounded-xl shadow-lg
      "
    >

      <div className="text-gray-300 font-medium flex items-center gap-2">
        <span className="text-sm opacity-80">/</span>
        <span className="text-sm opacity-80">Dashboard</span>
        <span className="text-black font-bold">Dashboard</span>
      </div>

      <div className="relative w-[32%]">
        <input
          type="text"
          placeholder="Type here..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white/10 text-white py-2 pl-10 pr-4 rounded-full outline-none placeholder-gray-300 border border-white/20 focus:border-blue-400 transition-all"
        />
        <Search className="absolute left-3 top-2.5 text-gray-300" size={18} />
      </div>

      <div className="flex items-center gap-6 text-gray-200">
        <button className="hover:text-white transition flex items-center gap-1">
          <User size={20} />
          <span className="text-sm font-medium">Sign in</span>
        </button>
        <Bell size={22} className="hover:text-white transition" />
      </div>

    </nav>
  );
}
