"use client";

import { useMemo, useState } from "react";
import { addDays, format, startOfWeek, subDays } from "date-fns";
import { DailyPnl } from "@/lib/aggregations";
import { formatCurrency } from "@/lib/format";
import { useViewStore } from "@/store/view-store";
import { cn } from "@/lib/cn";

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function intensity(net: number, maxAbs: number): number {
  if (maxAbs === 0) return 0;
  return Math.min(1, Math.abs(net) / maxAbs);
}

export function YearHeatmap({
  daily,
  days = 365,
}: {
  daily: Map<string, DailyPnl>;
  days?: number;
}) {
  const { hidePnl } = useViewStore();
  const [hover, setHover] = useState<{ date: string; x: number; y: number } | null>(null);

  const { weeks, maxAbs, monthMarkers } = useMemo(() => {
    const today = new Date();
    const start = startOfWeek(subDays(today, days));
    const totalDays = Math.ceil((today.getTime() - start.getTime()) / 86400000) + 7;
    const cells: { date: string; net: number; trades: number }[] = [];
    for (let i = 0; i < totalDays; i++) {
      const d = addDays(start, i);
      const key = format(d, "yyyy-MM-dd");
      const entry = daily.get(key);
      cells.push({ date: key, net: entry?.net ?? 0, trades: entry?.trades ?? 0 });
    }
    const weeksArr: typeof cells[] = [];
    for (let i = 0; i < cells.length; i += 7) weeksArr.push(cells.slice(i, i + 7));
    const max = Math.max(1, ...cells.map((c) => Math.abs(c.net)));

    const markers: { weekIndex: number; label: string }[] = [];
    let lastMonth = -1;
    weeksArr.forEach((week, wi) => {
      const d = new Date(week[0].date);
      const m = d.getMonth();
      if (m !== lastMonth) {
        markers.push({ weekIndex: wi, label: MONTH_LABELS[m] });
        lastMonth = m;
      }
    });

    return { weeks: weeksArr, maxAbs: max, monthMarkers: markers };
  }, [daily, days]);

  return (
    <div className="relative">
      <div className="flex gap-[3px] text-[10px] text-fg-subtle mb-1 pl-6">
        {monthMarkers.map((m) => (
          <div
            key={`${m.label}-${m.weekIndex}`}
            style={{ position: "relative", left: `${m.weekIndex * 13}px` }}
            className="absolute"
          >
            {m.label}
          </div>
        ))}
      </div>
      <div className="flex gap-[3px] overflow-x-auto pt-4">
        <div className="flex gap-[3px]">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((cell) => {
                const isFuture = new Date(cell.date) > new Date();
                const gain = cell.net >= 0;
                return (
                  <div
                    key={cell.date}
                    onMouseEnter={(e) => {
                      const r = e.currentTarget.getBoundingClientRect();
                      setHover({ date: cell.date, x: r.left, y: r.top });
                    }}
                    onMouseLeave={() => setHover(null)}
                    className={cn(
                      "h-[11px] w-[11px] rounded-[3px] transition-transform hover:scale-125",
                      isFuture && "opacity-0 pointer-events-none"
                    )}
                    style={{
                      background:
                        cell.trades === 0
                          ? "var(--color-panel)"
                          : gain
                            ? `color-mix(in srgb, var(--color-gain) ${20 + intensity(cell.net, maxAbs) * 70}%, var(--color-panel))`
                            : `color-mix(in srgb, var(--color-loss) ${20 + intensity(cell.net, maxAbs) * 70}%, var(--color-panel))`,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {hover &&
        (() => {
          const cell = daily.get(hover.date);
          return (
            <div
              className="fixed z-50 rounded-lg border border-border bg-card card-shadow-hover px-2.5 py-1.5 text-xs pointer-events-none"
              style={{ left: hover.x + 16, top: hover.y - 8 }}
            >
              <div className="text-fg-subtle">{format(new Date(hover.date), "MMM d, yyyy")}</div>
              {cell ? (
                <div className={cn("font-medium tabular-nums", cell.net >= 0 ? "text-gain" : "text-loss")}>
                  {hidePnl ? "•••" : formatCurrency(cell.net, { sign: true })} · {cell.trades} trade
                  {cell.trades !== 1 ? "s" : ""}
                </div>
              ) : (
                <div className="text-fg-subtle">No trades</div>
              )}
            </div>
          );
        })()}
    </div>
  );
}
