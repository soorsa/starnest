import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import SavingProgressCard from "../../components/DashboardComponents/SimplePlanItem";
import SavingProgressCardListSkeleton from "../SkeletonsComponents/UserSavingPlanListSkeleton";
import ErrorPlaceholder from "./ErrorPlaceholder";
interface Prop {
  plans: UserSavingPlan[];
  isLoading: boolean;
  isError: boolean;
}
const MyPlansList: React.FC<Prop> = ({ plans, isError, isLoading }) => {
  if (isLoading || isError) {
    return <SavingProgressCardListSkeleton />;
  }
  return (
    <div className="bg-white p-4 rounded-2xl space-y-8 min-h-100">
      <div className="flex items-center justify-between">
        <div className="text-black text-left text-xl font-starnest-mid">
          My Active Plans
        </div>
        <Link
          to={`/dashboard/my-plans`}
          className="py-2 px-4 hover:bg-gray-100 rounded-xl transition flex items-center gap-1 text-sm"
        >
          <span className="">view all</span>
          <ArrowRight className="w-4 h-4 text-gray-600" />
        </Link>
      </div>
      {plans.length < 1 ? (
        <ErrorPlaceholder
          title="Not Found"
          message="Sorry... you have not joined any saving plans yet."
        />
      ) : (
        <div className="space-y-2">
          {plans.map((item, index) => (
            <SavingProgressCard userPlan={item} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPlansList;
