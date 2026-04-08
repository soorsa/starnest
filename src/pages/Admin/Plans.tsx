import React, { useState } from "react";
import Filter from "../../components/AdminComponents/Filter";
import InfoCard from "../../components/AdminComponents/InfoCard";
import Paginator from "../../components/AdminComponents/Paginator";
import PlanList from "../../components/AdminComponents/PlanList";
import { useGetPlans } from "../../hooks/querys/useSavingPlan";
import { useGetAdminStats } from "../../hooks/querys/useStats";
import { formatPrice } from "../../utils/formatter";

const Plans: React.FC = () => {
  const [filterParams, setFilterParams] = useState<PlanFilterParams>({
    page: 1,
  });
  const { data, isLoading, isError } = useGetPlans(filterParams);
  const {
    data: adminStats,
    isError: isAdminError,
    isLoading: isAdminLoading,
  } = useGetAdminStats();

  return (
    <div>
      <div className="py-10">
        <h2 className="text-3xl font-starnest-bold">Plans</h2>
        <p className="text-sm">
          Find all plans or your most confortable savings plan here.
        </p>
        <div className="lg:w-[60%] mx-auto">
          <Filter />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <PlanList
            isLoading={isLoading}
            isError={isError}
            plans={data?.results || []}
          />
          <Paginator
            currentPage={filterParams.page || 1}
            totalPages={Math.ceil((data?.count || 0) / 20)}
            onPageChange={(page) =>
              setFilterParams((prev) => ({ ...prev, page }))
            }
          />
        </div>
        <div className="order-first lg:order-last">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-4">
            <InfoCard
              title="Total Plans"
              value={adminStats?.total_plans || 0}
              isError={isAdminError}
              isloading={isAdminLoading}
            />
            <InfoCard
              title="Active Plans"
              value={adminStats?.active_plans || 0}
              isError={isAdminError}
              isloading={isAdminLoading}
            />
            <InfoCard
              title="Active Users"
              value={adminStats?.active_users || 0}
              isError={isAdminError}
              isloading={isAdminLoading}
            />
            <InfoCard
              title="Expected Payout"
              value={formatPrice(adminStats?.total_amount_of_active_plans || 0)}
              isError={isAdminError}
              isloading={isAdminLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
