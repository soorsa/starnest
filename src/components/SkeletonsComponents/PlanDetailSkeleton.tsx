import { Info } from "lucide-react";

// Loading Skeleton Component
const PlanDetailSkeleton = () => {
  return (
    <div className="min-h-screen space-y-4 animate-pulse">
      {/* Header Section Skeleton */}
      <div className="bg-gradient-to-r rounded-2xl to-gray-200 from-white py-8 px-6">
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-left">
            <div>
              <div className="flex items-center gap-3 mb-2">
                {/* Plan icon skeleton */}
                <div className="w-16 h-16 rounded-full bg-gray-200" />
                {/* Title skeleton */}
                <div className="h-8 w-48 bg-gray-200 rounded" />
              </div>
              {/* Description skeleton */}
              <div className="space-y-2">
                <div className="h-4 w-96 bg-gray-200 rounded" />
                <div className="h-4 w-80 bg-gray-200 rounded" />
              </div>
            </div>

            {/* Quick stats pills skeleton */}
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl px-5 py-2 border border-gray-200">
                <div className="h-4 w-16 bg-gray-200 rounded mb-2" />
                <div className="h-8 w-24 bg-gray-200 rounded mb-2" />
                <div className="h-4 w-20 bg-gray-200 rounded" />
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-200">
                <div className="h-4 w-20 bg-gray-200 rounded mb-2" />
                <div className="flex items-center gap-1 mb-2">
                  <div className="h-8 w-24 bg-gray-200 rounded" />
                  <div className="h-4 w-4 bg-gray-200 rounded" />
                  <div className="h-6 w-16 bg-gray-200 rounded" />
                </div>
                <div className="h-4 w-32 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Left Column Skeleton */}
        <div className="md:col-span-2 space-y-4">
          {/* About section skeleton */}
          <div className="bg-white rounded-2xl p-4 space-y-1">
            <div className="h-8 w-64 bg-gray-200 rounded" />
            <div className="flex items-center gap-1">
              <Info size={18} className="text-gray-200" />
              <div className="h-4 w-48 bg-gray-200 rounded" />
            </div>
          </div>

          {/* Video player skeleton */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden h-[360px] p-1">
            <div className="relative w-full h-full rounded-2xl bg-gray-200" />
          </div>

          {/* Benefits section skeleton */}
          <div className="bg-white text-left rounded-2xl p-6 border border-gray-100">
            <div className="h-6 w-32 bg-gray-200 rounded mb-4" />
            <ul className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <li className="flex items-center gap-1" key={i}>
                  <div className="w-5 h-5 bg-gray-200 rounded-full" />
                  <div className="h-4 w-48 bg-gray-200 rounded" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Sidebar Skeleton */}
        <div className="space-y-4">
          {/* Join Card Skeleton */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200 sticky top-2">
            <div className="h-8 w-32 bg-gray-200 rounded mx-auto mb-4" />

            <div className="text-center mb-6">
              <div className="h-10 w-36 bg-gray-200 rounded mx-auto mb-2" />
              <div className="h-4 w-20 bg-gray-200 rounded mx-auto" />
            </div>

            <div className="w-full h-12 bg-gray-200 rounded-xl mb-4" />

            <div className="flex items-center justify-center gap-1">
              <Info size={14} className="text-gray-200" />
              <div className="h-3 w-32 bg-gray-200 rounded" />
            </div>
          </div>

          {/* Quick Facts Card Skeleton */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="h-5 w-24 bg-gray-200 rounded mb-3" />
            <dl className="space-y-2 text-sm">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div className="flex justify-between" key={i}>
                  <div className="h-4 w-24 bg-gray-200 rounded" />
                  <div className="h-4 w-16 bg-gray-200 rounded" />
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlanDetailSkeleton;
