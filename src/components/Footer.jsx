import React from "react";

export default function Footer() {
  return (
    <footer className="rounded-2xl w-366 text-center text-xl m-2 bg-[#0b0b0b] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="md:w-1/4">
            <div className="mb-4">
              <div className="text-white font-bold text-xl tracking-wider">LOGO</div>
              <div className="text-xs text-gray-400 mt-1">SLOGAN COMPANY</div>
            </div>
          </div>

          <div className="md:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

            <div>
              <h4 className="text-xs text-gray-400 uppercase mb-3">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Theme Tweak</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs text-gray-400 uppercase mb-3">Showcase</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Showcase</a></li>
                <li><a href="#" className="hover:underline">WidgetKit</a></li>
                <li><a href="#" className="hover:underline">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs text-gray-400 uppercase mb-3">About</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Affiliates</a></li>
                <li><a href="#" className="hover:underline">Resources</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-800 my-8" />

        <div>
          <div className="text-xs text-gray-500">© Copyright. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
