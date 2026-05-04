import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";
import api from "../useApi";

export const useMakeReferralWithdrawal = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { amount: number }) => {
      const res = await api.post(`/referral/withdraw/`, payload);
      return res.data;
    },
    onSuccess: (data) => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["user-plans"],
      });
      queryClient.invalidateQueries({
        queryKey: ["user-referral"],
      });
      queryClient.invalidateQueries({
        queryKey: ["user-referral-withdrawals"],
      });
      if (data) {
        toast.success(data.message);
      } else toast.success("Completed clearance successfully");
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        const errorMessage = errorData.message || errorData.detail;
        toast.error(errorMessage);
      } else {
        toast.error("Failed");
      }
    },
  });
};
