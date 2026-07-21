"use client";

import { Line, LineChart, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/Card";
import { CountUp } from "@/components/ui/CountUp";
import { Badge, PnlGlyph } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import { useViewStore } from "@/store/view-store";

export function KpiCard({
  label,
  value,
  format,
  delta,
  deltaFormat,
  sparkline,
  tone,
  hint,
}: {
  label: string;
  value: number;
  format: (v: number) => string;
  delta?: number;
  deltaFormat?: (v: number) => string;
  sparkline?: number[];
  tone?: "gain" | "loss" | "neutral";
  hint?: string;
}) {
  const { hidePnl } = useViewStore();
  const resolvedTone = tone ?? (value > 0 ? "gain" : value < 0 ? "loss" : "neutral");

  return (
    <Card hoverLift className="relative overflow-hidden">
      <div className="flex items-start justify-between">
        <div className="text-xs font-medium text-fg-muted uppercase tracking-wide">
          {label}
        </div>
        {delta !== undefined && deltaFormat && (
          <Badge tone={delta >= 0 ? "gain" : "loss"}>
            <PnlGlyph value={delta} />
            {hidePnl ? "•••" : deltaFormat(Math.abs(delta))}
          </Badge>
        )}
      </div>
      <div
        className={cn(
          "font-display text-3xl mt-2 tabular-nums",
          resolvedTone === "gain" && "text-gain",
          resolvedTone === "loss" && "text-loss",
          resolvedTone === "neutral" && "text-fg"
        )}
      >
        {hidePnl ? "•••••" : <CountUp value={value} format={format} />}
      </div>
      {hint && <div className="text-xs text-fg-subtle mt-1">{hint}</div>}
      {sparkline && sparkline.length > 1 && (
        <div className="h-10 -mx-1 mt-3">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sparkline.map((v, i) => ({ i, v }))}>
              <Line
                type="monotone"
                dataKey="v"
                stroke={
                  resolvedTone === "loss" ? "var(--color-loss)" : "var(--color-accent)"
                }
                strokeWidth={1.75}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </Card>
  );
}
