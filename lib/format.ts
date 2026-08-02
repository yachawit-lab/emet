export function formatCurrency(value: number, opts?: { sign?: boolean }): string {
  const abs = Math.abs(value);
  const formatted = abs.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  if (opts?.sign) {
    if (value > 0) return `+${formatted}`;
    if (value < 0) return `-${formatted}`;
    return formatted;
  }
  return value < 0 ? `-${formatted}` : formatted;
}

export function formatCurrencyCompact(value: number): string {
  const sign = value < 0 ? "-" : "";
  const abs = Math.abs(value);
  if (abs >= 1_000_000) return `${sign}$${(abs / 1_000_000).toFixed(2)}M`;
  if (abs >= 1_000) return `${sign}$${(abs / 1_000).toFixed(1)}k`;
  return `${sign}$${abs.toFixed(0)}`;
}

export function formatR(value: number, opts?: { sign?: boolean }): string {
  const formatted = `${Math.abs(value).toFixed(2)}R`;
  if (opts?.sign) {
    if (value > 0) return `+${formatted}`;
    if (value < 0) return `-${formatted}`;
    return formatted;
  }
  return value < 0 ? `-${formatted}` : formatted;
}

export function formatPercent(value: number, opts?: { sign?: boolean; digits?: number }): string {
  const digits = opts?.digits ?? 1;
  const formatted = `${Math.abs(value).toFixed(digits)}%`;
  if (opts?.sign) {
    if (value > 0) return `+${formatted}`;
    if (value < 0) return `-${formatted}`;
    return formatted;
  }
  return value < 0 ? `-${formatted}` : formatted;
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${Math.round(minutes)}m`;
  const h = Math.floor(minutes / 60);
  const m = Math.round(minutes % 60);
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

export function formatLot(value: number): string {
  if (!isFinite(value) || value <= 0) return "—";
  const abs = Math.abs(value);
  const digits = abs < 1 ? 3 : abs < 10 ? 2 : 1;
  return value.toFixed(digits);
}

export function formatNumber(value: number, digits = 2): string {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

/** Minimal shape of recharts' Tooltip content-render props, typed just enough to read payload[0].payload. */
export interface RechartsTooltipProps<T> {
  active?: boolean;
  payload?: { payload: T }[];
}
