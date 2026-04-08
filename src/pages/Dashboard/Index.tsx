import { CircleDollarSign, Layers, WalletMinimal } from "lucide-react";
import React from "react";
import InfoCard from "../../components/DashboardComponents/InfoCard";
import MyPlansList from "../../components/DashboardComponents/MyPlansList";
import RecomendedPlanCarousel from "../../components/DashboardComponents/RecommendedPlanCarousel";
import TransactionHistory from "../../components/DashboardComponents/TransactionHistory";
import { useGetUserPlans } from "../../hooks/querys/useSavingPlan";
import { useGetTransactions } from "../../hooks/querys/useTransactions";
import { useGetUserByID } from "../../hooks/querys/useUsers";
import { formatPrice } from "../../utils/formatter";
import { useUserState } from "../../zustand/user.state";

const DashboardIndex: React.FC = () => {
  const { user } = useUserState();
  const { data, isLoading, isError } = useGetUserPlans({ page: 1 });
  const {
    data: userdata,
    isLoading: userdataLoading,
    isError: userdataError,
  } = useGetUserByID(user?.id);
  const {
    data: dData,
    isError: TisError,
    isLoading: TisLoading,
  } = useGetTransactions({ page: 1 });
  const transactions = dData?.results ?? [];

  const userPlans = data?.results || [];
  return (
    <div className="space-y-4 ">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <InfoCard
            title="Deposited Savings"
            value={formatPrice(userdata?.total_savings || 0)}
            icon={<WalletMinimal />}
            isError={userdataError}
            isloading={userdataLoading}
          />
        </div>
        <InfoCard
          title="Expected Reward"
          value={formatPrice(userdata?.total_recieveable || 0)}
          // secondaryValue={`30%`}
          isPositive
          icon={<CircleDollarSign />}
          isError={userdataError}
          isloading={userdataLoading}
        />
        <InfoCard
          title="Active Plans"
          value={userdata?.total_plans || 0}
          icon={<Layers />}
          isError={userdataError}
          isloading={userdataLoading}
        />
      </div>
      <div className="w-full">
        <RecomendedPlanCarousel />
      </div>
      <div className="grid lg:grid-cols-2 gap-4 ">
        {/* <div className="bg-white p-4 rounded-3xl space-y-8">
          <div className="flex items-center justify-between">
            <div className="text-black text-left text-xl font-starnest-mid">
              My Plans
            </div>
            <Link
              to={`/dashboard/my-plans`}
              className="py-2 px-4 hover:bg-gray-100 rounded-xl transition flex items-center gap-1 text-sm"
            >
              <span className="">view all</span>
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </Link>
          </div>
          {userPlans.length < 1 ? (
            <ErrorPlaceholder
              size="small"
              title="Not Found"
              message="Sorry... you have not joined any saving plans yet."
            />
          ) : (
            <div className="space-y-0">
              {userPlans.map((item, index) => (
                <SavingProgressCard userPlan={item} key={index} />
              ))}
            </div>
          )}
        </div> */}
        <MyPlansList
          plans={userPlans}
          isError={isError}
          isLoading={isLoading}
        />
        <TransactionHistory
          data={transactions}
          isError={TisError}
          isLoading={TisLoading}
        />
      </div>
    </div>
  );
};

export default DashboardIndex;
