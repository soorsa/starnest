import { AlertCircle, ArrowRight, Loader, Search } from "lucide-react";
import React from "react";
import ErrorPlaceholder from "../DashboardComponents/ErrorPlaceholder";
import LinkButton from "../GeneralComponent/LinkButton";
import ActivePlanItem from "./ActivePlanItem";
interface Prop {
  plans: UserSavingPlan[];
  isLoading: boolean;
  isError: boolean;
}
const ActivePlanList: React.FC<Prop> = ({ plans, isError, isLoading }) => {
  if (isLoading) {
    return <Loader className="text-gray-700 animate-spin" />;
  }
  if (isError) {
    return (
      <ErrorPlaceholder
        icon={<AlertCircle />}
        title="Error"
        message="Failed to get plans"
      />
    );
  }
  return (
    <div className="bg-gray-700 p-4 rounded-3xl space-y-8 min-h-100">
      <div className="flex items-center justify-between">
        <div className="text-left text-xl font-starnest-mid">Active Plans</div>
        <div className="flex items-center gap-2">
          <LinkButton
            label="view all"
            link={`/admin/active-plans`}
            className="border border-gray-900 py-2 px-4 w-fit! bg-transparent hover:bg-gray-900 rounded-xl! transition flex items-center gap-1 text-sm"
            rightIcon={<ArrowRight size={12} />}
          />
        </div>
      </div>
      {plans.length < 1 ? (
        <ErrorPlaceholder
          icon={<Search />}
          title="Not found"
          message="Sorry... no plans found."
        />
      ) : (
        <div className="space-y-0">
          {plans.map((plan, i) => (
            <ActivePlanItem userPlan={plan} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ActivePlanList;
