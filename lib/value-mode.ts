import { EnrichedTrade, ValueMode } from "./types";
import { formatCurrency, formatPercent, formatR } from "./format";

/** Resolves a trade's P&L in whichever unit the view is currently displaying. */
export function pnlValue(t: EnrichedTrade, mode: ValueMode, useGross: boolean): number {
  if (mode === "R") return t.d.rMultiple;
  if (mode === "%") return t.d.returnPct;
  return useGross ? t.d.grossPnl : t.d.netPnl;
}

export function formatPnlValue(value: number, mode: ValueMode, opts?: { sign?: boolean }): string {
  if (mode === "R") return formatR(value, opts);
  if (mode === "%") return formatPercent(value, opts);
  return formatCurrency(value, opts);
}

/** Replaces a formatted value with a privacy-mode placeholder of matching width. */
export function maskValue(formatted: string, hide: boolean): string {
  return hide ? "•••" : formatted;
}
