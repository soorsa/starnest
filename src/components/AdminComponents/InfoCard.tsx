import React from "react";
interface Props {
  title: string;
  value: string | number;
  isActive?: boolean;
  isloading: boolean;
  isError: boolean;
}
const InfoCard: React.FC<Props> = ({
  title,
  value,
  isActive,
  isloading,
  isError,
}) => {
  if (isloading || isError) {
    return <CardSkeleton isActive={isActive} />;
  }
  return (
    <div
      className={`flex flex-col bg-gray-700 hover:shadow-sm shadow-gray-700 cursor-pointer rounded-3xl p-4 gap-1 sm:gap-4 text-left ${
        isActive && `bg-gray-900 border border-gray-700`
      }`}
    >
      <div className="flex justify-between items-start ">
        <div className="flex flex-col gap-2 min-w-0">
          <div className="flex items-center gap-3">
            <div className="text-xs sm:text-sm truncate line-clamp-1">
              {title}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-lg md:text-2xl truncate font-starnest-mid">
              {value}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
interface CardSkeletonProps {
  isActive?: boolean;
}
const CardSkeleton: React.FC<CardSkeletonProps> = ({ isActive = false }) => {
  return (
    <div
      className={`flex flex-col hover:bg-gray-500/10 cursor-pointer border-1 border-gray-700 rounded-2xl p-4 gap-4 text-left ${
        isActive ? "bg-gray-700/50" : ""
      }`}
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2 min-w-0 w-full">
          <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
          <div className="h-8 bg-gray-700 rounded w-1/2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
