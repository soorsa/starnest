import { Search } from "lucide-react";
import React from "react";
import PlanListSkeleton from "../SkeletonsComponents/PlanListSkeleton";
import ErrorPlaceholder from "./ErrorPlaceholder";
import PlanCard from "./PlanCard";
interface Prop {
  plans: Plan[];
  isLoading: boolean;
  isError: boolean;
}
const PlanList: React.FC<Prop> = ({ plans, isLoading, isError }) => {
  if (isLoading || isError) {
    return <PlanListSkeleton />;
  }
  // if (isError) {
  //   return (
  //     <ErrorPlaceholder
  //       icon={<AlertCircle />}
  //       title="Error"
  //       message="Sorry... unable to retrieve plan at the moment."
  //     />
  //   );
  // }
  if (plans.length < 1) {
    return (
      <ErrorPlaceholder
        icon={<Search />}
        title="Not found"
        message="Sorry... no plans found."
      />
    );
  }
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      {plans.map((plan, i) => (
        <PlanCard plan={plan} key={i} />
      ))}
    </div>
  );
};

export default PlanList;
