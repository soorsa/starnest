import React from "react";
import Filter from "../../components/AdminComponents/Filter";
import InfoCard from "../../components/AdminComponents/InfoCard";
import UsersList from "../../components/AdminComponents/UsersList";
import { useGetAdminStats } from "../../hooks/querys/useStats";
import { useGetUsers } from "../../hooks/querys/useUsers";
import { formatPrice } from "../../utils/formatter";

const Users: React.FC = () => {
  const { data, isLoading, isError } = useGetUsers(1);
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
          <UsersList
            isLoading={isLoading}
            isError={isError}
            users={data?.results || []}
          />
        </div>
        <div className="order-first lg:order-last">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-4">
            <InfoCard
              title="Total Users"
              value={adminStats?.total_users || 0}
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
              title="Total Savings"
              value={formatPrice(adminStats?.total_savings || 0)}
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

export default Users;
