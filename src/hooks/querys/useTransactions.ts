import { useQuery } from "@tanstack/react-query";
import api from "../useApi";
export const useGetTransactions = (params: TransactionParams) => {
  return useQuery<TransactionResponse>({
    queryKey: ["transactions", params],
    queryFn: async () => {
      const { data } = await api.get(`/transactions/`, { params });
      return data;
    },
    // placeholderData: keepPreviousData,
  });
};
