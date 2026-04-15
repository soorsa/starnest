import { useQuery } from "@tanstack/react-query";
import api from "../useApi";
export const useGetFeeds = (params: TransactionParams) => {
  return useQuery<FeedsResponse>({
    queryKey: ["feeds", params],
    queryFn: async () => {
      const { data } = await api.get(`/posts/`, { params });
      return data;
    },
  });
};
