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
import { formatDuration } from "@/lib/format";

interface PricePoint {
  t: number; // epoch ms — a numeric time axis positions points by true elapsed time,
  // unlike a category axis, which spaces points evenly by index regardless of the actual
  // gaps between them (and can misplace points when timestamps aren't perfectly uniform).
  price: number;
}

export function TradePriceChart({ trade }: { trade: Trade }) {
  const isLong = trade.side === "long";
  const win = trade.exitPrice !== trade.entryPrice && (isLong ? trade.exitPrice > trade.entryPrice : trade.exitPrice < trade.entryPrice);

  const hasRealPath = !!trade.priceBars && trade.priceBars.length > 1;

  const entryMs = new Date(trade.entryTime).getTime();
  const exitMs = new Date(trade.exitTime).getTime();

  // Bars are fetched with a couple minutes of buffer before/after the trade (so MFE/MAE
  // aren't clipped at the window edge) — drop that padding for the chart and anchor the
  // first/last points to the trade's real entry/exit price, so the start/end dots always
  // land exactly on the line instead of floating off a buffer-bar's close price.
  const trimmedBars = hasRealPath
    ? trade
        .priceBars!.map((b) => ({ ms: new Date(b.t).getTime(), price: b.c }))
        .filter((b) => b.ms >= entryMs && b.ms <= exitMs)
    : [];

  const path: PricePoint[] = hasRealPath
    ? [
        { t: entryMs, price: trade.entryPrice },
        ...trimmedBars.map((b) => ({ t: b.ms, price: b.price })),
        { t: exitMs, price: trade.exitPrice },
      ]
    : [
        { t: entryMs, price: trade.entryPrice },
        { t: exitMs, price: trade.exitPrice },
      ];

  const prices = path.map((p) => p.price);
  const domainPad = (Math.max(...prices) - Math.min(...prices)) * 0.15 || 1;
  const domain: [number, number] = [
    Math.min(...prices, trade.stop) - domainPad,
    Math.max(...prices, trade.stop) + domainPad,
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
            <XAxis
              dataKey="t"
              type="number"
              domain={[path[0].t, path[path.length - 1].t]}
              tickFormatter={(v) => format(new Date(v), "h:mma")}
              tick={{ fontSize: 10, fill: "var(--color-fg-subtle)" }}
              axisLine={{ stroke: "var(--color-border)" }}
              tickLine={false}
              minTickGap={40}
            />
            <YAxis domain={domain} tick={{ fontSize: 10, fill: "var(--color-fg-subtle)" }} axisLine={false} tickLine={false} width={56} tickFormatter={(v) => v.toFixed(2)} />
            <Tooltip
              formatter={(v) => [v === undefined ? "" : Number(v).toFixed(2), "Price"]}
              labelFormatter={(v) => format(new Date(v as number), "h:mm:ss a")}
              contentStyle={{ borderRadius: 10, borderColor: "var(--color-border)", fontSize: 12 }}
            />
            <ReferenceLine y={trade.entryPrice} stroke="var(--color-fg-subtle)" strokeDasharray="4 4" label={{ value: "Entry", position: "insideTopLeft", fontSize: 10, fill: "var(--color-fg-subtle)" }} />
            <ReferenceLine y={trade.stop} stroke="var(--color-loss)" strokeDasharray="3 3" label={{ value: "Stop", position: "insideBottomLeft", fontSize: 10, fill: "var(--color-loss)" }} />
            <Area type="monotone" dataKey="price" stroke="none" fill="url(#priceFill)" isAnimationActive animationDuration={500} />
            <Line type="monotone" dataKey="price" stroke={win ? "var(--color-gain)" : "var(--color-loss)"} strokeWidth={2} dot={false} isAnimationActive animationDuration={500} />
            <ReferenceDot x={path[0].t} y={trade.entryPrice} r={4} fill="var(--color-fg)" stroke="var(--color-card)" strokeWidth={2} />
            <ReferenceDot x={path[path.length - 1].t} y={trade.exitPrice} r={5} fill={win ? "var(--color-gain)" : "var(--color-loss)"} stroke="var(--color-card)" strokeWidth={2} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="text-xs text-fg-subtle mt-1">
        {hasRealPath
          ? `Real M1 price path from MT5 — ${formatDuration((exitMs - entryMs) / 60000)} hold.`
          : "No intraday price data attached — showing entry/exit only. Run scripts/backfill_mfe_mae.py (or Import from Exness in Trade Log) to pull the real path from MT5."}
      </div>
    </div>
  );
}
