import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";
import api from "../useApi";

export const useUpdateUser = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async (payload: UserUpdatePayload) => {
      const formData = new FormData();

      Object.entries(payload).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          formData.append(key, value);
        }
      });

      const res = await api.patch(`/auth/profile/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return res.data;
    },

    onSuccess() {
      qc.invalidateQueries({ queryKey: ["user"] });
      qc.invalidateQueries({ queryKey: ["user-detail"] });
      toast.success("User profile updated");
    },

    onError(error: AxiosError<ErrorResponse>) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.detail ||
        "Failed to update profile";

      toast.error(message);
    },
  });
};
