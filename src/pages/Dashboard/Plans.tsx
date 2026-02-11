import React from "react";
import PlanList from "../../components/DashboardComponents/PlanList";
import FilterBar from "../../components/DashboardComponents/FilterBar";

const Plans: React.FC = () => {
  return (
    <div>
      <div className="py-10">
        <h2 className="text-3xl font-starnest-bold">Plans</h2>
        <p className="text-sm">
          Find all plans or your most confortable savings plan here.
        </p>
        <div className="md:w-[60%] mx-auto">
          <FilterBar />
        </div>
      </div>
      <PlanList />
    </div>
  );
};

export default Plans;
