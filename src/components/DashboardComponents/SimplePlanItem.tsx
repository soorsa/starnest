import { AlertTriangle, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface GoalProgressCardProps {
  title: string;
  start_date: string;
  end_date: string;
  roi: number;
  amount: string | number;
  percentage: number;
}

export default function GoalProgressCard({
  title,
  start_date,
  end_date,
  percentage,
  roi,
  amount,
}: GoalProgressCardProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/dashboard/my-plans/1`);
  };
  return (
    <div
      onClick={handleClick}
      className="w-full rounded-lg bg-white p-4 border border-gray-100 hover:shadow-xs cursor-pointer"
    >
      {/* Top Section */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100">
            <AlertTriangle className="h-5 w-5 text-gray-700" />
          </div>

          <div className="text-left">
            <p className="text-sm font-semibold text-gray-900">{title}</p>
            <p className="text-xs text-gray-500">
              {start_date} - {end_date}
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-sm font-semibold text-gray-900">{amount}</p>
          <p className="text-xs text-green-500 flex items-center gap-2">
            <TrendingUp size={12} /> {roi}%
          </p>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="mt-4 space-y-2">
        {/* Background bar */}
        <div className="h-3 w-full flex items-center gap-1">
          <div
            className="h-3 rounded-sm bg-green-500 transition-all"
            style={{ width: `${percentage}%` }}
          />
          <div
            className="h-3 rounded-sm bg-gray-800 transition-all"
            style={{ width: `${100 - percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
