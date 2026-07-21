"use client";

import { useMemo } from "react";
import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { DailyPnl } from "@/lib/aggregations";
import { formatCurrencyCompact } from "@/lib/format";
import { useViewStore } from "@/store/view-store";
import { cn } from "@/lib/cn";

function intensity(net: number, maxAbs: number): number {
  if (maxAbs === 0) return 0;
  return Math.min(1, Math.abs(net) / maxAbs);
}

export function MonthView({
  month,
  daily,
  weekStartsOn = 0,
  hideWeekends,
  onSelectDay,
}: {
  month: Date;
  daily: Map<string, DailyPnl>;
  weekStartsOn?: 0 | 1;
  hideWeekends?: boolean;
  onSelectDay: (date: string) => void;
}) {
  const { hidePnl } = useViewStore();

  const { weeks, maxAbs } = useMemo(() => {
    const start = startOfWeek(startOfMonth(month), { weekStartsOn });
    const end = endOfWeek(endOfMonth(month), { weekStartsOn });
    const days: Date[] = [];
    let cur = start;
    while (cur <= end) {
      days.push(cur);
      cur = addDays(cur, 1);
    }
    const weeksArr: Date[][] = [];
    for (let i = 0; i < days.length; i += 7) weeksArr.push(days.slice(i, i + 7));
    const monthDaily = days
      .filter((d) => isSameMonth(d, month))
      .map((d) => daily.get(format(d, "yyyy-MM-dd"))?.net ?? 0);
    return { weeks: weeksArr, maxAbs: Math.max(1, ...monthDaily.map(Math.abs)) };
  }, [month, daily, weekStartsOn]);

  const dayLabels = weekStartsOn === 1 ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const visibleLabels = hideWeekends ? dayLabels.filter((_, i) => (weekStartsOn === 1 ? i < 5 : i > 0 && i < 6)) : dayLabels;

  return (
    <div>
      <div className={cn("grid gap-1.5 mb-1.5", hideWeekends ? "grid-cols-5" : "grid-cols-7")}>
        {visibleLabels.map((d) => (
          <div key={d} className="text-center text-xs font-medium text-fg-subtle py-1">
            {d}
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {weeks.map((week, wi) => {
          const visibleDays = hideWeekends
            ? week.filter((d) => d.getDay() !== 0 && d.getDay() !== 6)
            : week;
          return (
            <div key={wi} className={cn("grid gap-1.5", hideWeekends ? "grid-cols-5" : "grid-cols-7")}>
              {visibleDays.map((day) => {
                const key = format(day, "yyyy-MM-dd");
                const entry = daily.get(key);
                const inMonth = isSameMonth(day, month);
                const net = entry?.net ?? 0;
                const gain = net >= 0;
                const has = !!entry && entry.trades > 0;
                return (
                  <button
                    key={key}
                    disabled={!has}
                    onClick={() => onSelectDay(key)}
                    className={cn(
                      "aspect-square rounded-lg flex flex-col items-center justify-center gap-0.5 p-1 transition-transform",
                      !inMonth && "opacity-30",
                      has && "hover:scale-105 cursor-pointer",
                      isToday(day) && "ring-2 ring-accent"
                    )}
                    style={{
                      background: !has
                        ? "var(--color-panel)"
                        : gain
                          ? `color-mix(in srgb, var(--color-gain) ${20 + intensity(net, maxAbs) * 65}%, var(--color-panel))`
                          : `color-mix(in srgb, var(--color-loss) ${20 + intensity(net, maxAbs) * 65}%, var(--color-panel))`,
                    }}
                  >
                    <span className="text-[11px] text-fg-muted leading-none">{format(day, "d")}</span>
                    {has && (
                      <span className={cn("text-[10px] font-semibold tabular-nums leading-none", gain ? "text-gain" : "text-loss")}>
                        {hidePnl ? "•••" : formatCurrencyCompact(net)}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
