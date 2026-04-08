import {
  ChevronRight,
  HelpCircle,
  LockKeyhole,
  LogOut,
  Settings,
  Trash2,
  UserCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import LogoutModal from "../../components/AuthComponents/LogoutModal";
import { useModal } from "../../zustand/modal.state";

const More = () => {
  const modal = useModal();
  const links = [
    {
      name: "Profile",
      icon: <UserCircle2 />,
      href: "/dashboard/profile",
    },
    {
      name: "Settings",
      icon: <Settings />,
      href: "/dashboard/settings",
    },
    {
      name: "Support",
      icon: <HelpCircle />,
      href: "/dashboard/support",
    },
  ];
  const actions = [
    {
      name: "Logout",
      icon: <LogOut />,
      onClick: () => {
        modal.openModal(<LogoutModal />);
      },
    },
    {
      name: "Change password",
      icon: <LockKeyhole />,
      onClick: () => {
        modal.openModal(<LogoutModal />);
      },
    },
    {
      name: "Delete Account",
      icon: <Trash2 />,
      onClick: () => {
        modal.openModal(<LogoutModal />);
      },
    },
  ];
  return (
    <div className="space-y-10">
      <div className="space-y-1">
        {links.map((item, i) => (
          <Link
            to={item.href}
            className="flex justify-between bg-white hover:bg-white/50 rounded-2xl p-4"
            key={i}
          >
            <div className="flex gap-2">
              {item.icon}
              <div className="">{item.name}</div>
            </div>
            <ChevronRight />
          </Link>
        ))}
      </div>
      <div className="space-y-1">
        {actions.map((item, i) => (
          <div
            onClick={item.onClick}
            className="cursor-pointer flex justify-between bg-white hover:bg-white/50 rounded-2xl p-4"
            key={i}
          >
            <div className="flex gap-2">
              {item.icon}
              <div className="">{item.name}</div>
            </div>
            <ChevronRight />
          </div>
        ))}
      </div>
    </div>
  );
};

export default More;
