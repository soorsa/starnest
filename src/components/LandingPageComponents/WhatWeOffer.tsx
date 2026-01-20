import { TrendingUp, Coins, BanknoteArrowUp } from "lucide-react";
import React from "react";
const REASONS = [
  {
    title: "Financial Growth",
    desc: "We follow the latest developments in the building materials and technologies market, use only safe materials from trusted manufacturers and carefully select each specialist",
    icon: <TrendingUp size={70} />,
  },
  {
    title: "Passive Income",
    desc: "We follow the latest developments in the building materials and technologies market, use only safe materials from trusted manufacturers and carefully select each specialist",
    icon: <BanknoteArrowUp size={70} />,
  },
  {
    title: "Guarantueed Income",
    desc: "We follow the latest developments in the building materials and technologies market, use only safe materials from trusted manufacturers and carefully select each specialist",
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
          We follow the latest developments in the building materials and
          technologies market.
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
