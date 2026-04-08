import { ClipboardList } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatter";
interface Prop {
  plan: Plan;
}
const PlanItem: React.FC<Prop> = ({ plan }) => {
  return (
    <Link
      to={`/admin/plans/${plan.id}`}
      className="flex divide-x divide-gray-600 odd:bg-gray-900 px-4 py-2 rounded-lg text-sm"
    >
      <ClipboardList className="pr-1" size={40} />
      <div className="pl-1 flex-1 text-left">
        <div className="grid grid-cols-2">
          <div className="">{plan.name}</div>
          <div className="text-right">{plan.duration} months</div>
        </div>
        <div className="grid grid-cols-3 text-gray-300 text-xs">
          <div className="">
            {formatPrice(plan.amount_per_cycle)} {plan.type}
          </div>
          <div className="col-span-2 text-right">
            {formatPrice(plan.total_savings)} savings +{" "}
            {formatPrice(plan.reward)} reward
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlanItem;
