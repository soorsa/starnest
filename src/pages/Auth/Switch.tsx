import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Switch: React.FC = () => {
  const tabs = ["login", "register"];
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(
    location.pathname.substring(1)
  );
  console.log(activeTab);
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex flex-row items-center bg-gray-100 rounded-lg h-[45px]">
        {/* Indicator */}
        <div
          className={`absolute w-[146px] h-[35px] bg-white top-[5px] flex items-center justify-center z-10 shadow-sm rounded-md transition-all duration-200 ease-out ${
            activeTab === "login" ? "left-[4px]" : "left-[150px]"
          }`}
        />
        {tabs.map((tab, i) => (
          <Link
            to={tab}
            className={`w-[150px] capitalize cursor-pointer relative z-40 ${
              activeTab === tab ? "text-gray-700" : "text-gray-400"
            }`}
            key={i}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Switch;
