import { useQuery } from "@tanstack/react-query";
import api from "../useApi";
export const useGetAdminStats = () => {
  return useQuery<AdminStatsResponse>({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const { data } = await api.get(`/admin/stats/`); // Adjust endpoint
      return data;
    },
  });
};
