import { useQuery } from "@tanstack/react-query";
import { useUserState } from "../../zustand/user.state";
import api from "../useApi";

export const useGetMyReferral = () => {
  const { token } = useUserState.getState();
  return useQuery<UserReferralStat>({
    queryKey: ["user-referral"],
    queryFn: async () => {
      const { data } = await api.get(`/referral/stats/`); // Adjust endpoint
      return data;
    },
    enabled: !!token,
  });
};
export const useGetRefWithdrawals = () => {
  const { token } = useUserState.getState();
  return useQuery<RefWithdrawal[]>({
    queryKey: ["user-referral-withdrawals"],
    queryFn: async () => {
      const { data } = await api.get(`/referral/withdrawals/`); // Adjust endpoint
      return data;
    },
    enabled: !!token,
  });
};
