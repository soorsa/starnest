// import { RiAppsLine } from "react-icons/ri";
import {
  ChartBar,
  Home,
  Lock,
  LogOut,
  Settings,
  Star,
  Stars,
  User,
  UserCircle,
} from "lucide-react";
import NavItem from "./NavItem";
const NAVITEMS = [
  { label: "Overview", path: "/dashboard", icon: <Home /> },
  { label: "Plans", path: "/dashboard/plans", icon: <Star /> },
  { label: "My Plans", path: "/dashboard/my-plans", icon: <Stars /> },
  { label: "Report", path: "/dashboard/report", icon: <ChartBar /> },
];
const SideNav = () => {
  return (
    <div className="flex flex-col justify-between h-screen px-4 overflow-y-scroll scrollbar-hide">
      <div className="w-full h-full pb-8">
        <img src="/logo-h2.png" alt="Starnest" className="w-[70%]" />
        <nav className="py-8 space-y-2 mt-20">
          {NAVITEMS.map((item, i) => (
            <NavItem
              key={i}
              label={item.label}
              icon={item.icon}
              path={item.path}
            />
          ))}

          {/* Nested nav */}
          <NavItem
            label="Mike Milligan"
            icon={<UserCircle className="w-5 h-5 " />}
            children={[
              {
                label: "Profile",
                path: "/dashboard/profile",
                icon: <User className="w-4 h-4" />,
              },
              {
                label: "Setting",
                path: "/dashboard/settings",
                icon: <Settings className="w-4 h-4" />,
              },
              {
                label: "Security",
                path: "/dashboard/privacy",
                icon: <Lock className="w-4 h-4" />,
              },
              {
                label: "Logout",
                path: "/dashboard/settings",
                icon: <LogOut className="w-4 h-4" />,
              },
            ]}
          />
        </nav>
      </div>
      {/* <NavbarAddorder /> */}
    </div>
  );
};

export default SideNav;
