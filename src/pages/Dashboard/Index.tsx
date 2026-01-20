import React from "react";
import InfoCard from "../../components/DashboardComponents/InfoCard";
import { formatDate, formatPrice } from "../../utils/formatter";
import { CircleDollarSign, Layers, WalletMinimal } from "lucide-react";
import GoalProgressCard from "../../components/DashboardComponents/SimplePlanItem";

const DashboardIndex: React.FC = () => {
  const goals = [
    {
      id: 1,
      title: "Emergency Fund",
      amount: 65000,
      roi: 45,
      start_date: "5/11/2025",
      end_date: "9/11/2026",
      percentage: 60,
    },
    {
      id: 2,
      title: "Vacation Savings",
      amount: 65000,
      roi: 45,
      start_date: "5/11/2025",
      end_date: "9/11/2026",
      percentage: 50,
    },
    {
      id: 3,
      title: "New Laptop",
      amount: 65000,
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
      percentage: 60,
    },
  ];
  return (
    <div className="space-y-4 ">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <InfoCard
            title="Balance"
            value={formatPrice(65200)}
            secondaryValue={`30%`}
            icon={<WalletMinimal />}
            isError={false}
            isloading={false}
          />
        </div>
        <InfoCard
          title="Profits"
          value={formatPrice(65200)}
          secondaryValue={`30%`}
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
      <div className="grid sm:grid-cols-2 gap-4 ">
        <div className="bg-white p-4 rounded-2xl space-y-8">
          <div className="text-black text-left text-xl font-starnest-mid">
            My Plans
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
        <div className="bg-white p-10 rounded-lg"></div>
      </div>
    </div>
  );
};

export default DashboardIndex;
