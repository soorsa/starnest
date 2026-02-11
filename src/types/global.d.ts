type TransactionStatus = "success" | "failed" | "pending";
type PlanStatus = "paid" | "missed" | "upcomming";
type SavingPlanStatus = "completed" | "ongoing" | "missed";

type PlanPayment = {
  id: number;
  title: string;
  due_date: string;
  status: PlanStatus;
  amount: number;
};
type Transaction = {
  id: number;
  title: string;
  desc: string;
  created_at: string;
  status: TransactionStatus;
  amount: number;
};

interface GoalProgressCardProps {
  id: number;
  title: string;
  start_date: string;
  end_date: string;
  roi: number;
  amount: string | number;
  percentage: number;
  status: SavingPlanStatus;
}

interface FilterParams {
  keyword?: string;
  page?: number;
  status?: TransactionStatus;
  state_date?: string;
  end_date?: string;
}
