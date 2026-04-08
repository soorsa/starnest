import React from "react";
import { useParams } from "react-router-dom";
import ActivePlanSummaryCard from "../../components/AdminComponents/ActivePlanSummaryCard";
import PaymentSchedule from "../../components/AdminComponents/PaymentSchedule";
import { useGetUserPlanByID } from "../../hooks/querys/useSavingPlan";

const ActivePlanDetail: React.FC = () => {
  const params = useParams();
  const id = params.id;
  const { data } = useGetUserPlanByID(Number(id));

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="">
        {data && <ActivePlanSummaryCard userPlan={data} />}
      </div>
      <div className="">{data && <PaymentSchedule user_plan={data} />}</div>
    </div>
  );
};

export default ActivePlanDetail;
