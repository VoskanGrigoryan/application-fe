import { create } from "zustand";

type UiStore = {
  isFilterDrawerOpened: boolean;
  setFilterDrawerOpened: (open: boolean) => void;
};

export const useUiStore = create<UiStore>((set) => ({
  isFilterDrawerOpened: false,
  setFilterDrawerOpened: (bool) => set({ isFilterDrawerOpened: bool }),
}));
