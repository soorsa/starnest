import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../../components/DashboardComponents/SideNav";
import MobileBottomNav from "../../components/DashboardComponents/MobileBottomNav";
import Header from "../../components/DashboardComponents/Header";

const DashboardLayout: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex w-screen h-screen scrollbar-hide">
      {/* Sidebar */}
      <aside className="hidden w-[300px] bg-white p-4 md:flex flex-col">
        <SideNav />
      </aside>
      <main className="flex-1 pb-20 overflow-y-auto bg-white md:pb-5 scrollbar-hide">
        <Header />
        {/* Header */}
        <div className="bg-primary rounded-4xl">
          <div className="p-5">
            <Outlet />
          </div>
        </div>
      </main>
      <div className="fixed bottom-0 w-full md:block">
        <MobileBottomNav />
      </div>
    </div>
  );
};

export default DashboardLayout;
