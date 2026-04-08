import axios from "axios";
import toast from "react-hot-toast";
import { useUserState } from "../zustand/user.state";
import { logout } from "./auth/useAuth";

const api = axios.create({
  baseURL: "https://api.starnest.com.ng", // Replace with your actual API URL
  // baseURL: "http://127.0.0.1:8000/api", // Replace with your actual API URL
  headers: {
    "Content-Type": "application/json",
    // "Content-Type": "multipart/form-data",
  },
});

// Interceptor to attach token if available
api.interceptors.request.use((config) => {
  const token = useUserState.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    // Example: Auto logout on 401
    if (status === 401) {
      console.log("Status:", status);
      toast.error("Session timed out... Login again");
      logout();
      //   openLogin();
    }

    return Promise.reject(error);
  }
);

export default api;
