import React from "react";
import PlanCard from "./PlanCard";

const PlanList: React.FC = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {list.map((i) => (
        <PlanCard key={i} />
      ))}
    </div>
  );
};

export default PlanList;
