import React from "react";
import MyPlansList from "../../components/DashboardComponents/MyPlansList";
import InfoCard from "../../components/DashboardComponents/InfoCard";
import { CircleDollarSign, Layers, WalletMinimal } from "lucide-react";
import { formatPrice } from "../../utils/formatter";

const MyPlans: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-3 gap-4">
      <div className="md:col-span-2">
        <MyPlansList />
      </div>
      <div className="">
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
  );
};

export default MyPlans;
