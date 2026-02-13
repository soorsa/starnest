import React from "react";
import { formatPrice } from "../../utils/formatter";
import Button from "../GeneralComponent/Button";
import { Share2 } from "lucide-react";
interface Prop {
  item: Transaction;
}
const TransactionDetail: React.FC<Prop> = ({ item }) => {
  const { title, amount, desc, created_at } = item;
  return (
    <div className="w-sm max-w-xs md:max-w-sm space-y-7 h-[65vh] flex flex-col">
      <div className="text-center text-lg">Transaction Details</div>
      <div className="divide-y divide-gray-300 flex-1">
        <div className=" py-4">
          <div className="text-2xl font-starnest-mid">
            {formatPrice(amount)}
          </div>
          <div className="text-green-500">{title}</div>
        </div>
        <div className=" py-4 text-sm">
          <div className="grid grid-cols-3">
            <span className="text-gray-500 text-left">Transaction type</span>
            <span className="col-span-2 text-right line-clamp-1">Paystack</span>
          </div>
          <div className="grid grid-cols-3">
            <span className="text-gray-500 text-left">Transaction desc</span>
            <span className="col-span-2 text-right truncate">{desc}</span>
          </div>
          <div className="grid grid-cols-3">
            <span className="text-gray-500 text-left">Transaction date</span>
            <span className="col-span-2 text-right line-clamp-1">
              {created_at}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 py-4 font-starnest-mid">
          <span className="text-left">Total amount</span>
          <span className="text-right">{amount}</span>
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
