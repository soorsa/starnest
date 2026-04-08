import { AlertCircle, Loader } from "lucide-react";
import { useParams } from "react-router-dom";
import EditPlan from "../../components/AdminComponents/EditPlanForm";
import InfoCard from "../../components/AdminComponents/InfoCard";
import ErrorPlaceholder from "../../components/DashboardComponents/ErrorPlaceholder";
import {
  useGetPlanByID,
  useGetPlanStatsByID,
} from "../../hooks/querys/useSavingPlan";
import { formatPrice } from "../../utils/formatter";
import PlanDetailContainer from "./PlanDetailContainer";

const PlanDetails = () => {
  const params = useParams();
  const id = params.id;
  const { data, isLoading, isError } = useGetPlanByID(Number(id));
  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
  } = useGetPlanStatsByID(Number(id));
  if (isLoading) {
    return (
      <div className="">
        <Loader className="animate-spin" />
      </div>
    );
  }
  if (isError) {
    return (
      <ErrorPlaceholder
        icon={<AlertCircle />}
        title="Error"
        message="Failed to retreive plan."
      />
    );
  }
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <InfoCard
          title="Active Plans"
          value={data2?.active_plans || 0}
          isError={isError2}
          isloading={isLoading2}
        />
        <InfoCard
          title="Active Users"
          value={data2?.active_users || 0}
          isError={isError2}
          isloading={isLoading2}
        />
        <InfoCard
          title="Total Hands"
          value={data2?.total_hands || 0}
          isError={isError2}
          isloading={isLoading2}
        />
        <InfoCard
          title="Total Deposited"
          value={formatPrice(data2?.total_deposited_balance || 0)}
          isError={isError2}
          isloading={isLoading2}
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-2">
        {data && <PlanDetailContainer plan={data} />}
        <div className="bg-gray-700 p-4 rounded-2xl">
          {data && <EditPlan plan={data} />}
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
