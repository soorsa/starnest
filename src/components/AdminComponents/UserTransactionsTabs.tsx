import React, { useState } from "react";
import TransactionList from "./TransactionList";
interface Props {
  deposits: Transaction[];
  withdrawals: Transaction[];
}
const UserTransactionsTabs: React.FC<Props> = ({ deposits, withdrawals }) => {
  const tabs = ["Deposits", "Withdrawals"] as const;
  type Tab = (typeof tabs)[number];
  const [activeTab, setActiveTab] = useState<Tab>("Deposits");
  const transactions = activeTab === "Withdrawals" ? withdrawals : deposits;

  return (
    <div className="bg-gray-700 rounded-2xl">
      <div className="flex justify-between items-center mb-4 pt-4 px-4">
        <div className="flex gap-4 text-xl font-starnest-mid">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${
                activeTab === tab
                  ? "text-white underline underline-offset-4"
                  : "text-gray-400"
              } transition`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <TransactionList data={transactions} />
    </div>
  );
};

export default UserTransactionsTabs;
