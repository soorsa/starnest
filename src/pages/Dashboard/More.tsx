import {
  BadgeCheck,
  ChevronRight,
  HelpCircle,
  LockKeyhole,
  LogOut,
  Mail,
  Phone,
  Settings,
  Trash2,
  UserCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import ChangePassword from "../../components/AuthComponents/ChangePassword";
import LogoutModal from "../../components/AuthComponents/LogoutModal";
import { useModal } from "../../zustand/modal.state";
import { useUserState } from "../../zustand/user.state";

const More = () => {
  const modal = useModal();
  const { user } = useUserState();
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
        modal.openModal(<ChangePassword />);
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
      <div className="">
        <div className="w-full bg-gradient-to-r from-yellow-800 to-yellow-600 rounded-2xl px-4 py-4 flex items-center">
          <div className="flex items-center gap-2">
            <img
              src={user?.profile_picture || "/happy-family.png"}
              alt="user"
              className="h-26 w-26 rounded-full border-7 border-white shadow-sm object-cover"
            />
            <div className="text-left text-white font-starnest-mid ">
              <div className="flex items-center gap-1">
                <div className="text-lg">
                  {user?.first_name} {user?.last_name}
                </div>
                {user?.is_verified && <BadgeCheck size={18} />}
              </div>
              <div className="text-sm text-white/70 flex gap-1 items-center">
                <Mail size={14} />
                {user?.email}
              </div>
              <div className="text-sm text-white/70 flex gap-1 items-center">
                <Phone size={14} />
                {user?.phone_number}
              </div>
            </div>
          </div>
        </div>
      </div>
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
