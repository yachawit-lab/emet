"use client";

import { useState } from "react";
import { WeekdayHourCell, WEEKDAY_NAMES } from "@/lib/aggregations";
import { formatCurrency, formatPercent } from "@/lib/format";
import { useViewStore } from "@/store/view-store";
import { cn } from "@/lib/cn";

const HOURS = [9, 10, 11, 12, 13, 14, 15];

function hourLabel(h: number): string {
  const period = h >= 12 ? "pm" : "am";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}${period}`;
}

export function WeekdayHourHeatmap({ cells }: { cells: WeekdayHourCell[] }) {
  const { hidePnl } = useViewStore();
  const [hover, setHover] = useState<WeekdayHourCell | null>(null);
  const maxAbs = Math.max(1, ...cells.map((c) => Math.abs(c.netPnl)));

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="min-w-[480px]">
          <div className="grid grid-cols-[48px_repeat(5,1fr)] gap-1.5 mb-1.5">
            <div />
            {[1, 2, 3, 4, 5].map((wd) => (
              <div key={wd} className="text-center text-xs font-medium text-fg-subtle">
                {WEEKDAY_NAMES[wd]}
              </div>
            ))}
          </div>
          {HOURS.map((hour) => (
            <div key={hour} className="grid grid-cols-[48px_repeat(5,1fr)] gap-1.5 mb-1.5">
              <div className="text-xs text-fg-subtle flex items-center">{hourLabel(hour)}</div>
              {[1, 2, 3, 4, 5].map((wd) => {
                const cell = cells.find((c) => c.weekday === wd && c.hour === hour);
                const net = cell?.netPnl ?? 0;
                const has = (cell?.count ?? 0) > 0;
                const gain = net >= 0;
                return (
                  <div
                    key={wd}
                    onMouseEnter={() => cell && setHover(cell)}
                    onMouseLeave={() => setHover(null)}
                    className={cn(
                      "aspect-square rounded-lg transition-transform",
                      has && "hover:scale-105 cursor-pointer"
                    )}
                    style={{
                      background: !has
                        ? "var(--color-panel)"
                        : gain
                          ? `color-mix(in srgb, var(--color-gain) ${20 + (Math.abs(net) / maxAbs) * 65}%, var(--color-panel))`
                          : `color-mix(in srgb, var(--color-loss) ${20 + (Math.abs(net) / maxAbs) * 65}%, var(--color-panel))`,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="h-10 mt-2 text-xs text-fg-muted">
        {hover && hover.count > 0 ? (
          <span>
            <strong className="text-fg">{WEEKDAY_NAMES[hover.weekday]} {hourLabel(hover.hour)}</strong> —{" "}
            {hidePnl ? "•••" : formatCurrency(hover.netPnl, { sign: true })} across {hover.count} trades ·{" "}
            {formatPercent(hover.winRate * 100, { digits: 0 })} win
          </span>
        ) : (
          <span>Hover a cell for details</span>
        )}
      </div>
    </div>
  );
}
