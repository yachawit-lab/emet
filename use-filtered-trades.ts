"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEFAULT_FILTERS, FilterState } from "@/lib/types";

interface FilterStore {
  filters: FilterState;
  setFilters: (patch: Partial<FilterState>) => void;
  clearAll: () => void;
  toggleSymbol: (s: string) => void;
  toggleSetup: (s: string) => void;
  toggleTag: (t: string) => void;
}

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      filters: DEFAULT_FILTERS,
      setFilters: (patch) =>
        set((state) => ({ filters: { ...state.filters, ...patch } })),
      clearAll: () => set({ filters: DEFAULT_FILTERS }),
      toggleSymbol: (s) =>
        set((state) => ({
          filters: {
            ...state.filters,
            symbols: state.filters.symbols.includes(s)
              ? state.filters.symbols.filter((x) => x !== s)
              : [...state.filters.symbols, s],
          },
        })),
      toggleSetup: (s) =>
        set((state) => ({
          filters: {
            ...state.filters,
            setups: state.filters.setups.includes(s)
              ? state.filters.setups.filter((x) => x !== s)
              : [...state.filters.setups, s],
          },
        })),
      toggleTag: (t) =>
        set((state) => ({
          filters: {
            ...state.filters,
            tags: state.filters.tags.includes(t)
              ? state.filters.tags.filter((x) => x !== t)
              : [...state.filters.tags, t],
          },
        })),
    }),
    { name: "ledger-filters" }
  )
);
