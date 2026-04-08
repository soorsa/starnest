import {
  BadgeCheck,
  BanknoteArrowDown,
  HandCoins,
  PlusCircle,
  Timer,
  TrendingUp,
} from "lucide-react";
import React from "react";
import { formatDate, formatPrice } from "../../utils/formatter";
import { useModal } from "../../zustand/modal.state";
import Button from "../GeneralComponent/Button";
import ClearanceModal from "./ClearanceModal";
import MakeDeposit from "./MakeDeposit";
interface Prop {
  userPlan: UserSavingPlan;
}
const PlanCardSummary: React.FC<Prop> = ({ userPlan }) => {
  const modal = useModal();
  const { plan_object, progress_percentage } = userPlan;
  const today = new Date();
  const endDate = new Date(userPlan.end_date);
  const isMatured = today >= endDate;
  const has_completed_payment = userPlan.progress_percentage >= 100;
  const is_ready_for_clearance =
    isMatured && has_completed_payment && userPlan.completed;
  return (
    <div className="space-y-4 md:min-h-[80vh] md:max-h-[80vh] flex flex-col overflow-y-auto scrollbar-hide">
      {/* Progress Bars */}
      <div className="space-y-4 bg-white p-4 rounded-2xl">
        <div className="text-left">
          <div className="flex items-center">
            <span className="text-2xl font-starnest-mid ">Your Progress </span>
            <span className="px-3 py-1 flex gap-2 text-xs ml-4 text-blue-500 border rounded-md">
              {userPlan.hands} hands
              <HandCoins size={14} />
            </span>
          </div>
          {has_completed_payment && (
            <div className="flex items-center gap-2 py-2 px-4 text-xs bg-green-500/5 text-green-500 rounded-lg">
              <div className="">Congrats!.. you have reached your target</div>
              <BadgeCheck />
            </div>
          )}
        </div>

        <div className="space-y-2">
          {/* Background bar */}
          <div className="h-3 w-full flex items-center gap-1">
            <div
              className="h-3 rounded-sm bg-green-500 transition-all"
              style={{ width: `${progress_percentage}%` }}
            />
            <div
              className="h-3 rounded-sm bg-gray-800 transition-all"
              style={{ width: `${100 - progress_percentage}%` }}
            />
          </div>
          <div className="flex justify-between item-center text-base text-gray-600">
            <div className="">
              <div className="text-sm">Total Paid</div>
              {/* <CircleSmall size={15} fill="black" /> */}
              <div className="font-starnest-bold">
                {formatPrice(userPlan.total_paid)}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-sm">Target</div>
              <div className="font-starnest-bold">
                {formatPrice(userPlan.total_target)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {!is_ready_for_clearance && (
        <div className="p-4 bg-white rounded-2xl flex gap-1">
          <div className="text-left text-sm gap-2 flex-1">
            <div className="">Proceed to withdraw your reward and savings</div>
          </div>
          <Button
            label="Start Clearance"
            className="w-fit! px-3 text-sm bg-yellow-500 hover:bg-amber-600"
            onClick={() => modal.openModal(<ClearanceModal item={userPlan} />)}
          />
        </div>
      )}
      {has_completed_payment ? (
        <div className="p-4 bg-green-500/10 rounded-2xl flex gap-2 text-green-700">
          <BadgeCheck />
          <div className="text-left text-sm gap-2 flex-1">
            <div className="">
              Congrats!... you have completed payments, after completing your{" "}
              <b>clearance</b> on <b>{formatDate(userPlan.end_date)}</b> you
              will recieve a payment of{" "}
              <b>{formatPrice(userPlan.total_recieveable)}</b>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 bg-white rounded-2xl grid grid-cols-2">
          <div className="text-left text-sm gap-2">
            <div className="text-gray-600">Next deposit date:</div>
            <div className="">{formatDate(userPlan.next_payment_date)}</div>
          </div>
          <Button
            label="Make Deposit"
            className=""
            icon={<PlusCircle size={18} />}
            onClick={() =>
              modal.openModal(
                <MakeDeposit single={false} user_plan={userPlan} />
              )
            }
          />
        </div>
      )}

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
            <div className="flex justify-between w-full">
              <p className="font-starnest-mid text-left uppercase">
                {plan_object.name}
              </p>
              <div className="border text-xs rounded-md px-4 py-1 text-blue-500 flex gap-2 items-center">
                {userPlan.hands} hands
                <HandCoins size={14} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1 text-left">
            <div className="border border-gray-200 rounded-md p-1">
              <BanknoteArrowDown size={18} className="text-orange-400" />
              <div className="mt-1">
                <div className="text-sm">
                  {formatPrice(userPlan.amount_per_month)}
                </div>
                <div className="text-xs text-gray-400">{plan_object.type}</div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-md p-1">
              <div className="flex items-center gap-1 text-green-400">
                <TrendingUp size={18} />{" "}
                <span className="text-sm">{plan_object.interest_rate}%</span>
              </div>
              <div className="mt-1">
                <div className="text-sm">
                  {formatPrice(userPlan.total_recieveable)}
                </div>
                <div className="text-xs text-gray-400">Reward</div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-md p-1">
              <Timer size={18} />
              <div className="mt-1">
                <div className="text-sm">{plan_object.duration} months</div>
                <div className="text-xs text-gray-400">Duration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative flex-1 p-4 rounded-3xl w-full text-left space-y-4">
        <h3 className="text-2xl font-starnest-mid underline underline-offset-2">
          About this plan
        </h3>
        <div className="text-sm text-gray-700 divide-y divide-gray-200 space-y-1">
          <div className="flex justify-between">
            <div className="">Start date:</div>
            <div className="text-right font-starnest-mid">
              {formatDate(userPlan.start_date)}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="">End date:</div>
            <div className="text-right font-starnest-mid">
              {formatDate(userPlan.end_date)}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="">Start date:</div>
            <div className="text-right font-starnest-mid">
              {formatDate(userPlan.start_date)}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="">Progress:</div>
            <div className="text-right font-starnest-mid">
              {userPlan.progress_percentage}%
            </div>
          </div>
          <div className="flex justify-between">
            <div className="">Amount paid:</div>
            <div className="text-right font-starnest-mid">
              {formatPrice(userPlan.total_paid)}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="">Amount to be recieved:</div>
            <div className="text-right font-starnest-mid">
              {formatPrice(userPlan.total_recieveable)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCardSummary;
