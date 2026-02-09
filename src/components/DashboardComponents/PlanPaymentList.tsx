import { CalendarRange, LoaderPinwheel } from "lucide-react";
import React, { useState } from "react";
import { formatDate, formatPrice } from "../../utils/formatter";
import Button from "../GeneralComponent/Button";

type Props = {
  data: PlanPayment[];
  isLoading?: boolean;
  isError?: boolean;
};

const tabs = ["All", "Paid", "Upcomming", "Missed"] as const;
type Tab = (typeof tabs)[number];

const PlanPaymentList: React.FC<Props> = ({ data, isLoading, isError }) => {
  const [activeTab, setActiveTab] = useState<Tab>("All");
  // Find the latest due date among items with status !== 1
  const unpaidItems = data.filter((item) => item.status !== "paid");
  const latestDueDate =
    unpaidItems.length > 0 &&
    Math.min(...unpaidItems.map((item) => new Date(item.due_date).getTime()));
  const filteredData =
    activeTab === "All"
      ? data
      : data.filter((item) => {
          if (activeTab === "Missed") return item.status === "missed";
          if (activeTab === "Paid") return item.status === "paid";
          if (activeTab === "Upcomming") return item.status === "upcomming";
          return false;
        });

  const renderList = () => {
    return (
      <div className="">
        {filteredData.map((item) => {
          const isLatestUnpaid =
            item.status !== "paid" &&
            latestDueDate &&
            new Date(item.due_date).getTime() === latestDueDate;

          return (
            <div
              key={item.id}
              className="cursor-pointer py-2 px-4 even:bg-gray-100 rounded-xl flex items-center justify-between"
            >
              <div className="flex items-center divide-gray-300 divide-x">
                <div className="px-2">
                  <CalendarRange className="text-gray-500" />
                </div>
                <div className="px-2">
                  <span className="capitalize">{item.status} </span>
                  <span className="font-bold">{formatPrice(item.amount)} </span>
                  payment on {formatDate(item.due_date)}
                </div>
              </div>
              <div className="flex justify-end">
                {item.status != "paid" && (
                  <Button
                    label="Make Payment"
                    disabled={!isLatestUnpaid}
                    className="text-xs px-6"
                    onClick={() => {}}
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
    <div className="bg-white p-2 md:p-6 rounded-3xl">
      {/* Tabs & Sort */}
      <div className="flex justify-between items-center mb-4 p-4 md:p-0">
        <div className="flex gap-4 text-sm font-medium">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${
                activeTab === tab ? "text-black" : "text-gray-400"
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

export default PlanPaymentList;
