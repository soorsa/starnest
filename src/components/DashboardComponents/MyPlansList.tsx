import React from "react";
import { formatDate, formatPrice } from "../../utils/formatter";
import { ArrowRight } from "lucide-react";
import GoalProgressCard from "../../components/DashboardComponents/SimplePlanItem";
import { Link } from "react-router-dom";

const MyPlansList: React.FC = () => {
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
  return (
    <div className="bg-white p-4 rounded-2xl space-y-8">
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
  );
};

export default MyPlansList;
