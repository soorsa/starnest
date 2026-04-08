import { useQuery } from "@tanstack/react-query";
import api from "../useApi";

export const useGetPlans = (params: PlanFilterParams) => {
  return useQuery<PlansResponse>({
    queryKey: ["plans", params],
    queryFn: async () => {
      const { data } = await api.get(`/plans/`, { params }); // Adjust endpoint
      return data;
    },
  });
};
export const useGetPlanByID = (id: number) => {
  return useQuery<Plan>({
    queryKey: ["plans-detail", id],
    queryFn: async () => {
      const { data } = await api.get(`/plans/${id}/`); // Adjust endpoint
      return data;
    },
    enabled: !!id,
  });
};
interface PlanDetailStats {
  active_plans: number;
  active_users: number;
  total_hands: number;
  total_deposited_balance: number;
}
export const useGetPlanStatsByID = (id: number) => {
  return useQuery<PlanDetailStats>({
    queryKey: ["plans-detail-stats", id],
    queryFn: async () => {
      const { data } = await api.get(`/plans/${id}/stats/`); // Adjust endpoint
      return data;
    },
    enabled: !!id,
  });
};

export const useGetUserPlans = (params: UserSavingPlanParams) => {
  return useQuery<UserSavingPlanResponse>({
    queryKey: ["user-plans", params],
    queryFn: async () => {
      const { data } = await api.get(`/user-plans/`, { params });
      return data;
    },
    // placeholderData: keepPreviousData,
  });
};
export const useGetUserPlanByID = (id: number) => {
  return useQuery<UserSavingPlan>({
    queryKey: ["user-plans-detail", id],
    queryFn: async () => {
      const { data } = await api.get(`/user-plans/${id}/`); // Adjust endpoint
      return data;
    },
    enabled: !!id,
  });
};
