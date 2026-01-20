import { FaHome } from "react-icons/fa";
import { RiAppsLine } from "react-icons/ri";
import React from "react";
import MobileNavItem from "./MobileNavItem";
import { ChartBar, Star, Stars } from "lucide-react";

const MobileBottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-around px-2 py-4 bg-primary shadow-lg shadow-black md:hidden">
      <MobileNavItem
        label="Home"
        icon={<FaHome size={24} />}
        path="/dashboard"
      />
      <MobileNavItem
        label="My Plans"
        icon={<Stars size={24} />}
        path="/dashboard/inventory"
      />
      <button
        className="flex items-center justify-center w-18 h-18 -mt-8 bg-white rounded-full shadow-2xl bg-brand"
        // onClick={handleCreateOrder}
      >
        <Star size={28} className="text-yellow-400" />
      </button>
      <MobileNavItem
        label="Report"
        icon={<ChartBar size={24} />}
        path="/dashboard/orders"
        // badgeCount={4} // Example badge for notifications
      />
      <MobileNavItem
        label="More"
        icon={<RiAppsLine size={24} />}
        path="/dashboard/more"
      />
    </nav>
  );
};

export default MobileBottomNav;
