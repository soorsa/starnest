import {
  AlertTriangle,
  ArrowLeftRight,
  CheckCircle2,
  Info,
  LoaderPinwheel,
} from "lucide-react";
import React, { useState } from "react";
import { formatPrice } from "../../utils/formatter";

type Props = {
  data: Transaction[];
  isLoading?: boolean;
  isError?: boolean;
};

const tabs = ["All", "Success", "Pending", "Failed"] as const;
type Tab = (typeof tabs)[number];

const TransactionHistory: React.FC<Props> = ({ data, isLoading, isError }) => {
  const [activeTab, setActiveTab] = useState<Tab>("All");
  // Find the latest due date among items with status !== 1
  const filteredData =
    activeTab === "All"
      ? data
      : data.filter((item) => {
          if (activeTab === "Failed") return item.status === "failed";
          if (activeTab === "Success") return item.status === "success";
          if (activeTab === "Pending") return item.status === "pending";
          return false;
        });

  const renderList = () => {
    return (
      <div className="">
        {filteredData.map((item) => {
          return (
            <div
              key={item.id}
              className="cursor-pointer p-2 odd:bg-gray-100 rounded-xl flex items-center justify-between text-xs"
            >
              <div className="flex flex-1 items-center divide-gray-300 divide-x ">
                <div className="pr-2">
                  <ArrowLeftRight className="text-gray-500" />
                </div>
                <div className="px-2 text-left flex-1">
                  <div className="font-starnest-mid">{item.title} </div>
                  <div className="">{item.desc}</div>
                </div>
              </div>
              <div className="space-y-2">
                <StatusPill status={item.status} />
                <div className="font-starnest-mid text-right">
                  {formatPrice(item.amount)}{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  interface statusProp {
    status: "success" | "failed" | "pending";
  }
  const StatusPill: React.FC<statusProp> = ({ status }) => {
    return (
      <div className="">
        <div
          className={`flex items-center gap-1 px-2 rounded-lg ${
            status === "success" &&
            "text-green-500  bg-linear-to-l to-green-200"
          } ${
            status === "pending" &&
            "text-orange-500 bg-linear-to-l to-orange-200"
          } ${
            status === "failed" && "text-red-500 bg-linear-to-l to-red-200"
          } `}
        >
          {status}
          {status === "success" && <CheckCircle2 size={15} />}
          {status === "failed" && <AlertTriangle size={15} />}
          {status === "pending" && <Info size={15} />}
        </div>
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
    <div className="bg-white p-2 md:p-6 rounded-3xl overflow-y-auto flex flex-col w-full">
      <div className="flex-1">
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

export default TransactionHistory;
