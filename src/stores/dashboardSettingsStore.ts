import { create } from "zustand";

interface DashboardSettingsStore {
  isDialogOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
};

export const useDashboardSettingsStore = create<DashboardSettingsStore>((set) => ({
  isDialogOpen: false,
  openDialog: () => set({ isDialogOpen: true }),
  closeDialog: () => set({ isDialogOpen: false }),
})); 