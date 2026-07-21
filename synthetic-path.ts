"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { generateSeedTrades } from "@/lib/seed";
import { Trade } from "@/lib/types";

function newId(): string {
  return `t-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

interface TradeStore {
  trades: Trade[];
  hasHydrated: boolean;
  setHasHydrated: (v: boolean) => void;
  addTrade: (t: Omit<Trade, "id" | "isSeed" | "createdAt" | "updatedAt">) => string;
  updateTrade: (id: string, t: Partial<Trade>) => void;
  deleteTrade: (id: string) => void;
  resetDemo: () => void;
}

export const useTradeStore = create<TradeStore>()(
  persist(
    (set) => ({
      trades: generateSeedTrades(),
      hasHydrated: false,
      setHasHydrated: (v) => set({ hasHydrated: v }),
      addTrade: (t) => {
        const id = newId();
        const now = new Date().toISOString();
        set((state) => ({
          trades: [
            ...state.trades,
            { ...t, id, isSeed: false, createdAt: now, updatedAt: now },
          ],
        }));
        return id;
      },
      updateTrade: (id, patch) =>
        set((state) => ({
          trades: state.trades.map((t) =>
            t.id === id ? { ...t, ...patch, updatedAt: new Date().toISOString() } : t
          ),
        })),
      deleteTrade: (id) =>
        set((state) => ({ trades: state.trades.filter((t) => t.id !== id) })),
      resetDemo: () => set({ trades: generateSeedTrades() }),
    }),
    {
      name: "ledger-trades",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
