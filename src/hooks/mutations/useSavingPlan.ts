import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";
import api from "../useApi";

export const useCreatePlan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: CreatePlanPayload) => {
      const formPayload = new FormData();
      formPayload.append("name", payload.name);
      if (payload.image) {
        formPayload.append("image", payload.image);
      }
      formPayload.append("description", payload.description);
      formPayload.append("benefits", JSON.stringify(payload.benefits));
      formPayload.append("amount_per_cycle", payload.amount_per_cycle);
      formPayload.append("type", payload.type);
      formPayload.append("duration", payload.duration);
      formPayload.append("interest_rate", payload.interest_rate);
      const res = await api.post(`/plans/`, formPayload, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    },
    onSuccess: (data) => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["plans"],
      });
      if (data.message) {
        toast.success(data.message);
      } else toast.success("Created plan successfully");
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
export const useEditPlan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: UpdatePlanPayload) => {
      const formPayload = new FormData();
      if (payload.name) {
        formPayload.append("name", payload.name);
      }
      if (payload.video_link) {
        formPayload.append("video_link", payload.video_link);
      }
      if (payload.description) {
        formPayload.append("description", payload.description);
      }
      if (payload.type) {
        formPayload.append("type", payload.type);
      }
      if (payload.duration) {
        formPayload.append("duration", payload.duration);
      }
      if (payload.interest_rate) {
        formPayload.append("interest_rate", payload.interest_rate);
      }
      if (payload.amount_per_cycle) {
        formPayload.append("amount_per_cycle", payload.amount_per_cycle);
      }
      if (payload.benefits) {
        formPayload.append("benefits", JSON.stringify(payload.benefits));
      }
      const res = await api.patch(`/plans/${payload.id}/`, formPayload, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    },
    onSuccess: (data) => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["plans"],
      });
      queryClient.invalidateQueries({
        queryKey: ["plans-detail"],
      });
      if (data.message) {
        toast.success(data.message);
      } else toast.success("Created plan successfully");
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
export const useJoinPlan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: JoinPlanPayload) => {
      const res = await api.post(`/user-plans/join/`, payload);
      return res.data;
    },
    onSuccess: (data) => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["user-plans-detail"],
      });
      if (data) {
        toast.success(data.message);
      } else toast.success("Joined plan successfully");
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
export const useMakeDeposit = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: MakeDepositPayload) => {
      const res = await api.post(`/user-plans/make_deposit/`, payload);
      return res.data;
    },
    onSuccess: (data) => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["user-plans-detail"],
      });
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
      if (data) {
        toast.success(data.message);
      } else toast.success("Deposit made successfully");
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
export const useClearance = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: ClearancePayload) => {
      const res = await api.post(`/user-plans/${payload.id}/clearance/`);
      return res.data;
    },
    onSuccess: (data) => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["user-plans"],
      });
      queryClient.invalidateQueries({
        queryKey: ["user-plans-detail"],
      });
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
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
