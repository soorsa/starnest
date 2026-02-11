import React from "react";
import TransactionHistory from "../../components/DashboardComponents/TransactionHistory";
import InfoCard from "../../components/DashboardComponents/InfoCard";
import { formatPrice } from "../../utils/formatter";
import { CircleDollarSign, Layers, WalletMinimal } from "lucide-react";
import FilterBar from "../../components/DashboardComponents/FilterBar";

const Transactions: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: 1,
      title: "Saving Plan",
      desc: "one-time payment for Saving Plan",
      created_at: "5/11/2025",
      status: "success",
      amount: 65000,
    },
    {
      id: 2,
      title: "Saving Plan",
      desc: "one-time payment for Saving Plan",
      created_at: "5/11/2025",
      status: "failed",
      amount: 65000,
    },
    {
      id: 1,
      title: "Saving Plan",
      desc: "one-time payment for Saving Plan",
      created_at: "5/11/2025",
      status: "pending",
      amount: 65000,
    },
  ];

  return (
    <div className="">
      <div className="space-y-1 py-10">
        <h1 className="text-3xl font-starnest-bold">Transaction History</h1>
        <p className="text-sm">
          Find all your past transactions and details here.
        </p>
        <div className="md:w-[60%] mx-auto">
          <FilterBar />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 flex justify-center">
          <TransactionHistory data={transactions} />
        </div>
        <div className="order-first md:order-last">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-4">
            <InfoCard
              title="Balance"
              value={formatPrice(65200)}
              icon={<WalletMinimal />}
              isError={false}
              isloading={false}
            />
            <InfoCard
              title="Profits"
              value={formatPrice(65200)}
              secondaryValue={`30%`}
              isPositive
              icon={<CircleDollarSign />}
              isError={false}
              isloading={false}
            />
            <InfoCard
              title="Active Plans"
              value={formatPrice(5)}
              icon={<Layers />}
              isError={false}
              isloading={false}
            />
            <InfoCard
              title="Profits"
              value={formatPrice(65200)}
              secondaryValue={`30%`}
              isPositive
              icon={<CircleDollarSign />}
              isError={false}
              isloading={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
