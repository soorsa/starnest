import { ArrowRight, Link } from "lucide-react";
import type React from "react";

const SavingProgressCardListSkeleton: React.FC = () => {
  const list = [1, 2, 3];
  return (
    <div className="bg-white rounded-2xl p-4 space-y-8">
      <div className="flex items-center justify-between">
        <div className="text-black text-left text-xl font-starnest-mid">
          My Active Plans
        </div>
        <Link
          to={`/dashboard/my-plans`}
          className="py-2 px-4 hover:bg-gray-100 rounded-xl transition flex items-center gap-1 text-sm"
        >
          <span className="">view all</span>
          <ArrowRight className="w-4 h-4 text-gray-600" />
        </Link>
      </div>
      <div className="space-y-2">
        {list.map((i) => (
          <div
            className="w-full rounded-lg bg-gray-100 p-4 animate-pulse"
            key={i}
          >
            {/* Top Section */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                {/* Icon placeholder */}
                <div className="h-9 w-9 rounded-lg bg-gray-300" />

                <div className="text-left space-y-2">
                  {/* Plan name */}
                  <div className="h-5 w-36 bg-gray-300 rounded" />
                  {/* Date range */}
                  <div className="h-4 w-48 bg-gray-300 rounded" />
                </div>
              </div>

              <div className="text-right space-y-2">
                {/* Total paid */}
                <div className="h-5 w-20 bg-gray-300 rounded ml-auto" />
                {/* Interest rate line */}
                <div className="h-4 w-16 bg-gray-300 rounded ml-auto" />
              </div>
            </div>

            {/* Progress Bar Section */}
            <div className="mt-4 space-y-2">
              <div className="h-3 w-full bg-gray-300 rounded-sm" />
            </div>

            {/* Optional: subtle secondary elements if your real card has more */}
            {/* <div className="mt-3 h-4 w-3/4 bg-gray-300 rounded" /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavingProgressCardListSkeleton;
