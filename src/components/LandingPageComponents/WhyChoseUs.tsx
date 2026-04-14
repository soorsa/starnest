import { Coins, Lightbulb, PercentCircle, ShieldCheck } from "lucide-react";
import React from "react";
const REASONS = [
  {
    title: "Trusted Platform",
    desc: "Your funds are managed with transparency and security. We prioritize trust, giving you full visibility and confidence in every step of your savings journey.",
    icon: <ShieldCheck size={70} />,
  },
  {
    title: "Best Opportunities",
    desc: "Access carefully designed savings plans that help you grow your money steadily and take advantage of real financial opportunities.",
    icon: <Lightbulb size={70} />,
  },
  {
    title: "Reliable Returns",
    desc: "Enjoy consistent and predictable returns that help you plan ahead and stay in control of your financial future.",
    icon: <Coins size={70} />,
  },
  {
    title: "Competitive Rates",
    desc: "Benefit from attractive interest rates that ensure your savings work harder and deliver meaningful growth over time.",
    icon: <PercentCircle size={70} />,
  },
];
const WhyChoseUs: React.FC = () => {
  return (
    <div className="w-full py-10 px-5 space-y-10">
      <div className="space-y-2">
        <h2 className="font-starnest-ultra text-2xl md:text-4xl">
          Why People Invest With Us
        </h2>
        <p className="max-w-lg text-xs md:text-sm text-gray-600 mx-auto">
          We follow the latest developments in the building materials and
          technologies market.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        {REASONS.map((item) => (
          <div className="cursor-pointer transition duration-300 space-y-3 rounded-lg text-left bg-white text-black hover:bg-black/50 hover:text-white p-5">
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

export default WhyChoseUs;
