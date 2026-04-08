import { PenBox, Trash2 } from "lucide-react";
import { useParams } from "react-router-dom";
import ActivePlanList from "../../components/AdminComponents/ActivePlanList";
import InfoCard from "../../components/AdminComponents/InfoCard";
import UserTransactionsTabs from "../../components/AdminComponents/UserTransactionsTabs";
import Button from "../../components/GeneralComponent/Button";
import { useGetUserByID } from "../../hooks/querys/useUsers";
import { formatPrice } from "../../utils/formatter";

const UserDetail = () => {
  const params = useParams();
  const id = params.id;
  const { data, isLoading, isError } = useGetUserByID(Number(id));

  const user_name =
    data?.first_name && data.last_name
      ? `${data.first_name} ${data.last_name}`
      : data?.username;
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-2xl bg-gray-700 flex items-end">
        <div className="flex gap-2 flex-1 text-left">
          <div className="w-12 h-12">
            <img
              src={data?.profile_picture || ""}
              alt={data?.first_name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="">
            <div className="">{user_name}</div>
            <div className="text-sm text-gray-400">{data?.email}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            label="Edit"
            rightIcon={<PenBox size={13} />}
            className="w-fit! px-4 text-xs bg-transparent hover:bg-gray-600"
          />
          <Button
            label="Delete"
            rightIcon={<Trash2 size={13} />}
            className="w-fit! text-red-500! px-4 text-xs bg-transparent hover:bg-red-500/20"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <InfoCard
          title="Active Plans"
          value={data?.total_plans || 0}
          isError={isError}
          isloading={isLoading}
        />
        <InfoCard
          title="Total Hands"
          value={data?.total_hands || 0}
          isError={isError}
          isloading={isLoading}
        />
        <InfoCard
          title="Total Savings"
          value={formatPrice(data?.total_savings || 0)}
          isError={isError}
          isloading={isLoading}
        />
        <InfoCard
          title="Total Payout"
          value={formatPrice(data?.total_recieveable || 0)}
          isError={isError}
          isloading={isLoading}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <ActivePlanList
          isLoading={isLoading}
          isError={isError}
          plans={data?.plans || []}
        />
        <UserTransactionsTabs
          deposits={data?.deposits || []}
          withdrawals={data?.withdrawals || []}
        />
      </div>
    </div>
  );
};

export default UserDetail;
