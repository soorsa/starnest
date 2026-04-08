import React, { useState } from "react";
import Filter from "../../components/AdminComponents/Filter";
import InfoCard from "../../components/AdminComponents/InfoCard";
import Paginator from "../../components/AdminComponents/Paginator";
import TransactionList from "../../components/AdminComponents/TransactionList";
import { useGetAdminStats } from "../../hooks/querys/useStats";
import { useGetTransactions } from "../../hooks/querys/useTransactions";
import { formatPrice } from "../../utils/formatter";

const Transactions: React.FC = () => {
  const tabs = ["deposit", "withdrawal"] as const;
  type Tab = (typeof tabs)[number];
  const [activeTab, setActiveTab] = useState<Tab>("deposit");

  const [params, setparams] = useState<TransactionParams>({
    type: "deposit",
    page: 1,
  });
  const { data, isLoading, isError } = useGetTransactions(params);
  const {
    data: adminStats,
    isError: isAdminError,
    isLoading: isAdminLoading,
  } = useGetAdminStats();
  const changeTab = (tab: Tab) => {
    setActiveTab(tab);
    setparams((prev) => ({ ...prev, type: tab }));
  };
  console.log(params);
  console.log(activeTab);
  return (
    <div className="">
      <div className="space-y-1 py-10">
        <h1 className="text-3xl font-starnest-bold">Transaction History</h1>
        <p className="text-sm">
          Find all your past transactions and details here.
        </p>
        <div className="lg:w-[60%] mx-auto">
          <Filter />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="bg-gray-700 rounded-2xl">
            <div className="flex justify-between items-center pt-4 px-4">
              <div className="flex gap-4 text-xl font-starnest-mid">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`${
                      activeTab === tab
                        ? "text-white underline underline-offset-4"
                        : "text-gray-400"
                    } transition capitalize`}
                    onClick={() => changeTab(tab)}
                  >
                    {`${tab}s`}
                  </button>
                ))}
              </div>
            </div>

            <TransactionList
              data={data?.results ?? []}
              isError={isError}
              isLoading={isLoading}
            />
          </div>
          <Paginator
            currentPage={params.page || 1}
            totalPages={Math.ceil((data?.count || 0) / 20)}
            onPageChange={(page) => setparams((prev) => ({ ...prev, page }))}
          />
        </div>
        <div className="order-first lg:order-last">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-4">
            <InfoCard
              title="Total Deposits"
              value={formatPrice(adminStats?.total_deposits || 0)}
              isError={isAdminError}
              isloading={isAdminLoading}
            />
            <InfoCard
              title="Total Withdrawals"
              value={formatPrice(adminStats?.total_withdrawals || 0)}
              isError={isAdminError}
              isloading={isAdminLoading}
            />
            <InfoCard
              title="Total Savings"
              value={formatPrice(adminStats?.total_savings || 0)}
              isError={isAdminError}
              isloading={isAdminLoading}
            />
            <InfoCard
              title="Expected Payout"
              value={formatPrice(adminStats?.total_amount_of_active_plans || 0)}
              isError={isAdminError}
              isloading={isAdminLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
