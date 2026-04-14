import { BanknoteArrowUp, Coins, TrendingUp } from "lucide-react";
import React from "react";
const REASONS = [
  {
    title: "Financial Growth",
    desc: "Grow your money consistently with structured savings plans designed to help you build discipline and achieve your financial goals faster. Every contribution moves you closer to real wealth.",
    icon: <TrendingUp size={70} />,
  },
  {
    title: "Passive Income",
    desc: "Earn while you save. Our plans are designed to generate returns over time, allowing your money to work for you without constant effort or active trading.",
    icon: <BanknoteArrowUp size={70} />,
  },
  {
    title: "Guaranteed Income",
    desc: "Enjoy predictable and secure returns with our fixed savings plans. Know exactly what you’ll earn and plan your future with confidence and peace of mind.",
    icon: <Coins size={70} />,
  },
];
const WhatWeOffer: React.FC = () => {
  return (
    <div className="w-full bg-black/50 text-white py-10 px-5 space-y-10">
      <div className="space-y-2">
        <h2 className="font-starnest-ultra text-2xl md:text-4xl">
          What We Offer
        </h2>
        <p className="max-w-lg text-xs md:text-sm text-gray-200 mx-auto">
          Smart savings plans, consistent returns, and tools designed to help
          you grow, manage, and secure your finances with ease.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {REASONS.map((item) => (
          <div className="cursor-pointer space-y-3 rounded-lg text-left bg-white text-black hover:bg-primary p-5">
            {item.icon}
            <div className="">
              <div className="font-starnest-bold text-xl">{item.title}</div>
              <div className="text-sm">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
