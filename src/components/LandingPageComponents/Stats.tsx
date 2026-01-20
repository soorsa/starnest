import React from "react";
const STATS = [
  { title: "Helping", text: "Families", value: "1M+" },
  { title: "Growing", text: "Businesses", value: "10+" },
  { title: "Enriching", text: "Economies", value: "4+" },
  { title: "Empowering", text: "Africans", value: "3M+" },
];
const Stats: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-10">
        {STATS.map((item, idx) => (
          <div
            className={`${
              idx > 2 ? "hidden md:flex" : "flex"
            } flex-col items-center`}
            key={idx}
          >
            <div className="uppercase font-starnest-mid text-sm md:text-base">
              {item.title}
            </div>
            <div className="bg-white h-14 md:h-18 w-14 md:w-18 font-starnest-bold text-lg md:text-2xl rounded-full flex justify-center items-center">
              {item.value}
            </div>
            <div className=" text-sm md:text-base">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
