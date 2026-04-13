type TransactionStatus = "success" | "failed" | "pending";
type PlanStatus = "paid" | "missed" | "upcoming";
type SavingPlanStatus = "completed" | "ongoing" | "missed";
type TransactionType = "deposit" | "withdrawal";
type PaymentSchedule = {
  cycle: number;
  date: string;
  status: PlanStatus;
};
type Transaction = {
  id: number;
  type: TransactionType;
  amount: string;
  ref: string;
  created_at: string;
  status: TransactionStatus;
  user_savings: UserSavingPlan;
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
type UserSavingPlanResponse = PaginatedResponse<UserSavingPlan>;
type TransactionResponse = PaginatedResponse<Transaction>;
interface UserSavingPlan {
  id: number;
  plan: Plan;
  plan_object: Plan;
  start_date: string;
  end_date: string;
  next_payment_date: string;
  total_paid: string | number;
  total_target: string | number;
  reward: number;
  total_recieveable: number;
  progress_percentage: number;
  completed: boolean;
  completed_clearance: boolean;
  current_cycle: number;
  amount_per_month: number;
  hands: number;
  payment_schedule: PaymentSchedule[];
  user: User;
}

interface FilterParams {
  keyword?: string;
  page?: number;
  status?: TransactionStatus;
  state_date?: string;
  end_date?: string;
}

interface User {
  id: number;
  nin: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  is_staff: boolean;
  is_verified: boolean;
  date_of_birth: string;
  last_login: string; // ISO date string
  date_joined: string; // ISO date string
  profile_picture: string | null;
  phone_number: string | null;

  state: string;
  country: string;
  city: string;
  address: string;

  bank: string;
  account_name: string;
  account_number: string;
  bvn: string;
}
interface DetailedUser extends User {
  plans: UserSavingPlan[];
  deposits: Transaction[];
  withdrawals: Transaction[];
  total_plans: number;
  total_savings: number;
  total_hands: number;
  total_recieveable: number;
}
interface LoginResponse {
  user: User;
  token: string;
  regresh: string;
}
type LoginError = {
  non_field_errors: string;
  error: string;
  errors: string[];
};
type RegisterError = {
  non_field_errors: string[];
  error: string;
  errors: string[];
  username: string[];
  email: string[];
  password: string[];
};

type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (status: boolean) => void;
  token: string;
  setToken: (token: string) => void;
  reset: () => void;
};
interface LoginPayload {
  email: string;
  password: string;
}
interface RegisterPayload {
  email: string;
  phone_number: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
}
interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
interface Plan {
  id: number;
  image: string;
  video_link: string;
  name: string;
  description: string;
  benefits: string[];
  amount_per_cycle: string;
  type: "monthly" | "one time";
  duration: number;
  interest_rate: string;
  total_savings: number;
  reward: number;
  expected_total_payment: number;
  created_at: string;
}
type PlansResponse = PaginatedResponse<Plan>;
type DetailedUsersResponse = PaginatedResponse<DetailedUser>;
interface ErrorResponse {
  message: string;
  detail: string;
}
interface PasswordErrorResponse {
  old_password: string[];
  new_password: string[];
  new_password2: string[];
}
interface JoinPlanPayload {
  plan_id: number;
  hands: number;
  number_of_months: number;
}
interface MakeDepositPayload {
  user_plan_id: number;
  number_of_months: number;
}
interface ClearancePayload {
  id: number;
}
interface CreatePlanPayload {
  image: File | null;
  name: string;
  video_link: string;
  description: string;
  benefits: string[];
  amount_per_cycle: string;
  type: string;
  duration: string;
  interest_rate: string;
}
interface UpdatePlanPayload {
  id: number;
  image?: File | null;
  name?: string;
  video_link?: string;
  description?: string;
  benefits?: string[];
  amount_per_cycle?: string;
  type?: string;
  duration?: string;
  interest_rate?: string;
}
interface AdminStatsResponse {
  total_users: number;
  active_users: number;
  total_plans: number;
  active_plans: number;
  total_deposits: number;
  total_withdrawals: number;
  total_savings: number;
  total_amount_of_active_plans: number;
}
interface PlanFilterParams {
  name?: string;
  type?: string;
  duration?: string;
  page: number;
  duration?: number;
  created_at?: string;
  interest_rate?: number;
}
interface TransactionParams {
  type?: TransactionType;
  page: number;
}
interface UserSavingPlanParams {
  page: number;
}
interface UserUpdatePayload {
  nin?: string;
  username?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  is_staff?: boolean;
  is_verified?: boolean;
  date_of_birth?: string;
  last_login?: string; // ISO date string
  date_joined?: string; // ISO date string
  profile_picture?: File | null;
  phone_number?: string | null;

  state?: string;
  country?: string;
  city?: string;
  address?: string;

  bank?: string;
  account_name?: string;
  account_number?: string;
  bvn?: string;

  password?: string;
}
interface PasswordPayload {
  old_password: string;
  new_password: string;
  new_password2: string;
}
