"use client";

import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis, ReferenceLine } from "recharts";
import { HistogramBin } from "@/lib/aggregations";
import { formatCurrency, RechartsTooltipProps } from "@/lib/format";
import { useViewStore } from "@/store/view-store";

function Tip({ active, payload }: RechartsTooltipProps<HistogramBin>) {
  const { hidePnl } = useViewStore();
  if (!active || !payload?.length) return null;
  const bin: HistogramBin = payload[0].payload;
  return (
    <div className="rounded-lg border border-border bg-card card-shadow-hover px-3 py-2 text-xs">
      <div className="font-medium text-fg mb-1">
        {bin.min}R to {bin.max}R
      </div>
      <div className="tabular-nums">
        {bin.count} trades · {hidePnl ? "•••" : formatCurrency(bin.netPnl, { sign: true })}
      </div>
    </div>
  );
}

export function RMultipleHistogram({ bins }: { bins: HistogramBin[] }) {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={bins} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <XAxis
            dataKey="label"
            tick={{ fontSize: 10, fill: "var(--color-fg-subtle)" }}
            axisLine={{ stroke: "var(--color-border)" }}
            tickLine={false}
            interval={0}
            angle={-45}
            textAnchor="end"
            height={40}
          />
          <YAxis tick={{ fontSize: 11, fill: "var(--color-fg-subtle)" }} axisLine={false} tickLine={false} width={28} allowDecimals={false} />
          <ReferenceLine x="0R" stroke="var(--color-fg-subtle)" strokeDasharray="3 3" />
          <Tooltip content={<Tip />} cursor={{ fill: "var(--color-panel)" }} />
          <Bar dataKey="count" radius={[4, 4, 0, 0]} isAnimationActive animationDuration={450}>
            {bins.map((bin) => (
              <Cell key={bin.label} fill={bin.min >= 0 ? "var(--color-gain)" : "var(--color-loss)"} fillOpacity={0.85} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
