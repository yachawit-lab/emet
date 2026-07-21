"use client";

import { useMemo } from "react";
import { useTradeStore } from "@/store/trade-store";
import { useFilterStore } from "@/store/filter-store";
import { enrichAll } from "./derive";
import { applyFilters, applyFiltersWithWindow, previousPeriodWindow } from "./filters";
import { EnrichedTrade } from "./types";

/** All trades, enriched with derived metrics — unfiltered. */
export function useAllTrades(): EnrichedTrade[] {
  const trades = useTradeStore((s) => s.trades);
  return useMemo(() => enrichAll(trades), [trades]);
}

/** Trades enriched and scoped to the current global filter selection. */
export function useFilteredTrades(): EnrichedTrade[] {
  const all = useAllTrades();
  const filters = useFilterStore((s) => s.filters);
  return useMemo(() => applyFilters(all, filters), [all, filters]);
}

/** Trades from the equivalent-length window immediately before the current selection, for KPI deltas. */
export function usePreviousPeriodTrades(): EnrichedTrade[] {
  const all = useAllTrades();
  const filters = useFilterStore((s) => s.filters);
  return useMemo(() => {
    const window = previousPeriodWindow(filters);
    if (!window) return [];
    return applyFiltersWithWindow(all, filters, window);
  }, [all, filters]);
}
