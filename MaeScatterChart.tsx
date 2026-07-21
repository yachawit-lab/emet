"use client";

import { useMemo } from "react";
import { addDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from "date-fns";
import { DailyPnl } from "@/lib/aggregations";
import { formatCurrency } from "@/lib/format";
import { useViewStore } from "@/store/view-store";
import { cn } from "@/lib/cn";

export function WeeklySummary({
  month,
  daily,
  weekStartsOn = 0,
}: {
  month: Date;
  daily: Map<string, DailyPnl>;
  weekStartsOn?: 0 | 1;
}) {
  const { hidePnl } = useViewStore();

  const weeks = useMemo(() => {
    const start = startOfWeek(startOfMonth(month), { weekStartsOn });
    const end = endOfWeek(endOfMonth(month), { weekStartsOn });
    const rows: { label: string; net: number; trades: number }[] = [];
    let cur = start;
    while (cur <= end) {
      const weekEnd = addDays(cur, 6);
      let net = 0;
      let trades = 0;
      for (let i = 0; i < 7; i++) {
        const d = addDays(cur, i);
        const entry = daily.get(format(d, "yyyy-MM-dd"));
        if (entry) {
          net += entry.net;
          trades += entry.trades;
        }
      }
      rows.push({ label: `${format(cur, "MMM d")} – ${format(weekEnd, "MMM d")}`, net, trades });
      cur = addDays(cur, 7);
    }
    return rows;
  }, [month, daily, weekStartsOn]);

  return (
    <div className="space-y-2">
      {weeks.map((w) => (
        <div key={w.label} className="flex items-center justify-between rounded-xl bg-panel px-3.5 py-2.5">
          <div>
            <div className="text-xs font-medium text-fg">{w.label}</div>
            <div className="text-[11px] text-fg-subtle">{w.trades} trades</div>
          </div>
          <div className={cn("text-sm font-medium tabular-nums", w.net >= 0 ? "text-gain" : "text-loss")}>
            {w.trades === 0 ? "—" : hidePnl ? "•••" : formatCurrency(w.net, { sign: true })}
          </div>
        </div>
      ))}
    </div>
  );
}
