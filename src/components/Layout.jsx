import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-blue-400 flex">


      <div className="flex-1 flex-col p-5 gap-4">
        <Navbar />
        
        
        <main className="flex gap-5">
          <LeftSidebar />
          <Outlet />
        </main>

        <Footer />
      </div>

    </div>
  );
}
