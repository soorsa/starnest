import { CheckCircle2, Timer, TrendingUp } from "lucide-react";
import type React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate, formatPrice } from "../../utils/formatter";
interface Prop {
  userPlan: UserSavingPlan;
}
const ActivePlanItem: React.FC<Prop> = ({ userPlan }) => {
  const {
    id,
    start_date,
    end_date,
    reward,
    hands,
    progress_percentage,
    total_paid,
    total_target,
    user,
    completed,
  } = userPlan;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/admin/active-plans/${id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="w-full rounded-lg odd:bg-gray-900 px-4 py-2 cursor-pointer"
    >
      {/* Top Section */}
      <div className="flex items-start justify-between text-xs">
        <div className="flex items-center gap-3">
          {completed ? (
            <div className="flex h-5 w-5 items-center justify-center rounded-lg border border-green-300">
              <CheckCircle2 className="h-2 w-2 text-green-500" />
            </div>
          ) : (
            <div className="flex h-5 w-5 items-center justify-center rounded-lg border border-orange-300 ">
              <Timer className="h-2 w-2 text-orange-500" />
            </div>
          )}

          <div className="text-left ">
            <p className="font-semibold">
              {user.last_name && user.first_name
                ? `${user.first_name} ${user.last_name}`
                : `${user.email}`}
              <span className="border text-blue-500 ml-2 px-2 text-xs rounded-md">
                {hands} hands
              </span>
            </p>
            <p className="text-gray-500">
              {formatDate(start_date)} - {formatDate(end_date)}
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className=" flex items-center gap-2">
            <TrendingUp size={12} /> Reward
          </p>
          <p className="text-xs font-semibold text-green-500">
            {formatPrice(reward)}
          </p>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="mt-2 space-y-2">
        {/* Background bar */}
        <div className="h-1 w-full flex items-center gap-1">
          <div
            className="h-1 rounded-sm bg-green-500 transition-all"
            style={{ width: `${progress_percentage}%` }}
          />
          <div
            className="h-1 rounded-sm bg-gray-800 transition-all"
            style={{ width: `${100 - progress_percentage}%` }}
          />
        </div>
      </div>
      <div className="flex items-center justify-between text-xs font-starnest-mid mt-1 text-gray-500">
        <div className="">{formatPrice(total_paid)}</div>
        <div className="">{formatPrice(total_target)}</div>
      </div>
    </div>
  );
};
export default ActivePlanItem;
