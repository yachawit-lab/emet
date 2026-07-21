"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { format } from "date-fns";
import { EquityPoint } from "@/lib/aggregations";
import { formatCurrency, formatCurrencyCompact, RechartsTooltipProps } from "@/lib/format";
import { useViewStore } from "@/store/view-store";

function EquityTip({ active, payload }: RechartsTooltipProps<EquityPoint>) {
  const { hidePnl } = useViewStore();
  if (!active || !payload?.length) return null;
  const p = payload[0].payload;
  return (
    <div className="rounded-lg border border-border bg-card card-shadow-hover px-3 py-2 text-xs space-y-0.5">
      <div className="text-fg-subtle">{format(new Date(p.date), "MMM d, yyyy")}</div>
      <div className="tabular-nums text-accent-strong">
        Equity: {hidePnl ? "•••" : formatCurrency(p.equity, { sign: true })}
      </div>
    </div>
  );
}

export function EquityCurveChart({ data }: { data: EquityPoint[] }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="equityFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-accent-strong)" stopOpacity={0.2} />
              <stop offset="100%" stopColor="var(--color-accent-strong)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="var(--color-border)" vertical={false} />
          <XAxis
            dataKey="date"
            tickFormatter={(d) => format(new Date(d), "MMM d")}
            tick={{ fontSize: 11, fill: "var(--color-fg-subtle)" }}
            axisLine={{ stroke: "var(--color-border)" }}
            tickLine={false}
            minTickGap={40}
          />
          <YAxis
            tickFormatter={formatCurrencyCompact}
            tick={{ fontSize: 11, fill: "var(--color-fg-subtle)" }}
            axisLine={false}
            tickLine={false}
            width={56}
          />
          <Tooltip content={<EquityTip />} />
          <Area
            type="monotone"
            dataKey="equity"
            stroke="var(--color-accent-strong)"
            strokeWidth={2}
            fill="url(#equityFill)"
            isAnimationActive
            animationDuration={500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function DrawdownStrip({ data }: { data: EquityPoint[] }) {
  return (
    <div className="h-16 w-full mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 0, right: 16, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="drawdownFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-loss)" stopOpacity={0} />
              <stop offset="100%" stopColor="var(--color-loss)" stopOpacity={0.3} />
            </linearGradient>
          </defs>
          <YAxis hide domain={["dataMin", 0]} />
          <Area
            type="monotone"
            dataKey="drawdown"
            stroke="var(--color-loss)"
            strokeWidth={1}
            fill="url(#drawdownFill)"
            isAnimationActive
            animationDuration={500}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="text-[10px] text-fg-subtle mt-0.5">Drawdown</div>
    </div>
  );
}
