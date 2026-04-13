import { ArrowLeftRight } from "lucide-react";

const TransactionSkeleton = () => {
  return (
    <div className="space-y-2">
      {[1, 2, 3, 4].map((i) => (
        <div
          className="odd:bg-gray-100 rounded-lg p-2 flex items-center justify-between gap-20"
          key={i}
        >
          <div className="flex flex-1 items-center divide-gray-300 divide-x ">
            <div className="pr-2">
              <ArrowLeftRight className="text-gray-500" />
            </div>
            <div className="px-2 flex-1 space-y-1">
              <div className="bg-gray-300 animate-pulse p-2 rounded-sm w-1/2" />
              <div className="bg-gray-300 animate-pulse p-2 rounded-sm" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="bg-gray-300 animate-pulse p-2  px-5 rounded-sm" />
            <div className="bg-gray-300 animate-pulse p-2 px-5  rounded-sm" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionSkeleton;
