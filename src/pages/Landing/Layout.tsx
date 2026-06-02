import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/GeneralComponent/NavBar";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen">
      {/* Main Content */}
      <main className=" flex-1 overflow-y-auto md:mb-0 scrollbar-hide">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
