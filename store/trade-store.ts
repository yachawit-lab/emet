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
  /** Upserts: a draft matching an existing trade (by externalId, or by symbol+entryTime+exitTime
   * when there's no externalId) updates that trade in place instead of duplicating it — so
   * re-importing an enriched CSV (e.g. after a backfill improvement) refreshes old trades rather
   * than requiring them to be deleted first. */
  addTrades: (t: Omit<Trade, "id" | "isSeed" | "createdAt" | "updatedAt">[]) => { added: number; updated: number };
  updateTrade: (id: string, t: Partial<Trade>) => void;
  deleteTrade: (id: string) => void;
  resetDemo: () => void;
  clearSeedTrades: () => void;
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
      addTrades: (list) => {
        const now = new Date().toISOString();
        let added = 0;
        let updated = 0;
        set((state) => {
          const trades = [...state.trades];
          for (const draft of list) {
            const matchIdx = trades.findIndex((t) =>
              draft.externalId
                ? t.externalId === draft.externalId
                : !t.externalId &&
                  t.symbol === draft.symbol &&
                  t.entryTime === draft.entryTime &&
                  t.exitTime === draft.exitTime
            );
            if (matchIdx >= 0) {
              trades[matchIdx] = { ...trades[matchIdx], ...draft, updatedAt: now };
              updated++;
            } else {
              trades.push({ ...draft, id: newId(), isSeed: false, createdAt: now, updatedAt: now });
              added++;
            }
          }
          return { trades };
        });
        return { added, updated };
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
      clearSeedTrades: () =>
        set((state) => ({ trades: state.trades.filter((t) => !t.isSeed) })),
    }),
    {
      name: "ledger-trades",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
