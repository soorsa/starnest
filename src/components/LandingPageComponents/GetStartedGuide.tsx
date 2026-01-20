import React from "react";
const STEPS = [
  {
    title: "Create Account",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    title: "Select Savings Plan",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    title: "Watch It Grow",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    title: "Cash It Out",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];
const GetStartedGuide: React.FC = () => {
  return (
    <div className="bg-gradient-to-tl from-black/50 to-black py-10 px-5 text-white">
      <div className="grid md:grid-cols-2 gap-10 md:gap-0">
        <div className="space-y-10 self-center">
          <h3 className="text-2xl md:text-4xl font-starnest-bold">
            Get Started in 4 Simple Steps
          </h3>
          <div className="grid grid-cols-2 gap-5 md:gap-10">
            {STEPS.map((item, i) => (
              <div className="flex text-left">
                <div className="text-3xl md:text-6xl font-bold min-w-8 md:min-w-16">
                  {i + 1}.
                </div>
                <div className="space-y-2">
                  <div className="font-starnest-mid">{item.title}</div>
                  <div className="text-xs">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <img src="/src/assets/Push notifications-cuate.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GetStartedGuide;
