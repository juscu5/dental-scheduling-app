import { create } from "zustand";
import type { Logout } from "../types/GlobalFuncTypes";

export const useLogout = create<Logout>(() => ({
  logMeOut: () => {
    localStorage.removeItem("account");
    window.location.reload();
  },
}));
