import React, { type ReactNode } from "react";
import { FiBell, FiSettings } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
interface Props {
  children?: ReactNode;
  title?: string;
}
const Header: React.FC<Props> = ({ children, title }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full py-2 px-10 mx-auto mb-6 space-y-3 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex flex-row items-center gap-1">
          <h1 className="text-xl md:text-3xl font-bold text-black">
            {title ? title : "My Dashboard"}
          </h1>
        </div>
        {children ? (
          <div className="flex items-center w-auto gap-3 text-xs max-w-max">
            {children}
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link to={`/dashboard/notifications`} className="relative">
              <div className="h-2 w-2 rounded-full bg-red-500 absolute top-0 right-0"></div>
              <FiBell className="text-xl text-black cursor-pointer" />
            </Link>
            <FiSettings
              className="text-xl text-black cursor-pointer"
              onClick={() => navigate("/dashboard/settings")}
            />
          </div>
        )}
      </div>
      {/* Mobile-only upgrade banner */}
    </div>
  );
};

export default Header;
