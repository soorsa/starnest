import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useModal } from "../../zustand/modal.state";
import { useUserState } from "../../zustand/user.state";
import api from "../useApi";
const { setUser, setIsLoggedIn, setToken, reset, token } =
  useUserState.getState();
const modal = useModal.getState();
export const getUser = async (): Promise<User> => {
  const response = await api.get(`/auth/profile/`);
  return response.data;
};
const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const res = await api.post(`/auth/login/`, payload);
  return res.data;
};
const register = async (payload: RegisterPayload) => {
  const cleanedPayload: Partial<RegisterPayload> = {};

  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      cleanedPayload[key as keyof RegisterPayload] = value;
    }
  });
  const res = await api.post(`/auth/register/`, cleanedPayload);
  return res.data;
};
export const logout = async () => {
  reset(); // Reset user store
  localStorage.removeItem("user-state"); // Clear persisted user state
  window.location.reload(); // Optional: Refresh page to clear UI state
  toast.success("Logged out successfully!"); // Show logout success message
};
const forgotPassword = async (payload: ForgotPasswordPayload) => {
  const res = await api.post(`/auth/forgot-password/`, payload);
  return res.data;
};
const resetPassword = async (payload: ResetPasswordPayload) => {
  const res = await api.post(`/auth/reset-password/`, payload);
  return res.data;
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      // Refetch relevant data if needed
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      setToken(data.token);
      setUser(data.user);
      setIsLoggedIn(true);
      toast.success("Login successfully");
    },
    onError: (error: AxiosError<LoginError>) => {
      // Check if this is an Axios error with response data
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        const errorMessage = errorData.non_field_errors || "Login failed";
        toast.error(errorMessage);
      } else {
        toast.error("Login Failed");
      }
    },
  });
};
export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: register,
    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success(`Logged in Successfully... ${response.user.first_name}`);
      setUser(response.user);
      setIsLoggedIn(true);
      setToken(response.token);
      modal.closeModal();
    },
    onError: (error: AxiosError<RegisterError>) => {
      if (error.response?.data) {
        const errorData = error.response.data;

        Object.values(errorData).forEach((messages) => {
          if (Array.isArray(messages)) {
            messages.forEach((message) => {
              toast.error(message);
            });
          }
        });
      } else {
        toast.error("Registration Failed!");
      }
    },
  });
};
export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });
};
export const useGetUser = () => {
  const queryResult = useQuery<User, Error>({
    queryKey: ["user"],
    queryFn: () => getUser(),
    enabled: !!token,
  });

  useEffect(() => {
    if (queryResult.data) {
      setUser(queryResult.data);
    }
  }, [queryResult.data]);

  return queryResult;
};

export const useForgotPassword = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: forgotPassword,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success(`Reset link sent successfully...`);
    },
    onError: (error: AxiosError<RegisterError>) => {
      if (error.response?.data) {
        const errorData = error.response.data;

        Object.values(errorData).forEach((messages) => {
          if (Array.isArray(messages)) {
            messages.forEach((message) => {
              toast.error(message);
            });
          }
        });
      } else {
        toast.error("Failed to sent mail!");
      }
    },
  });
};
export const useResetPassword = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success(`Reset password successfully...`);
    },
    onError: (error: AxiosError<RegisterError>) => {
      if (error.response?.data) {
        const errorData = error.response.data;

        Object.values(errorData).forEach((messages) => {
          if (Array.isArray(messages)) {
            messages.forEach((message) => {
              toast.error(message);
            });
          }
        });
      } else {
        toast.error("Reset password Failed!");
      }
    },
  });
};
