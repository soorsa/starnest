import { useQuery } from "@tanstack/react-query";
import { useUserState } from "../../zustand/user.state";
import api from "../useApi";

export const useGetMyReferralStats = () => {
  const { token } = useUserState.getState();
  return useQuery<UserReferralStat>({
    queryKey: ["user-referral-stats"],
    queryFn: async () => {
      const { data } = await api.get(`/referral/stats/`); // Adjust endpoint
      return data;
    },
    enabled: !!token,
  });
};
export const useGetMyReferrals = () => {
  const { token } = useUserState.getState();
  return useQuery<UserReferrals[]>({
    queryKey: ["user-referrals"],
    queryFn: async () => {
      const { data } = await api.get(`/referral/list_all/`); // Adjust endpoint
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
