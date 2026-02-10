import React from "react";
import Button from "../GeneralComponent/Button";
import { BanknoteArrowDown, PlusCircle, Timer, TrendingUp } from "lucide-react";
import { formatPrice } from "../../utils/formatter";

const PlanCardSummary: React.FC = () => {
  return (
    <div className="space-y-4 md:min-h-[80vh] md:max-h-[80vh] flex flex-col overflow-y-auto scrollbar-hide">
      <div className="w-full rounded-3xl p-4 h-full bg-white grid grid-cols-2 md:grid-cols-3 gap-4">
        <img
          src="/happy-family.png"
          alt={`plan`}
          className="hidden md:block h-full rounded-lg object-cover bg-amber-400"
        />
        <div className="col-span-2 space-y-2">
          <div className="flex items-end gap-2">
            <img
              src="/happy-family.png"
              alt={`plan`}
              className="md:hidden w-10 h-10 rounded-lg object-cover bg-amber-400"
            />

            <p className="font-starnest-mid text-left uppercase">
              Soosoil Savings Plan
            </p>
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
          <Button
            label="Make Payment"
            className=""
            icon={<PlusCircle size={18} />}
          />
        </div>
      </div>
      <div className="bg-white relative flex-1 p-4 rounded-3xl w-full text-left space-y-4">
        <h3 className="text-2xl font-starnest-mid underline underline-offset-2">
          Plan Details
        </h3>
        <div className="text-sm">
          <p className="line-clamp-2 md:line-clamp-none">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div className="absolute md:hidden bottom-2 right-2 text-gray-500 text-xs py-1 px-3 cursor-pointer hover:bg-gray-200 rounded-lg">
          read more...
        </div>
      </div>
    </div>
  );
};

export default PlanCardSummary;
