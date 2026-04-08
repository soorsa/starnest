import {
  BanknoteArrowDown,
  PiggyBank,
  PlusCircle,
  Timer,
  TrendingUp,
} from "lucide-react";
import React from "react";
import { formatPrice } from "../../utils/formatter";
import LinkButton from "../GeneralComponent/LinkButton";
interface Prop {
  plan: Plan;
}
const PlanCard: React.FC<Prop> = ({ plan }) => {
  return (
    <div className="w-full space-y-2 rounded-3xl p-4 h-full bg-white hover:shadow-sm">
      <div className="flex gap-2 items-center">
        <img
          src="/happy-family.png"
          alt={`plan`}
          className="w-10 h-10 rounded-lg object-cover bg-amber-400"
        />
        <div className="flex-1 text-left">
          <div className="font-starnest-mid">{plan.name}</div>
          <div className="text-sm flex items-center divide-x divide-gray-200">
            <PiggyBank className="text-green-500 pr-1" />
            <div className=" pl-1">
              <span className="font-starnest-mid">
                {formatPrice(plan.total_savings)}{" "}
              </span>
              <span className="text-gray-600">Total savings</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 text-left">
        <div className="border border-gray-200 rounded-md p-2">
          <BanknoteArrowDown size={18} className="text-orange-400" />
          <div className="mt-1">
            <div className="text-sm">{formatPrice(plan.amount_per_cycle)}</div>
            <div className="text-xs text-gray-400 capitalize">{plan.type}</div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-md p-2">
          <div className="flex items-center gap-1 text-green-400">
            <TrendingUp size={18} />{" "}
            <span className="text-sm">{plan.interest_rate}%</span>
          </div>
          <div className="mt-1">
            <div className="text-sm">
              {formatPrice(plan.expected_total_payment)}
            </div>
            <div className="text-xs text-gray-400">Reward</div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-md p-2">
          <Timer size={18} />
          <div className="mt-1">
            <div className="text-sm">{plan.duration} months</div>
            <div className="text-xs text-gray-400">Duration</div>
          </div>
        </div>
      </div>
      <LinkButton
        link={`/dashboard/plans/${plan.id}`}
        label="Join Plan"
        className=""
        icon={<PlusCircle size={18} />}
      />
    </div>
  );
};

export default PlanCard;

export const ResponsivePlanCard: React.FC<Prop> = ({ plan }) => {
  return (
    <div className="w-full rounded-3xl p-4 h-full bg-white grid grid-cols-2 md:grid-cols-3 gap-4">
      <img
        src="/happy-family.png"
        alt={`plan`}
        className="hidden md:block h-full rounded-lg object-cover bg-amber-400"
      />
      <div className="col-span-2 space-y-2">
        <div className="flex items-end gap-2">
          <img
            src="/happy-family.png"
            alt={`plan`}
            className="md:hidden w-10 h-10 rounded-lg object-cover bg-amber-400"
          />
          <div className="">
            <p className="font-starnest-mid text-left uppercase">{plan.name}</p>

            <div className="text-sm flex items-center divide-x divide-gray-200">
              <PiggyBank className="text-green-500 pr-1" />
              <div className=" pl-1">
                <span className="font-starnest-mid">
                  {formatPrice(plan.total_savings)}{" "}
                </span>
                <span className="text-gray-600">Total savings</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1 text-left">
          <div className="border border-gray-200 rounded-md p-2">
            <BanknoteArrowDown size={18} className="text-orange-400" />
            <div className="mt-1">
              <div className="text-sm">
                {formatPrice(plan.amount_per_cycle)}
              </div>
              <div className="text-xs text-gray-400">{plan.type}</div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-md p-2">
            <div className="flex items-center gap-1 text-green-400">
              <TrendingUp size={18} />{" "}
              <span className="text-sm">{plan.interest_rate}%</span>
            </div>
            <div className="mt-1">
              <div className="text-sm">
                {formatPrice(plan.expected_total_payment)}
              </div>
              <div className="text-xs text-gray-400">Reward</div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-md p-2">
            <Timer size={18} />
            <div className="mt-1">
              <div className="text-sm">{plan.duration} months</div>
              <div className="text-xs text-gray-400">Duration</div>
            </div>
          </div>
        </div>
        <LinkButton
          link={`/dashboard/plans/${plan.id}`}
          label="Join Plan"
          className=""
          icon={<PlusCircle size={18} />}
        />
      </div>
    </div>
  );
};
