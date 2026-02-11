type PlanPayment = {
  id: number;
  title: string;
  due_date: string;
  status: "paid" | "missed" | "upcomming";
  amount: number;
};
type Transaction = {
  id: number;
  title: string;
  desc: string;
  created_at: string;
  status: "success" | "failed" | "pending";
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
  status: "completed" | "ongoing" | "missed";
}
