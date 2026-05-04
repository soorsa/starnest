import { BanknoteArrowDown, Copy, CopyCheck, Users } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import FilterBar from "../../components/DashboardComponents/FilterBar";
import InfoCard from "../../components/DashboardComponents/InfoCard";
import MakeReferralWithdrawal from "../../components/DashboardComponents/MakeReferralWithdrawal";
import RefWithdrawalHistory from "../../components/DashboardComponents/ReferralWithdrawals";
import {
  useGetMyReferral,
  useGetRefWithdrawals,
} from "../../hooks/querys/useReferral";
import { formatPrice } from "../../utils/formatter";
import { useModal } from "../../zustand/modal.state";

const Referrals: React.FC = () => {
  const modal = useModal();
  const [copied, setCopied] = useState(false);
  const {
    data: referralStats,
    isLoading: loadingReferralStats,
    isError: ReferralStatsError,
  } = useGetMyReferral();
  const { data, isLoading, isError } = useGetRefWithdrawals();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(referralStats?.referral_code || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const handleWithdrawl = () => {
    if (referralStats?.referral_earnings) {
      if (Number(referralStats?.referral_earnings) > 999) {
        modal.openModal(<MakeReferralWithdrawal />);
      } else {
        toast.error("Insufficient balance... balance must be at least ₦1000");
      }
    }
  };

  return (
    <div className="">
      <div className="space-y-1 py-10">
        <h1 className="text-3xl font-starnest-bold">Referral History</h1>
        <p className="text-sm">
          Find all your past transactions and details here.
        </p>
        <div className="lg:w-[60%] mx-auto">
          <FilterBar />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl">
            <RefWithdrawalHistory
              data={data ?? []}
              isError={isError}
              isLoading={isLoading}
            />
          </div>
        </div>
        <div className="order-first lg:order-last">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-4">
            <div className="col-span-2 lg:col-span-1">
              <InfoCard
                title="Referral Earnings"
                value={formatPrice(referralStats?.referral_earnings || 0)}
                // icon={<WalletMinimal />}
                onclick={handleWithdrawl}
                icon={
                  <>
                    <div className="flex text-sm gap-1 items-center">
                      <BanknoteArrowDown size={18} />
                      withdraw
                    </div>
                  </>
                }
                isError={ReferralStatsError}
                isloading={loadingReferralStats}
              />
            </div>
            <InfoCard
              title="People Referred"
              value={referralStats?.total_referrals || 0}
              icon={<Users />}
              isError={ReferralStatsError}
              isloading={loadingReferralStats}
            />
            <InfoCard
              title="Referral Code"
              value={copied ? "Copied" : referralStats?.referral_code || 0}
              icon={
                copied ? <CopyCheck className="text-green-500" /> : <Copy />
              }
              isError={ReferralStatsError}
              isloading={loadingReferralStats}
              onclick={handleCopy}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
