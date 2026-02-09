import React from "react";
import PlanPaymentList from "../../components/DashboardComponents/PlanPaymentList";

const MyPlanDetail: React.FC = () => {
  const data: PlanPayment[] = [
    {
      id: 1,
      title: "Soosoil inc.",
      status: "paid",
      amount: 2000,
      due_date: "2025-11-23 14:22:26",
    },
    {
      id: 1,
      title: "Soosoil inc.",
      status: "missed",
      amount: 2000,
      due_date: "2025-12-23 14:22:26",
    },
    {
      id: 1,
      title: "Soosoil inc.",
      status: "missed",
      amount: 2000,
      due_date: "2026-01-23 14:22:26",
    },
    {
      id: 1,
      title: "Soosoil inc.",
      status: "upcomming",
      amount: 2000,
      due_date: "2026-02-23 14:22:26",
    },
  ];
  return (
    <div>
      <PlanPaymentList data={data} />
    </div>
  );
};

export default MyPlanDetail;
