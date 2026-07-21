"use client";

import { CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, ComposedChart } from "recharts";
import { format } from "date-fns";
import { ProcessPoint } from "@/lib/aggregations";
import { formatCurrencyCompact, formatCurrency, RechartsTooltipProps } from "@/lib/format";
import { useViewStore } from "@/store/view-store";

function Tip({ active, payload }: RechartsTooltipProps<ProcessPoint>) {
  const { hidePnl } = useViewStore();
  if (!active || !payload?.length) return null;
  const p: ProcessPoint = payload[0].payload;
  return (
    <div className="rounded-lg border border-border bg-card card-shadow-hover px-3 py-2 text-xs space-y-0.5">
      <div className="text-fg-subtle">{format(new Date(p.date), "MMM d, yyyy")}</div>
      <div className="tabular-nums text-accent-strong">Equity: {hidePnl ? "•••" : formatCurrency(p.cumEquity, { sign: true })}</div>
      <div className="tabular-nums text-fg-muted">Execution score: {p.cumExecutionScore.toFixed(0)}</div>
    </div>
  );
}

export function ProcessVsProfitChart({ data }: { data: ProcessPoint[] }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="var(--color-border)" vertical={false} />
          <XAxis dataKey="date" tickFormatter={(d) => format(new Date(d), "MMM d")} tick={{ fontSize: 11, fill: "var(--color-fg-subtle)" }} axisLine={{ stroke: "var(--color-border)" }} tickLine={false} minTickGap={40} />
          <YAxis yAxisId="money" tickFormatter={formatCurrencyCompact} tick={{ fontSize: 11, fill: "var(--color-fg-subtle)" }} axisLine={false} tickLine={false} width={56} />
          <YAxis yAxisId="score" orientation="right" domain={[0, 100]} tick={{ fontSize: 11, fill: "var(--color-fg-subtle)" }} axisLine={false} tickLine={false} width={32} />
          <Tooltip content={<Tip />} />
          <Line yAxisId="money" type="monotone" dataKey="cumEquity" stroke="var(--color-accent-strong)" strokeWidth={2} dot={false} isAnimationActive animationDuration={500} name="Equity" />
          <Line yAxisId="score" type="monotone" dataKey="cumExecutionScore" stroke="var(--color-gain)" strokeWidth={1.5} strokeDasharray="4 3" dot={false} isAnimationActive animationDuration={500} name="Execution score" />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-4 text-xs text-fg-muted mt-2">
        <span className="flex items-center gap-1.5"><span className="h-0.5 w-3 bg-accent-strong inline-block rounded" /> Equity ($)</span>
        <span className="flex items-center gap-1.5"><span className="h-0.5 w-3 bg-gain inline-block rounded" style={{ borderTop: "1.5px dashed var(--color-gain)" }} /> Execution score</span>
      </div>
    </div>
  );
}
