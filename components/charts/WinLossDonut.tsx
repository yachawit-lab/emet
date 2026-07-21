"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { formatCurrency, formatPercent } from "@/lib/format";
import { useViewStore } from "@/store/view-store";
import { Metrics } from "@/lib/metrics";

export function WinLossDonut({ metrics }: { metrics: Metrics }) {
  const { hidePnl } = useViewStore();
  const data = [
    { name: "Wins", value: metrics.wins, color: "var(--color-gain)" },
    { name: "Losses", value: metrics.losses, color: "var(--color-loss)" },
    { name: "Breakeven", value: metrics.breakevens, color: "var(--color-fg-subtle)" },
  ].filter((d) => d.value > 0);

  const maxAvg = Math.max(metrics.avgWin, Math.abs(metrics.avgLoss), 1);

  return (
    <div className="flex items-center gap-6">
      <div className="relative h-32 w-32 shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius="70%"
              outerRadius="100%"
              startAngle={90}
              endAngle={-270}
              isAnimationActive
              animationDuration={500}
              stroke="none"
            >
              {data.map((d) => (
                <Cell key={d.name} fill={d.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="font-display text-xl tabular-nums">
            {formatPercent(metrics.winRate * 100, { digits: 0 })}
          </div>
          <div className="text-[10px] text-fg-subtle uppercase tracking-wide">Win rate</div>
        </div>
      </div>
      <div className="flex-1 space-y-3 min-w-0">
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-fg-muted">Avg win</span>
            <span className="font-medium text-gain tabular-nums">
              {hidePnl ? "•••" : formatCurrency(metrics.avgWin, { sign: true })}
            </span>
          </div>
          <div className="h-2 rounded-full bg-panel overflow-hidden">
            <div
              className="h-full rounded-full bg-gain transition-all duration-500"
              style={{ width: `${(metrics.avgWin / maxAvg) * 100}%` }}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-fg-muted">Avg loss</span>
            <span className="font-medium text-loss tabular-nums">
              {hidePnl ? "•••" : formatCurrency(metrics.avgLoss, { sign: true })}
            </span>
          </div>
          <div className="h-2 rounded-full bg-panel overflow-hidden">
            <div
              className="h-full rounded-full bg-loss transition-all duration-500"
              style={{ width: `${(Math.abs(metrics.avgLoss) / maxAvg) * 100}%` }}
            />
          </div>
        </div>
        <div className="text-xs text-fg-subtle pt-1">
          {metrics.wins} wins · {metrics.losses} losses
          {metrics.breakevens > 0 ? ` · ${metrics.breakevens} breakeven` : ""}
        </div>
      </div>
    </div>
  );
}
