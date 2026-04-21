import { Home } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Switch from "./Switch";

const AuthLayout: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen">
      <Link to={"/"} className="absolute top-4 left-4 flex items-center gap-5">
        <div className="bg-white shadow-xl md:shadow-none rounded-full h-[50px] w-[50px] flex justify-center items-center cursor-pointer">
          <Home size={25} />
        </div>
        <div className="px-7 py-2 bg-white rounded-full cursor-pointer shadow-xl md:shadow-none">
          <div className="h-12">
            <img src="/logo-h2.png" alt="" className="h-full" />
          </div>
        </div>
      </Link>
      {/* Main Content */}
      <main className="flex-1 overflow-y-hidden scrollbar-hide grid md:grid-cols-2 p-5 md:p-20">
        <div className="hidden md:block">
          <img
            // src="/happy-family.png"
            src="/Sign up-pana.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4 mt-20 md:mt-0">
          <div className="bg-white shadow-xs h-[80%] py-5 md:py-10 rounded-2xl">
            <Switch />

            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
