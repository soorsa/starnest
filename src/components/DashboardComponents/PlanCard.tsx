import React from "react";
import Button from "../GeneralComponent/Button";
import { BanknoteArrowDown, PlusCircle, Timer, TrendingUp } from "lucide-react";
import { formatPrice } from "../../utils/formatter";

const PlanCard: React.FC = () => {
  return (
    <div className="w-full space-y-2 rounded-3xl p-4 h-full bg-white hover:shadow-sm">
      <div className="flex gap-2 items-center">
        <img
          src="/happy-family.png"
          alt={`plan`}
          className="w-10 h-10 rounded-lg object-cover bg-amber-400"
        />

        <p className="font-starnest-mid">Soosoil Savings Plan</p>
      </div>
      <div className="grid grid-cols-3 gap-1">
        <div className="border border-gray-200 rounded-md p-2">
          <BanknoteArrowDown size={18} className="text-orange-400" />
          <div className="mt-1">
            <div className="text-sm">{formatPrice(65000)}</div>
            <div className="text-xs text-gray-400">One-time</div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-md p-2">
          <div className="flex items-center gap-1 text-green-400">
            <TrendingUp size={18} /> <span className="text-sm">45%</span>
          </div>
          <div className="mt-1">
            <div className="text-sm">+{formatPrice(50000)}</div>
            <div className="text-xs text-gray-400">Profits</div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-md p-2">
          <Timer size={18} />
          <div className="mt-1">
            <div className="text-sm">12 months</div>
            <div className="text-xs text-gray-400">Duration</div>
          </div>
        </div>
      </div>
      <Button label="Join Plan" className="" icon={<PlusCircle size={18} />} />
    </div>
  );
};

export default PlanCard;
