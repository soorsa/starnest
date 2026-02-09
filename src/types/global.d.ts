type PlanPayment = {
  id: number;
  title: string;
  due_date: string;
  status: "paid" | "missed" | "upcomming";
  amount: number;
};
