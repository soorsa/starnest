import {
  BanknoteArrowDown,
  BanknoteArrowUp,
  CircleDollarSign,
  WalletMinimal,
} from "lucide-react";
import React, { useState } from "react";
import FilterBar from "../../components/DashboardComponents/FilterBar";
import InfoCard from "../../components/DashboardComponents/InfoCard";
import Paginator from "../../components/DashboardComponents/Paginator";
import TransactionHistory from "../../components/DashboardComponents/TransactionHistory";
import { useGetTransactions } from "../../hooks/querys/useTransactions";
import { useGetUserByID } from "../../hooks/querys/useUsers";
import { formatPrice } from "../../utils/formatter";
import { useUserState } from "../../zustand/user.state";

const Transactions: React.FC = () => {
  const { user } = useUserState();
  const tabs = ["deposit", "withdrawal"] as const;
  type Tab = (typeof tabs)[number];
  const [activeTab, setActiveTab] = useState<Tab>("deposit");

  const [params, setparams] = useState<TransactionParams>({
    type: "deposit",
    page: 1,
  });
  const { data, isLoading, isError } = useGetTransactions(params);
  const {
    data: userdata,
    isLoading: userdataLoading,
    isError: userdataError,
  } = useGetUserByID(user?.id);
  const changeTab = (tab: Tab) => {
    setActiveTab(tab);
    setparams((prev) => ({ ...prev, type: tab }));
  };

  return (
    <div className="">
      <div className="space-y-1 py-10">
        <h1 className="text-3xl font-starnest-bold">Transaction History</h1>
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
            <div className="flex justify-between items-center pt-4 px-4">
              <div className="flex gap-4 text-xl font-starnest-mid">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`${
                      activeTab === tab
                        ? "text-black underline underline-offset-4"
                        : "text-gray-400"
                    } transition capitalize`}
                    onClick={() => changeTab(tab)}
                  >
                    {`${tab}s`}
                  </button>
                ))}
              </div>
            </div>

            <TransactionHistory
              data={data?.results ?? []}
              isError={isError}
              isLoading={isLoading}
            />
          </div>
          <Paginator
            currentPage={params.page}
            totalPages={Math.ceil((data?.count || 0) / 20)}
            onPageChange={(page) => setparams((prev) => ({ ...prev, page }))}
          />
        </div>
        <div className="order-first lg:order-last">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-4">
            <InfoCard
              title="Total Amount Deposited"
              value={formatPrice(userdata?.total_savings || 0)}
              icon={<WalletMinimal />}
              isError={userdataError}
              isloading={userdataLoading}
            />
            <InfoCard
              title="Total amount withdrawn"
              value={"..."}
              icon={<CircleDollarSign />}
              isError={userdataError}
              isloading={userdataLoading}
            />
            <InfoCard
              title="Total Deposits"
              value={userdata?.deposits.length || 0}
              icon={<BanknoteArrowUp />}
              isError={userdataError}
              isloading={userdataLoading}
            />
            <InfoCard
              title="Total Withdrawals"
              value={userdata?.withdrawals.length || 0}
              icon={<BanknoteArrowDown />}
              isError={userdataError}
              isloading={userdataLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
