import React from "react";
import InfoCard from "../../components/DashboardComponents/InfoCard";
import { formatDate, formatPrice } from "../../utils/formatter";
import {
  ArrowRight,
  CircleDollarSign,
  Layers,
  WalletMinimal,
} from "lucide-react";
import GoalProgressCard from "../../components/DashboardComponents/SimplePlanItem";
import { Link } from "react-router-dom";
import RecomendedPlanCarousel from "../../components/DashboardComponents/RecommendedPlanCarousel";
import TransactionHistory from "../../components/DashboardComponents/TransactionHistory";

const DashboardIndex: React.FC = () => {
  const goals = [
    {
      id: 1,
      title: "Soosoil Savings Plan",
      amount: 65000,
      roi: 45,
      start_date: "5/11/2025",
      end_date: "9/11/2026",
      percentage: 60,
    },
    {
      id: 2,
      title: "Vaca Savings Plan",
      amount: 46500,
      roi: 45,
      start_date: "5/11/2025",
      end_date: "9/11/2026",
      percentage: 50,
    },
    {
      id: 3,
      title: "IKD Savings Plan",
      amount: 23000,
      roi: 45,
      start_date: "5/11/2025",
      end_date: "9/11/2026",
      percentage: 72,
    },
    {
      id: 4,
      title: "Car Down Payment",
      amount: 65000,
      roi: 45,
      start_date: "5/11/2025",
      end_date: "9/11/2026",
      percentage: 12,
    },
  ];
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
    <div className="space-y-4 ">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <InfoCard
            title="Balance"
            value={formatPrice(65200)}
            icon={<WalletMinimal />}
            isError={false}
            isloading={false}
          />
        </div>
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
      </div>
      <div className="w-full">
        <RecomendedPlanCarousel />
      </div>
      <div className="grid sm:grid-cols-2 gap-4 ">
        <div className="bg-white p-4 rounded-3xl space-y-8">
          <div className="flex items-center justify-between">
            <div className="text-black text-left text-xl font-starnest-mid">
              My Plans
            </div>
            <Link
              to={`/dashboard/my-plans`}
              className="py-2 px-4 hover:bg-gray-100 rounded-xl transition flex items-center gap-1 text-sm"
            >
              <span className="">view all</span>
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </Link>
          </div>
          <div className="space-y-2">
            {goals.map((item, index) => (
              <GoalProgressCard
                key={index}
                title={item.title}
                roi={item.roi}
                amount={formatPrice(item.amount)}
                start_date={formatDate(item.start_date)}
                end_date={formatDate(item.end_date)}
                percentage={item.percentage}
              />
            ))}
          </div>
        </div>
        <TransactionHistory data={transactions} />
      </div>
    </div>
  );
};

export default DashboardIndex;
