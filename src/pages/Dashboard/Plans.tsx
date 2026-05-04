import React, { useState } from "react";
import Paginator from "../../components/DashboardComponents/Paginator";
import PlanFilterBar from "../../components/DashboardComponents/PlanFilterBar";
import PlanList from "../../components/DashboardComponents/PlanList";
import { useGetPlans } from "../../hooks/querys/useSavingPlan";

const Plans: React.FC = () => {
  const [filterParams, setFilterParams] = useState<PlanFilterParams>({
    page: 1,
  });

  const { data, isLoading, isError } = useGetPlans(filterParams);
  return (
    <div>
      <div className="py-10">
        <h2 className="text-3xl font-starnest-bold">Plans</h2>
        <p className="text-sm">
          Find all plans or your most confortable savings plan here.
        </p>
        <div className="lg:w-[60%] mx-auto">
          <PlanFilterBar params={filterParams} onSetParams={setFilterParams} />
        </div>
      </div>
      <PlanList
        isLoading={isLoading}
        isError={isError}
        plans={data?.results || []}
      />
      <Paginator
        currentPage={filterParams.page || 1}
        totalPages={Math.ceil((data?.count || 0) / 20)}
        onPageChange={(page) => setFilterParams((prev) => ({ ...prev, page }))}
      />
    </div>
  );
};

export default Plans;
