import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";
interface Props {
  title: string;
  secondaryValue?: string | number;
  value: string | number;
  isActive?: boolean;
  isPositive?: boolean;
  icon?: React.ReactNode;
  isloading: boolean;
  isError: boolean;
}
const InfoCard: React.FC<Props> = ({
  title,
  secondaryValue,
  isPositive,
  value,
  icon,
  isActive,
  isloading,
  isError,
}) => {
  if (isloading || isError) {
    return <CardSkeleton isActive={isActive} />;
  }
  return (
    <div
      className={`flex flex-col bg-white hover:shadow-sm cursor-pointer rounded-3xl p-4 gap-1 sm:gap-4 text-left ${
        isActive && `bg-gray-700/50`
      }`}
    >
      <div className="flex justify-between items-start ">
        <div className="flex flex-col gap-2 min-w-0">
          <div className="flex items-center gap-3">
            <div className="text-xs sm:text-sm truncate line-clamp-1">
              {title}
            </div>
            {secondaryValue && (
              <div
                className={`${
                  isPositive
                    ? "bg-green-50 text-green-500"
                    : "bg-red-50 text-red-500"
                } text-xs hidden md:flex items-center gap-1 px-2 rounded-full`}
              >
                {isPositive ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}
                {secondaryValue}
              </div>
            )}
          </div>
          <div className="flex items-center gap-3">
            <div className="text-lg md:text-2xl truncate font-starnest-mid">
              {value}
            </div>
          </div>
        </div>
        {secondaryValue ? (
          <div
            className={`${
              isPositive
                ? "bg-green-50 text-green-500"
                : "bg-red-50 text-red-500"
            } text-xs flex md:hidden justify-center items-center h-14 w-14 rounded-full`}
          >
            <div className="flex flex-col items-center justify-center">
              {isPositive ? (
                <TrendingUp size={14} />
              ) : (
                <TrendingDown size={14} />
              )}
              {secondaryValue}
            </div>
          </div>
        ) : (
          <div className="bg-primary p-4 rounded-full">{icon}</div>
        )}
        {secondaryValue && (
          <div className="bg-primary p-4 rounded-full hidden md:flex">
            {icon}
          </div>
        )}
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
      className={`flex flex-col hover:bg-gray-500/10 cursor-pointer border-1 border-gray-700 rounded-lg p-4 gap-4 text-left ${
        isActive ? "bg-gray-700/50" : ""
      }`}
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2 min-w-0 w-full">
          <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
          <div className="h-8 bg-gray-700 rounded w-1/2 animate-pulse"></div>
        </div>
        <div className="h-10 w-10 p-4 bg-gray-700 rounded-full animate-pulse"></div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-700 rounded w-full animate-pulse"></div>
        <div className="h-3 bg-gray-700 rounded w-5/6 animate-pulse"></div>
      </div>
    </div>
  );
};
