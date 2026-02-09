import React from "react";
import Switch from "./Switch";
import { Link, Outlet } from "react-router-dom";
import { Home } from "lucide-react";

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
      <main className="flex-1 overflow-y-auto scrollbar-hide grid md:grid-cols-2 p-5 md:p-20">
        <div className="">
          <img
            // src="/happy-family.png"
            src="/Sign up-pana.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <div className="bg-white shadow-xs h-[90%] py-5 md:py-10 rounded-2xl">
            <Switch />

            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
