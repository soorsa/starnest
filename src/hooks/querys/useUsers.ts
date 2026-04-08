import { useQuery } from "@tanstack/react-query";
import api from "../useApi";

export const useGetUsers = (page: number) => {
  return useQuery<DetailedUsersResponse>({
    queryKey: ["users", page],
    queryFn: async () => {
      const { data } = await api.get(`/admin/users/?page=${page}`); // Adjust endpoint
      return data;
    },
  });
};
export const useGetUserByID = (id?: number) => {
  return useQuery<DetailedUser>({
    queryKey: ["user-detail", id],
    queryFn: async () => {
      const { data } = await api.get(`/admin/users/${id}/`); // Adjust endpoint
      return data;
    },
    enabled: !!id,
  });
};
