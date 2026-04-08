import { CheckCircle2 } from "lucide-react";
import React from "react";
interface Prop {
  plan: Plan;
}
const PlanDetailContainer: React.FC<Prop> = ({ plan }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-2xl text-left space-y-4 max-h-[75vh] overflow-y-auto scrollbar-hide">
      <div className="flex gap-2">
        <div className="h-30 w-30 bg-amber-200 rounded-2xl overflow-hidden">
          <img
            src="/happy-family.png"
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="">
          <div className="text-2xl font-starnest-bold">{plan.name}</div>
          <div className="space-y-2">
            <h3 className="underline underline-offset-4">About</h3>
            <p className="text-sm text-gray-300">{plan.description}</p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="underline underline-offset-4">Benefits</h3>
        <div className="">
          {plan.benefits.map((item, i) => (
            <div
              className="flex items-center text-sm text-gray-300 gap-1 ml-4"
              key={i}
            >
              <CheckCircle2 size={14} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanDetailContainer;
