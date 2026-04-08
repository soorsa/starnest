import React from "react";

const UserProfileCardSkeleton = () => {
  return (
    <div className="bg-white p-2 rounded-3xl animate-pulse">
      <div className="">
        {/* Header Banner Skeleton */}
        <div className="w-full h-30 bg-gray-300 rounded-2xl px-2 flex items-center">
          <div className="flex items-center gap-2">
            {/* Avatar Skeleton */}
            <div className="h-26 w-26 rounded-full border-7 border-white shadow-sm bg-gray-400" />
            <div className="text-left space-y-2">
              {/* Name Skeleton */}
              <div className="flex items-center gap-1">
                <div className="h-5 w-32 bg-gray-400 rounded" />
                <div className="h-5 w-5 bg-gray-400 rounded" />
              </div>
              {/* Role Skeleton */}
              <div className="h-4 w-24 bg-gray-400 rounded" />
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-300 p-4">
          {/* Personal Info Section Skeleton */}
          <div className="grid grid-cols-3 text-sm gap-y-2 py-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <React.Fragment key={i}>
                <div className="h-4 w-16 bg-gray-200 rounded" />
                <div className="col-span-2 h-4 w-24 bg-gray-200 rounded ml-auto" />
              </React.Fragment>
            ))}
          </div>

          {/* Financial Info Section Skeleton */}
          <div className="grid grid-cols-3 text-sm gap-y-2 py-2">
            {[1, 2, 3, 4].map((i) => (
              <React.Fragment key={i}>
                <div className="h-4 w-20 bg-gray-200 rounded" />
                <div className="col-span-2 h-4 w-28 bg-gray-200 rounded ml-auto" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfileCardSkeleton;

export const UpdateProfileSkeleton = () => {
  return (
    <div className="bg-white rounded-3xl p-4 md:col-span-2 animate-pulse">
      <div className="divide-y divide-gray-300">
        <div className="flex items-center justify-between py-2">
          <div className="h-7 w-40 bg-gray-200 rounded" />
          <div className="h-10 w-24 bg-gray-200 rounded" />
        </div>

        <div className="space-y-4 py-10">
          <div className="grid grid-cols-2 text-left gap-2">
            <div className="space-y-1">
              <div className="h-4 w-20 bg-gray-200 rounded" />
              <div className="h-10 w-full bg-gray-200 rounded" />
            </div>
            <div className="space-y-1">
              <div className="h-4 w-20 bg-gray-200 rounded" />
              <div className="h-10 w-full bg-gray-200 rounded" />
            </div>
          </div>

          <div className="grid grid-cols-2 text-left gap-2">
            <div className="space-y-1">
              <div className="h-4 w-20 bg-gray-200 rounded" />
              <div className="h-10 w-full bg-gray-200 rounded" />
            </div>
            <div className="space-y-1">
              <div className="h-4 w-16 bg-gray-200 rounded" />
              <div className="h-10 w-full bg-gray-200 rounded" />
            </div>
          </div>

          <div className="grid grid-cols-2 text-left gap-2">
            <div className="space-y-1">
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-10 w-full bg-gray-200 rounded" />
            </div>
            <div className="space-y-1">
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-10 w-full bg-gray-200 rounded" />
            </div>
          </div>
        </div>

        <div className="space-y-4 py-10">
          <div className="grid grid-cols-2 text-left gap-2">
            <div className="space-y-1">
              <div className="h-4 w-16 bg-gray-200 rounded" />
              <div className="h-10 w-full bg-gray-200 rounded" />
            </div>
            <div className="space-y-1">
              <div className="h-4 w-16 bg-gray-200 rounded" />
              <div className="h-10 w-full bg-gray-200 rounded" />
            </div>
          </div>

          <div className="grid grid-cols-2 text-left gap-2">
            <div className="space-y-1">
              <div className="h-4 w-20 bg-gray-200 rounded" />
              <div className="h-10 w-full bg-gray-200 rounded" />
            </div>
            <div className="space-y-1">
              <div className="h-4 w-28 bg-gray-200 rounded" />
              <div className="h-10 w-full bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
