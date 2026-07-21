"use client";

import { useState } from "react";
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { BreakdownRow, breakdownBySetup, breakdownBySymbol, breakdownByWeekday } from "@/lib/aggregations";
import { EnrichedTrade } from "@/lib/types";
import { formatCurrency, formatCurrencyCompact, formatPercent, RechartsTooltipProps } from "@/lib/format";
import { useViewStore } from "@/store/view-store";
import { useFilterStore } from "@/store/filter-store";

type Mode = "symbol" | "setup" | "weekday";

function Tip({ active, payload }: RechartsTooltipProps<BreakdownRow>) {
  const { hidePnl } = useViewStore();
  if (!active || !payload?.length) return null;
  const row: BreakdownRow = payload[0].payload;
  return (
    <div className="rounded-lg border border-border bg-card card-shadow-hover px-3 py-2 text-xs">
      <div className="font-medium text-fg mb-1">{row.key}</div>
      <div className="tabular-nums">
        {hidePnl ? "•••" : formatCurrency(row.netPnl, { sign: true })} · {row.count} trades ·{" "}
        {formatPercent(row.winRate * 100, { digits: 0 })} win
      </div>
    </div>
  );
}

export function BreakdownBars({ trades }: { trades: EnrichedTrade[] }) {
  const [mode, setMode] = useState<Mode>("symbol");
  const { hidePnl } = useViewStore();
  const { toggleSymbol, toggleSetup } = useFilterStore();

  const data =
    mode === "symbol"
      ? breakdownBySymbol(trades)
      : mode === "setup"
        ? breakdownBySetup(trades)
        : breakdownByWeekday(trades);

  function onBarClick(row: BreakdownRow) {
    if (mode === "symbol") toggleSymbol(row.key);
    if (mode === "setup") toggleSetup(row.key);
  }

  return (
    <div>
      <SegmentedControl
        size="sm"
        options={[
          { value: "symbol", label: "By symbol" },
          { value: "setup", label: "By setup" },
          { value: "weekday", label: "By weekday" },
        ]}
        value={mode}
        onChange={(v) => setMode(v as Mode)}
        className="mb-4"
      />
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 0, right: 16, left: 0, bottom: 0 }}>
            <XAxis type="number" tickFormatter={formatCurrencyCompact} tick={{ fontSize: 11, fill: "var(--color-fg-subtle)" }} axisLine={false} tickLine={false} />
            <YAxis
              type="category"
              dataKey="key"
              width={72}
              tick={{ fontSize: 12, fill: "var(--color-fg-muted)" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<Tip />} cursor={{ fill: "var(--color-panel)" }} />
            <Bar
              dataKey="netPnl"
              radius={[0, 6, 6, 0]}
              onClick={(d: { payload?: BreakdownRow }) => d.payload && onBarClick(d.payload)}
              cursor={mode === "weekday" ? "default" : "pointer"}
              isAnimationActive
              animationDuration={450}
            >
              {data.map((row) => (
                <Cell
                  key={row.key}
                  fill={row.netPnl >= 0 ? "var(--color-gain)" : "var(--color-loss)"}
                  fillOpacity={hidePnl ? 0.35 : 0.85}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
