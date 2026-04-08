import React from "react";
import { useParams } from "react-router-dom";
import PlanCardSummary from "../../components/DashboardComponents/PlanItemSummary";
import PlanPaymentList from "../../components/DashboardComponents/PlanPaymentList";
import { useGetUserPlanByID } from "../../hooks/querys/useSavingPlan";

const MyPlanDetail: React.FC = () => {
  const params = useParams();
  const id = params.id;
  const { data } = useGetUserPlanByID(Number(id));
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="">{data && <PlanCardSummary userPlan={data} />}</div>
      <div className="">{data && <PlanPaymentList user_plan={data} />}</div>
    </div>
  );
};

export default MyPlanDetail;
