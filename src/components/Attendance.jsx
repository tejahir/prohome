import { useState } from "react";
import { Calendar, Search, CheckCircle, XCircle } from "lucide-react";

export default function AttendancePage() {
  const baseEmployes = [
    { id: 1, name: "Rahul Sharma" },
    { id: 2, name: "Priya Patel" },
    { id: 3, name: "Aman Verma" },
    { id: 4, name: "raja rav" },
    { id: 5, name: "rishi vinod" },
    { id: 6, name: "prem krishna" },
  ];

  const today = new Date().toISOString().split("T")[0];

  const [date, setDate] = useState(today);
  const [attendanceRecords, setAttendanceRecords] = useState({});
  const [search, setSearch] = useState("");

  const getAttendanceForDate = (selectedDate) => {
    if (!attendanceRecords[selectedDate]) {
      return baseEmployes.map((s) => ({ ...s, present: false }));
    }

    return baseEmployes.map((s) => ({
      ...s,
      present: attendanceRecords[selectedDate][s.id] || false,
    }));
  };

  const employes = getAttendanceForDate(date);

  const toggleAttendance = (id) => {
    setAttendanceRecords((prev) => {
      const existing = prev[date] || {};
      return {
        ...prev,
        [date]: {
          ...existing,
          [id]: !existing[id],
        },
      };
    });
  };

  return (
    <div className="min-w-298 h-146 flex items-center text-white justify-center bg-[#0a0f2d]/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-lg relative overflow-hidden">
      <div className="w-full max-w-4xl h-140 bg-black p-6 rounded-2xl shadow-xl border border-white/10">

        <div className="flex items-center justify-between mb-3">
          <h1 className="text-3xl font-bold">Attendance Tracker</h1>

          <div className="flex items-center gap-2 bg-[#182243] p-2 px-3 rounded-xl border border-white/10">
            <Calendar className="w-5 h-5" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-transparent outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4 bg-[#182243] p-2 rounded-xl border border-white/10">
          <Search className="w-5 h-5 pointer-events-none" />
          <input
            type="text"
            placeholder="Search Employee..."
            className="bg-transparent w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 h-68 overflow-y-auto pr-2 custom-scroll">
          {employes
            .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
            .map((employe) => (
              <div
                key={employe.id}
                className="flex items-center justify-between bg-[#182243] p-4 rounded-xl border border-white/10"
              >
                <span className="text-lg font-medium">{employe.name}</span>

                <button
                  onClick={() => toggleAttendance(employe.id)}
                  className={`px-4 py-2 rounded-xl font-semibold shadow-md flex items-center gap-2 transition-all duration-200 ${
                    employe.present
                      ? "bg-green-500/80 hover:bg-green-600"
                      : "bg-red-500/80 hover:bg-red-600"
                  }`}
                >
                  {employe.present ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <XCircle className="w-5 h-5" />
                  )}
                  {employe.present ? "Present" : "Absent"}
                </button>
              </div>
            ))}
        </div>

        <div className="mt-4 bg-[#182243] border border-white/10 rounded-xl p-2 grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center bg-[#0f1530] p-4 rounded-xl border border-white/10 w-full">
            <h2 className="text-xl font-bold">Total Employee</h2>
            <p className="text-3xl font-semibold mt-2">{baseEmployes.length}</p>
          </div>

          <div className="flex flex-col h-25 
          items-center justify-center bg-[#0f1530] p-4 rounded-xl border border-white/10 w-full">
            <h2 className="text-xl font-bold">Present on {date}</h2>
            <p className="text-3xl font-semibold mt-2">
              {employes.filter((s) => s.present).length}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
