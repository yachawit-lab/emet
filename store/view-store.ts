"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ValueMode } from "@/lib/types";

interface ViewStore {
  valueMode: ValueMode;
  setValueMode: (m: ValueMode) => void;
  useGross: boolean;
  setUseGross: (v: boolean) => void;
  hidePnl: boolean;
  setHidePnl: (v: boolean) => void;
}

export const useViewStore = create<ViewStore>()(
  persist(
    (set) => ({
      valueMode: "$",
      setValueMode: (m) => set({ valueMode: m }),
      useGross: false,
      setUseGross: (v) => set({ useGross: v }),
      hidePnl: false,
      setHidePnl: (v) => set({ hidePnl: v }),
    }),
    { name: "ledger-view" }
  )
);
