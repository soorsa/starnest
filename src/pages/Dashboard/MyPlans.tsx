import {
  CircleDollarSign,
  HandCoins,
  Layers,
  WalletMinimal,
} from "lucide-react";
import React, { useState } from "react";
import FilterBar from "../../components/DashboardComponents/FilterBar";
import InfoCard from "../../components/DashboardComponents/InfoCard";
import MyPlansList from "../../components/DashboardComponents/MyPlansList";
import Paginator from "../../components/DashboardComponents/Paginator";
import { useGetUserPlans } from "../../hooks/querys/useSavingPlan";
import { useGetUserByID } from "../../hooks/querys/useUsers";
import { formatPrice } from "../../utils/formatter";
import { useUserState } from "../../zustand/user.state";

const MyPlans: React.FC = () => {
  const { user } = useUserState();
  const [params, setparams] = useState({ page: 1 });
  const { data, isLoading, isError } = useGetUserPlans(params);
  const {
    data: userdata,
    isLoading: userdataLoading,
    isError: userdataError,
  } = useGetUserByID(user?.id);

  return (
    <div className="">
      <div className="py-10">
        <h2 className="text-3xl font-starnest-bold">My Active Plans</h2>
        <p className="text-sm">
          Find all plans or your most confortable savings plan here.
        </p>
        <div className="lg:w-[60%] mx-auto">
          <FilterBar />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <MyPlansList
            isError={isError}
            isLoading={isLoading}
            plans={data?.results || []}
          />
          <Paginator
            currentPage={params.page}
            totalPages={Math.ceil((data?.count || 0) / 20)}
            onPageChange={(page) => setparams((prev) => ({ ...prev, page }))}
          />
        </div>
        <div className="order-first lg:order-last">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 md:gap-4">
            <InfoCard
              title="Deposited savings"
              value={formatPrice(userdata?.total_savings || 0)}
              icon={<WalletMinimal />}
              isError={userdataError}
              isloading={userdataLoading}
            />
            <InfoCard
              title="Expected Reward"
              value={formatPrice(userdata?.total_recieveable || 0)}
              icon={<CircleDollarSign />}
              isError={userdataError}
              isloading={userdataLoading}
            />
            <InfoCard
              title="Active Plans"
              value={formatPrice(userdata?.total_plans || 0)}
              icon={<Layers />}
              isError={userdataError}
              isloading={userdataLoading}
            />
            <InfoCard
              title="Total hands"
              value={userdata?.total_hands || 0}
              icon={<HandCoins />}
              isError={userdataError}
              isloading={userdataLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlans;
