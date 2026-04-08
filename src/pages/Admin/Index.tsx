import ActivePlanList from "../../components/AdminComponents/ActivePlanList";
import InfoCard from "../../components/AdminComponents/InfoCard";
import PlanList from "../../components/AdminComponents/PlanList";
import { useGetPlans, useGetUserPlans } from "../../hooks/querys/useSavingPlan";
import { useGetAdminStats } from "../../hooks/querys/useStats";
import { formatCompactPrice } from "../../utils/formatter";

const AdminIndex = () => {
  const { data, isError, isLoading } = useGetPlans({ page: 1 });
  const {
    data: adminStats,
    isError: isAdminError,
    isLoading: isAdminLoading,
  } = useGetAdminStats();
  const {
    data: userPlanData,
    isError: isError2,
    isLoading: isloading2,
  } = useGetUserPlans({ page: 1 });
  const plans = data?.results ?? [];
  const userPlans = userPlanData?.results ?? [];
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
        <InfoCard
          title="Total Users"
          value={adminStats?.total_users || 0}
          isActive
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
          title="Plans"
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
          title="Total inflow"
          value={formatCompactPrice(adminStats?.total_deposits || 0)}
          isError={isAdminError}
          isloading={isAdminLoading}
        />
        <InfoCard
          title="Expected Payout"
          value={formatCompactPrice(
            adminStats?.total_amount_of_active_plans || 0
          )}
          isError={isAdminError}
          isloading={isAdminLoading}
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-4 ">
        <PlanList plans={plans} isError={isError} isLoading={isLoading} />
        <ActivePlanList
          plans={userPlans}
          isError={isError2}
          isLoading={isloading2}
        />
      </div>
    </div>
  );
};

export default AdminIndex;
