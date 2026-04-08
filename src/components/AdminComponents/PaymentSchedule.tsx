import { CalendarRange, CheckCircle2, LoaderPinwheel } from "lucide-react";
import React, { useState } from "react";
import { formatDate } from "../../utils/formatter";
import { useModal } from "../../zustand/modal.state";
import MakeDeposit from "../DashboardComponents/MakeDeposit";
import Button from "../GeneralComponent/Button";

type Props = {
  user_plan: UserSavingPlan;
  isLoading?: boolean;
  isError?: boolean;
};

const tabs = ["All", "Paid", "Upcoming", "Missed"] as const;
type Tab = (typeof tabs)[number];

const PaymentSchedule: React.FC<Props> = ({
  user_plan,
  isLoading,
  isError,
}) => {
  const modal = useModal();
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const data = user_plan.payment_schedule;
  // Find the latest due date among items with status !== 1
  const unpaidItems = data.filter((item) => item.status !== "paid");
  const latestDueDate =
    unpaidItems.length > 0 &&
    Math.min(...unpaidItems.map((item) => new Date(item.date).getTime()));
  const filteredData =
    activeTab === "All"
      ? data
      : data.filter((item) => {
          if (activeTab === "Missed") return item.status === "missed";
          if (activeTab === "Paid") return item.status === "paid";
          if (activeTab === "Upcoming") return item.status === "upcoming";
          return false;
        });

  const handleClick = () => {
    modal.openModal(<MakeDeposit user_plan={user_plan} />);
  };
  const renderList = () => {
    return (
      <div className="">
        {filteredData.map((item) => {
          const isLatestUnpaid =
            item.status !== "paid" &&
            latestDueDate &&
            new Date(item.date).getTime() === latestDueDate;

          return (
            <div
              key={item.cycle}
              className="cursor-pointer p-2 odd:bg-gray-900 rounded-xl flex items-center justify-between text-xs"
            >
              <div className="flex items-center divide-gray-500 divide-x w-4/6">
                <div className="pr-2">
                  <CalendarRange className="text-gray-500" />
                </div>
                <div className="px-2 text-left line-clamp-1">
                  <div className="font-bold">
                    payment for {formatDate(item.date)}
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-2/6">
                {item.status != "paid" ? (
                  <Button
                    label="Make Deposit"
                    disabled={!isLatestUnpaid}
                    className="text-xs"
                    onClick={handleClick}
                  />
                ) : (
                  <Button
                    label="Paid"
                    rightIcon={<CheckCircle2 size={15} />}
                    className="text-xs bg-transparent text-green-500!"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderContent = () => {
    if (isLoading) {
      return <LoaderPinwheel className="animate-spin" />;
    }

    if (isError) {
      return <div className="text-center py-4">Error</div>;
    }

    if (filteredData.length === 0) {
      return <div className="text-center py-4">not found</div>;
    }

    return renderList();
  };

  return (
    <div className="bg-gray-700 p-2 md:p-6 rounded-3xl min-h-[80vh] md:max-h-[80vh] flex flex-col overflow-y-auto scrollbar-hide">
      <div className="flex-1">
        <h2 className="text-left font-starnest-mid mb-2 underline underline-offset-4">
          Plan Payment List
        </h2>
        {/* Tabs & Sort */}
        <div className="flex justify-between items-center mb-4 p-4 md:p-0">
          <div className="flex gap-4 text-sm font-medium">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`${
                  activeTab === tab ? "text-white" : "text-gray-400"
                } transition`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        {renderContent()}
      </div>
      {/* Pagination */}

      {/* Pagination Dots (Static for now) */}
      <div className="flex justify-center mt-4 gap-2">
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default PaymentSchedule;
