import {
  BadgeCheck,
  BanknoteArrowDown,
  HandCoins,
  PenBox,
  PlusCircle,
  Timer,
  Trash2,
  TrendingUp,
} from "lucide-react";
import React from "react";
import { formatDate, formatPrice } from "../../utils/formatter";
import { useModal } from "../../zustand/modal.state";
import ClearanceModal from "../DashboardComponents/ClearanceModal";
import MakeDeposit from "../DashboardComponents/MakeDeposit";
import Button from "../GeneralComponent/Button";
interface Prop {
  userPlan: UserSavingPlan;
}
const ActivePlanSummaryCard: React.FC<Prop> = ({ userPlan }) => {
  const modal = useModal();
  const { plan_object, progress_percentage } = userPlan;
  const today = new Date();
  const endDate = new Date(userPlan.end_date);
  const isMatured = today >= endDate;
  const user_name =
    userPlan.user.first_name && userPlan.user.last_name
      ? `${userPlan.user.first_name} ${userPlan.user.last_name}`
      : userPlan.user.username;

  return (
    <div className="space-y-4 md:min-h-[80vh] md:max-h-[80vh] flex flex-col overflow-y-auto scrollbar-hide">
      {/* Progress Bars */}
      <div className="space-y-4 bg-gray-700 p-4 rounded-2xl">
        <div className="text-left">
          <div className="flex items-center">
            <span className="text-2xl font-starnest-mid ">Your Progress </span>
            <span className="px-3 py-1 flex gap-2 text-xs ml-4 text-blue-500 border rounded-md">
              {userPlan.hands} hands
              <HandCoins size={14} />
            </span>
          </div>
          {userPlan.completed && progress_percentage === 100 && (
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
          <div className="flex justify-between item-center text-base text-gray-200">
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

      {userPlan.completed && !isMatured ? (
        <div className="p-4 bg-gray-700 rounded-2xl flex gap-1">
          <div className="text-left text-sm gap-2 flex-1">
            <div className="">Proceed to withdraw your reward and savings</div>
          </div>
          <Button
            label="Start Clearance"
            className="w-fit! px-3 text-sm bg-yellow-500 hover:bg-amber-600"
            onClick={() => modal.openModal(<ClearanceModal item={userPlan} />)}
          />
        </div>
      ) : (
        <div className="p-4 bg-gray-700 rounded-2xl grid grid-cols-2">
          <div className="text-left text-sm gap-2">
            <div className="text-gray-200">Next deposit date:</div>
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

      <div className="w-full rounded-3xl p-4 h-full bg-gray-700 grid grid-cols-2 md:grid-cols-3 gap-4">
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
                <div className="text-sm">+ {formatPrice(userPlan.reward)}</div>
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
      <div className="bg-gray-700 p-4 rounded-3xl w-full text-left space-y-4 flex items-end justify-between">
        <div className="flex gap-2">
          <div className="w-15 h-15">
            <img
              src={userPlan.user.profile_picture || ""}
              className="w-full h-full"
              alt={userPlan.user.first_name}
            />
          </div>
          <div className="">
            <div className="">{user_name}</div>
            <div className="">{userPlan.user.email}</div>
          </div>
        </div>
        <div className="flex items-center gap-0">
          <Button
            label="Edit"
            rightIcon={<PenBox size={13} />}
            className="w-fit! px-4 text-xs bg-transparent hover:bg-gray-600"
          />
          <Button
            label="Delete"
            rightIcon={<Trash2 size={13} />}
            className="w-fit! text-red-500! px-4 text-xs bg-transparent hover:bg-red-500/20"
          />
        </div>
      </div>
    </div>
  );
};

export default ActivePlanSummaryCard;
