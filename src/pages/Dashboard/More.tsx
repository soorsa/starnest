import {
  BadgeCheck,
  ChevronRight,
  HelpCircle,
  LockKeyhole,
  LogOut,
  Mail,
  Phone,
  Share2,
  Stars,
  UserCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import ChangePassword from "../../components/AuthComponents/ChangePassword";
import LogoutModal from "../../components/AuthComponents/LogoutModal";
import MakeReferralWithdrawal from "../../components/DashboardComponents/MakeReferralWithdrawal";
import Support from "../../components/DashboardComponents/Support";
import Button from "../../components/GeneralComponent/Button";
import CopyText from "../../components/GeneralComponent/CopyText";
import ReferralSkeleton from "../../components/SkeletonsComponents/ReferralSkeleton";
import { useGetMyReferral } from "../../hooks/querys/useReferral";
import { formatPrice } from "../../utils/formatter";
import { useModal } from "../../zustand/modal.state";
import { useUserState } from "../../zustand/user.state";

const More = () => {
  const modal = useModal();
  const { user } = useUserState();
  const { data, isLoading, isError } = useGetMyReferral();
  const earnings = Number(data?.referral_earnings) || 0;
  const canWithdraw = earnings > 999;
  const links = [
    {
      name: "Profile",
      icon: <UserCircle2 />,
      href: "/dashboard/profile",
    },
    {
      name: "My Plans",
      icon: <Stars />,
      href: "/dashboard/my-plans",
    },
    {
      name: "Referral",
      icon: <Share2 />,
      href: "/dashboard/referrals",
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
      name: "Support",
      icon: <HelpCircle />,
      onClick: () => {
        modal.openModal(<Support />);
      },
    },
  ];
  return (
    <div className="space-y-10">
      <div className="grid md:grid-cols-2 gap-2">
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
        {isLoading && isError ? (
          <ReferralSkeleton />
        ) : (
          <div className="space-y-3 bg-gradient-to-r from-gray-800 to-gray-700 p-4 rounded-2xl text-white">
            <div className="gap-2 grid md:grid-cols-2">
              <div className="flex flex-col gap-4 justify-between text-sm">
                <div className="text-gray-300">Referral Earnings</div>
                <div className="text-2xl font-starnest-bold">
                  {formatPrice(earnings)}
                </div>
                <Button
                  label="Withdraw balance"
                  className="text-xs"
                  disabled={!canWithdraw}
                  onClick={() => modal.openModal(<MakeReferralWithdrawal />)}
                />
              </div>

              <div className="text-sm text-left gap-2 grid grid-cols-2 md:grid-cols-1">
                <div className="rounded-lg md:text-right flex flex-col md:items-end">
                  <div className="text-gray-300">Referral code:</div>
                  <CopyText
                    content={data?.referral_code || ""}
                    truncate={false}
                    className="text-white border w-fit! border-gray-300"
                  />
                </div>
                <div className="rounded-lg md:text-right">
                  <div className="text-gray-300">Total Referrals:</div>
                  <div className="text-xs">{`${data?.total_referrals} people`}</div>
                </div>
              </div>
            </div>
          </div>
        )}
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
