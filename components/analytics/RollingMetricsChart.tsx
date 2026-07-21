"use client";

import { CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, ComposedChart, ReferenceLine } from "recharts";
import { format } from "date-fns";
import { RollingPoint } from "@/lib/aggregations";
import { formatPercent, formatR, RechartsTooltipProps } from "@/lib/format";

function Tip({ active, payload }: RechartsTooltipProps<RollingPoint>) {
  if (!active || !payload?.length) return null;
  const p: RollingPoint = payload[0].payload;
  return (
    <div className="rounded-lg border border-border bg-card card-shadow-hover px-3 py-2 text-xs space-y-0.5">
      <div className="text-fg-subtle">{format(new Date(p.date), "MMM d, yyyy")}</div>
      <div className="tabular-nums">Win rate: {formatPercent(p.winRate * 100, { digits: 0 })}</div>
      <div className="tabular-nums">Expectancy: {formatR(p.expectancy, { sign: true })}</div>
      {p.sharpe !== null && <div className="tabular-nums">Sharpe: {p.sharpe.toFixed(2)}</div>}
    </div>
  );
}

export function RollingMetricsChart({ data, window }: { data: RollingPoint[]; window: number }) {
  if (data.length === 0) {
    return (
      <div className="h-56 flex items-center justify-center text-sm text-fg-subtle">
        Need at least {window} trades in this selection for a rolling view.
      </div>
    );
  }
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="var(--color-border)" vertical={false} />
          <XAxis dataKey="date" tickFormatter={(d) => format(new Date(d), "MMM d")} tick={{ fontSize: 11, fill: "var(--color-fg-subtle)" }} axisLine={{ stroke: "var(--color-border)" }} tickLine={false} minTickGap={40} />
          <YAxis yAxisId="pct" tickFormatter={(v) => `${v}%`} tick={{ fontSize: 11, fill: "var(--color-fg-subtle)" }} axisLine={false} tickLine={false} width={40} />
          <ReferenceLine yAxisId="pct" y={50} stroke="var(--color-fg-subtle)" strokeDasharray="3 3" />
          <Tooltip content={<Tip />} />
          <Line yAxisId="pct" type="monotone" dataKey={(d: RollingPoint) => d.winRate * 100} stroke="var(--color-accent-strong)" strokeWidth={2} dot={false} isAnimationActive animationDuration={500} />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="text-xs text-fg-subtle mt-1">Rolling win rate over a trailing {window}-trade window</div>
    </div>
  );
}
