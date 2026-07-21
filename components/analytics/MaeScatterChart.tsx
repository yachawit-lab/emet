"use client";

import { useRouter } from "next/navigation";
import { CartesianGrid, Cell, ReferenceLine, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from "recharts";
import { ScatterPoint } from "@/lib/aggregations";
import { RechartsTooltipProps } from "@/lib/format";
import { formatR } from "@/lib/format";

function Tip({ active, payload }: RechartsTooltipProps<ScatterPoint>) {
  if (!active || !payload?.length) return null;
  const p: ScatterPoint = payload[0].payload;
  return (
    <div className="rounded-lg border border-border bg-card card-shadow-hover px-3 py-2 text-xs">
      <div className="font-medium text-fg mb-1">{p.symbol}</div>
      <div className="tabular-nums text-fg-muted">
        MAE {formatR(p.maeR)} · Result {formatR(p.rMultiple, { sign: true })}
      </div>
      <div className="text-fg-subtle mt-0.5">Click to open trade</div>
    </div>
  );
}

export function MaeScatterChart({ points }: { points: ScatterPoint[] }) {
  const router = useRouter();
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
          <CartesianGrid stroke="var(--color-border)" />
          <XAxis
            type="number"
            dataKey="maeR"
            name="MAE"
            unit="R"
            tick={{ fontSize: 11, fill: "var(--color-fg-subtle)" }}
            axisLine={{ stroke: "var(--color-border)" }}
            tickLine={false}
            label={{ value: "Adverse excursion (R)", position: "insideBottom", offset: -4, fontSize: 11, fill: "var(--color-fg-subtle)" }}
          />
          <YAxis
            type="number"
            dataKey="rMultiple"
            name="Result"
            unit="R"
            tick={{ fontSize: 11, fill: "var(--color-fg-subtle)" }}
            axisLine={false}
            tickLine={false}
            width={40}
          />
          <ReferenceLine y={0} stroke="var(--color-fg-subtle)" strokeDasharray="3 3" />
          <Tooltip content={<Tip />} cursor={{ strokeDasharray: "3 3" }} />
          <Scatter
            data={points}
            onClick={(d: { payload?: ScatterPoint }) => d.payload && router.push(`/trades/${d.payload.tradeId}`)}
            cursor="pointer"
            isAnimationActive
            animationDuration={450}
          >
            {points.map((p) => (
              <Cell key={p.tradeId} fill={p.rMultiple >= 0 ? "var(--color-gain)" : "var(--color-loss)"} fillOpacity={0.7} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
