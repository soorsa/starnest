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
  Users2,
} from "lucide-react";
import { useModal } from "../../zustand/modal.state";
import LogoutModal from "../AuthComponents/LogoutModal";
import NavItem from "./NavItem";

const MobileSideNav = () => {
  const NAVITEMS = [
    { label: "Overview", path: "/admin", icon: <Home /> },
    { label: "Plans", path: "/admin/plans", icon: <Star /> },
    { label: "Active Plans", path: "/admin/active-plans", icon: <Stars /> },
    { label: "Users", path: "/admin/users", icon: <Users2 /> },
    {
      label: "Transactions",
      path: "/admin/transactions",
      icon: <ChartBar />,
    },
  ];
  const modal = useModal();

  return (
    <div>
      <nav className="py-8 space-y-2 mt-5">
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
              path: "/admin/profile",
              icon: <User className="w-4 h-4" />,
            },
            {
              label: "Setting",
              path: "/admin/settings",
              icon: <Settings className="w-4 h-4" />,
            },
            {
              label: "Security",
              path: "/admin/privacy",
              icon: <Lock className="w-4 h-4" />,
            },
            {
              label: "Logout",
              // path: "/dashboard/settings",
              onclick() {
                modal.openModal(<LogoutModal />);
              },
              icon: <LogOut className="w-4 h-4" />,
            },
          ]}
        />
      </nav>
    </div>
  );
};

export default MobileSideNav;
