import {
  AlertCircle,
  ArrowRight,
  Loader,
  PlusCircle,
  Search,
} from "lucide-react";
import React from "react";
import { useModal } from "../../zustand/modal.state";
import ErrorPlaceholder from "../DashboardComponents/ErrorPlaceholder";
import Button from "../GeneralComponent/Button";
import LinkButton from "../GeneralComponent/LinkButton";
import CreatePlan from "./CreatePlan";
import PlanItem from "./PlanItem";
interface Prop {
  plans: Plan[];
  isLoading: boolean;
  isError: boolean;
}
const PlanList: React.FC<Prop> = ({ plans, isError, isLoading }) => {
  const modal = useModal();
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
        <div className="text-left text-xl font-starnest-mid">Saving Plans</div>
        <div className="flex items-center gap-2">
          <Button
            label="create plan"
            className="border border-gray-900 w-fit! bg-transparent text-sm hover:bg-gray-900 px-4 rounded-xl!"
            icon={<PlusCircle size={12} />}
            onClick={() => modal.openModal(<CreatePlan />)}
          />

          <LinkButton
            label="view all"
            link={`/admin/plans`}
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
            <PlanItem plan={plan} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanList;
