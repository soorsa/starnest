const ReferralSkeleton = () => {
  return (
    <div className="space-y-3 bg-gradient-to-r from-gray-800 to-gray-700 p-4 rounded-2xl text-white">
      <div className="gap-2 grid md:grid-cols-2">
        <div className="flex flex-col gap-4 justify-between text-sm">
          <div className="text-gray-300">Referral Earnings</div>
          <div className="text-2xl font-starnest-bold animate-pulse">
            <div className="h-8 w-36 bg-gray-600/50 rounded-lg"></div>
          </div>
          <div className="h-8 w-full bg-gray-600/50 rounded-lg animate-pulse"></div>
        </div>

        <div className="text-sm text-left gap-2 grid grid-cols-2 md:grid-cols-1">
          <div className="rounded-lg md:text-right flex flex-col md:items-end">
            <div className="text-gray-300">Referral code:</div>
            <div className="h-8 w-40 bg-gray-600/50 rounded-lg mt-1 animate-pulse"></div>
          </div>
          <div className="rounded-lg md:text-right">
            <div className="text-gray-300">Total Referrals:</div>
            <div className="h-5 w-28 bg-gray-600/50 rounded-lg mt-1 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralSkeleton;
