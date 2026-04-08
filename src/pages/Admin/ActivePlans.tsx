import React, { useState } from "react";
import ActivePlanList from "../../components/AdminComponents/ActivePlanList";
import Filter from "../../components/AdminComponents/Filter";
import InfoCard from "../../components/AdminComponents/InfoCard";
import Paginator from "../../components/AdminComponents/Paginator";
import { useGetUserPlans } from "../../hooks/querys/useSavingPlan";
import { useGetAdminStats } from "../../hooks/querys/useStats";
import { formatPrice } from "../../utils/formatter";

const ActivePlans: React.FC = () => {
  const [params, setparams] = useState({
    page: 1,
  });
  const { data, isLoading, isError } = useGetUserPlans(params);
  const {
    data: adminStats,
    isError: isAdminError,
    isLoading: isAdminLoading,
  } = useGetAdminStats();

  return (
    <div>
      <div className="py-10">
        <h2 className="text-3xl font-starnest-bold">Active Plans</h2>
        <p className="text-sm">
          Find all plans or your most confortable savings plan here.
        </p>
        <div className="lg:w-[60%] mx-auto">
          <Filter />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <ActivePlanList
            isLoading={isLoading}
            isError={isError}
            plans={data?.results || []}
          />
          <Paginator
            currentPage={params.page || 1}
            totalPages={Math.ceil((data?.count || 0) / 20)}
            onPageChange={(page) => setparams((prev) => ({ ...prev, page }))}
          />
        </div>
        <div className="order-first lg:order-last">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-4">
            <InfoCard
              title="Active Plans"
              value={adminStats?.active_plans || 0}
              isError={isAdminError}
              isloading={isAdminLoading}
            />
            <InfoCard
              title="Total Savings"
              value={formatPrice(adminStats?.total_savings || 0)}
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

export default ActivePlans;
