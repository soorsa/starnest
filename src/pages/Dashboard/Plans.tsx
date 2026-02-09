import React from "react";
import PlanList from "../../components/DashboardComponents/PlanList";

const Plans: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-starnest-bold py-10">Plans</h2>
      <PlanList />
    </div>
  );
};

export default Plans;
