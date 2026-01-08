import { Bell } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const bellRef = useRef();

  const notifications = [
    { id: 1, text: "New user registered" },
    { id: 2, text: "Order placed successfully" },
    { id: 3, text: "Profile updated" },
  ];

  useEffect(() => {
    function handleClickOutside(e) {
      if (bellRef.current && !bellRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={bellRef}>

      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-full hover:bg-black"
      >
        <Bell className="w-6 h-6"/>

        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {notifications.length}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 text-white bg-black rounded-lg shadow-lg border z-50">
            
          <div className="px-4 py-2 font-semibold border-b">
            Notifications
          </div>

          {notifications.length === 0 ? (
            <p className="px-4 py-3 text-sm text-gray-500">
              No new notifications
            </p>
          ) : (
            notifications.map((item) => (
              <div
                key={item.id}
                className="px-4 rounded-lg py-3 text-sm hover:bg-sky-400 text-white cursor-pointer border-b last:border-none"
              >
                {item.text}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
