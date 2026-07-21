"use client";

import {
  Area,
  ComposedChart,
  Line,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { format } from "date-fns";
import { Trade } from "@/lib/types";
import { syntheticPricePath } from "@/lib/synthetic-path";
import { formatDuration } from "@/lib/format";

export function TradePriceChart({ trade }: { trade: Trade }) {
  const path = syntheticPricePath(trade);
  const isLong = trade.side === "long";
  const win = trade.exitPrice !== trade.entryPrice && (isLong ? trade.exitPrice > trade.entryPrice : trade.exitPrice < trade.entryPrice);

  const prices = path.map((p) => p.price);
  const domainPad = (Math.max(...prices) - Math.min(...prices)) * 0.15 || 1;
  const domain: [number, number] = [
    Math.min(...prices, trade.stop, trade.target) - domainPad,
    Math.max(...prices, trade.stop, trade.target) + domainPad,
  ];

  return (
    <div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={path} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="priceFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={win ? "var(--color-gain)" : "var(--color-loss)"} stopOpacity={0.18} />
                <stop offset="100%" stopColor={win ? "var(--color-gain)" : "var(--color-loss)"} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="t" tickFormatter={(v) => format(new Date(v), "h:mma")} tick={{ fontSize: 10, fill: "var(--color-fg-subtle)" }} axisLine={{ stroke: "var(--color-border)" }} tickLine={false} minTickGap={40} />
            <YAxis domain={domain} tick={{ fontSize: 10, fill: "var(--color-fg-subtle)" }} axisLine={false} tickLine={false} width={56} tickFormatter={(v) => v.toFixed(2)} />
            <Tooltip
              formatter={(v) => [v === undefined ? "" : Number(v).toFixed(2), "Price"]}
              labelFormatter={(v) => format(new Date(v), "h:mm:ss a")}
              contentStyle={{ borderRadius: 10, borderColor: "var(--color-border)", fontSize: 12 }}
            />
            <ReferenceLine y={trade.entryPrice} stroke="var(--color-fg-subtle)" strokeDasharray="4 4" label={{ value: "Entry", position: "insideTopLeft", fontSize: 10, fill: "var(--color-fg-subtle)" }} />
            <ReferenceLine y={trade.stop} stroke="var(--color-loss)" strokeDasharray="3 3" label={{ value: "Stop", position: "insideBottomLeft", fontSize: 10, fill: "var(--color-loss)" }} />
            <ReferenceLine y={trade.target} stroke="var(--color-gain)" strokeDasharray="3 3" label={{ value: "Target", position: "insideTopLeft", fontSize: 10, fill: "var(--color-gain)" }} />
            <Area type="monotone" dataKey="price" stroke="none" fill="url(#priceFill)" isAnimationActive animationDuration={500} />
            <Line type="monotone" dataKey="price" stroke={win ? "var(--color-gain)" : "var(--color-loss)"} strokeWidth={2} dot={false} isAnimationActive animationDuration={500} />
            <ReferenceDot x={path[0].t} y={trade.entryPrice} r={4} fill="var(--color-fg)" stroke="var(--color-card)" strokeWidth={2} />
            <ReferenceDot x={path[path.length - 1].t} y={trade.exitPrice} r={5} fill={win ? "var(--color-gain)" : "var(--color-loss)"} stroke="var(--color-card)" strokeWidth={2} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="text-xs text-fg-subtle mt-1">
        Synthetic path illustrating entry, exit, stop, and target — {formatDuration(
          (new Date(trade.exitTime).getTime() - new Date(trade.entryTime).getTime()) / 60000
        )}{" "}
        hold.
      </div>
    </div>
  );
}
