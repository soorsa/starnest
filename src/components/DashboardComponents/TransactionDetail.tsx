import { Share2 } from "lucide-react";
import React from "react";
import { formatDate, formatPrice } from "../../utils/formatter";
import Button from "../GeneralComponent/Button";
interface Prop {
  item: Transaction;
}
const TransactionDetail: React.FC<Prop> = ({ item }) => {
  const { amount, created_at, type, user_savings } = item;
  const { user } = user_savings;
  return (
    <div className="w-sm max-w-xs md:max-w-sm space-y-7 h-[65vh] flex flex-col">
      <div className="text-center text-lg">Transaction Details</div>
      <div className="divide-y divide-gray-300 flex-1">
        <div className=" py-4">
          <div className="text-2xl font-starnest-mid">
            {formatPrice(amount)}
          </div>
          <div className="text-green-500 capitalize">{type}</div>
        </div>
        <div className="divide-y divide-dashed divide-gray-200 space-y-1 py-4 text-sm">
          <div className="grid grid-cols-3">
            <span className="text-gray-500 text-left">Type</span>
            <span className="col-span-2 text-right line-clamp-1">{type}</span>
          </div>
          <div className="grid grid-cols-3">
            <span className="text-gray-500 text-left">Description</span>
            <span className="col-span-2 text-right truncate">
              {type === "deposit"
                ? `
              Deposit for savings on ${item.user_savings.plan.name}
              `
                : `Withdrawal for payment on ${user_savings.plan.name}`}
            </span>
          </div>
          <div className="grid grid-cols-3">
            <span className="text-gray-500 text-left">Date</span>
            <span className="col-span-2 text-right line-clamp-1">
              {formatDate(created_at)}
            </span>
          </div>
          <div className="grid grid-cols-3">
            <span className="text-gray-500 text-left">User info</span>
            <span className="col-span-2 text-right">
              <div className="line-clamp-1">
                {user.first_name} {user.last_name}
              </div>
              <div className="line-clamp-1">{user.email}</div>
              <div className="line-clamp-1">{user.phone_number}</div>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 py-4 font-starnest-mid">
          <span className="text-left">Total amount</span>
          <span className="text-right">{formatPrice(amount)}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button
          label="Share"
          className="bg-transparent text-black!"
          icon={<Share2 size={18} />}
        />
        <Button label="Close" />
      </div>
    </div>
  );
};

export default TransactionDetail;
