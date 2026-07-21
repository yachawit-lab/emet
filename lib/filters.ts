import { DatePreset, EnrichedTrade, FilterState } from "./types";

export function presetRange(preset: DatePreset, now: Date = new Date()): { from: Date | null; to: Date | null } {
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);

  switch (preset) {
    case "7D":
      start.setDate(start.getDate() - 6);
      return { from: start, to: end };
    case "30D":
      start.setDate(start.getDate() - 29);
      return { from: start, to: end };
    case "90D":
      start.setDate(start.getDate() - 89);
      return { from: start, to: end };
    case "YTD":
      return { from: new Date(now.getFullYear(), 0, 1), to: end };
    case "1Y":
      start.setFullYear(start.getFullYear() - 1);
      return { from: start, to: end };
    case "All":
    default:
      return { from: null, to: null };
  }
}

export function applyFilters(
  trades: EnrichedTrade[],
  filters: FilterState,
  now: Date = new Date()
): EnrichedTrade[] {
  let from: Date | null;
  let to: Date | null;
  if (filters.preset === "Custom") {
    from = filters.from ? new Date(filters.from) : null;
    to = filters.to ? new Date(filters.to) : null;
    if (to) to.setHours(23, 59, 59, 999);
  } else {
    ({ from, to } = presetRange(filters.preset, now));
  }

  return trades.filter((t) => {
    const entry = new Date(t.entryTime);
    if (from && entry < from) return false;
    if (to && entry > to) return false;
    if (filters.symbols.length > 0 && !filters.symbols.includes(t.symbol)) return false;
    if (filters.setups.length > 0 && !filters.setups.includes(t.setup)) return false;
    if (filters.tags.length > 0 && !filters.tags.some((tag) => t.tags.includes(tag))) return false;
    if (filters.side !== "all" && t.side !== filters.side) return false;
    return true;
  });
}

/**
 * The equivalent-length window immediately preceding the current filter's date range,
 * used to compute KPI deltas. Returns null when there's no bounded window to compare
 * against (e.g. the "All" preset).
 */
export function previousPeriodWindow(
  filters: FilterState,
  now: Date = new Date()
): { from: Date; to: Date } | null {
  let from: Date | null;
  let to: Date | null;
  if (filters.preset === "Custom") {
    from = filters.from ? new Date(filters.from) : null;
    to = filters.to ? new Date(filters.to) : null;
  } else {
    ({ from, to } = presetRange(filters.preset, now));
  }
  if (!from || !to) return null;
  const spanMs = to.getTime() - from.getTime();
  const prevTo = new Date(from.getTime() - 1);
  const prevFrom = new Date(prevTo.getTime() - spanMs);
  return { from: prevFrom, to: prevTo };
}

export function applyFiltersWithWindow(
  trades: EnrichedTrade[],
  filters: FilterState,
  window: { from: Date; to: Date }
): EnrichedTrade[] {
  return trades.filter((t) => {
    const entry = new Date(t.entryTime);
    if (entry < window.from || entry > window.to) return false;
    if (filters.symbols.length > 0 && !filters.symbols.includes(t.symbol)) return false;
    if (filters.setups.length > 0 && !filters.setups.includes(t.setup)) return false;
    if (filters.tags.length > 0 && !filters.tags.some((tag) => t.tags.includes(tag))) return false;
    if (filters.side !== "all" && t.side !== filters.side) return false;
    return true;
  });
}

export function isFilterActive(filters: FilterState): boolean {
  return (
    filters.preset !== "All" ||
    filters.symbols.length > 0 ||
    filters.setups.length > 0 ||
    filters.tags.length > 0 ||
    filters.side !== "all"
  );
}
