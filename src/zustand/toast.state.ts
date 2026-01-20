// src/store/useToastStore.ts
import { create } from "zustand";

type ToastType = "success" | "error";

interface ToastState {
  show: boolean;
  message: string;
  type: ToastType;
  showToast: (msg: string, type: ToastType) => void;
  hideToast: () => void;
}

export const useToast = create<ToastState>((set) => ({
  show: false,
  message: "",
  type: "success",
  showToast: (msg, type) => set({ show: true, message: msg, type }),
  hideToast: () => set({ show: false, message: "", type: "success" }),
}));
