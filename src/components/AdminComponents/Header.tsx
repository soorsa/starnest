import clsx from "clsx";
import { ArrowRight, Bell, Menu, Settings, UserCircle2, X } from "lucide-react";
import { useState } from "react";
import LinkButton from "../GeneralComponent/LinkButton";
import MobileSideNav from "./MobileSideNav";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="w-full p-4 bg-gray-700 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="cursor-pointer border border-gray-500 hover:bg-gray-500 p-2 rounded-full"
            onClick={() => setisOpen(!isOpen)}
          >
            <Menu size={25} />
          </div>

          <div className="">StarNest Admin</div>
        </div>
        <div className="flex items-center gap-2">
          <LinkButton
            label="Go to site"
            link={`/dashboard`}
            className="w-fit! text-xs! bg-transparent px-3 hover:bg-gray-600"
            rightIcon={<ArrowRight size={14} />}
          />
          <Bell />
          <Settings />
          <UserCircle2 />
        </div>
      </div>
      <div
        className={clsx(
          "fixed inset-0 z-[60] transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "flex flex-row-reverse"
        )}
      >
        {/* Transparent dark overlay */}
        <div
          className="flex-1 bg-black/50 backdrop-blur-xs"
          onClick={() => setisOpen(false)}
        />
        <div className="w-[300px] bg-gray-700 h-full p-6 shadow-lg flex flex-col">
          <button
            onClick={() => setisOpen(false)}
            className="hover:text-shadow-black text-shadow-2xs cursor-pointer"
          >
            <div className="flex justify-between items-center mb-6">
              <img src="/logo.png" alt="Alaba Market" className="w-[20%]" />

              <X size={24} />
            </div>
          </button>
          <div className="" onClick={() => setisOpen(false)}>
            <MobileSideNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
