import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/DashboardComponents/Header";
import MobileBottomNav from "../../components/DashboardComponents/MobileBottomNav";
import SideNav from "../../components/DashboardComponents/SideNav";

const DashboardLayout: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex w-screen h-screen scrollbar-hide">
      {/* Sidebar */}
      <aside className="hidden w-[300px] bg-white p-4 md:flex flex-col">
        <SideNav />
      </aside>
      <main className="flex-1 overflow-y-auto bg-white md:pb-5 px-2 scrollbar-hide">
        <Header />
        {/* Header */}
        <div className="bg-primary rounded-4xl min-h-[85vh] max-h-[85vh] overflow-y-auto scrollbar-hide pb-15 md:pb-0">
          <div className="py-5 px-2 md:px-5">
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
