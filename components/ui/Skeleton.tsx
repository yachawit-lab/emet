"use client";

import { cn } from "@/lib/cn";

export function Skeleton({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn("animate-pulse rounded-lg bg-panel", className)}
      style={style}
      aria-hidden
    />
  );
}

export function KpiSkeleton() {
  return (
    <div className="rounded-2xl bg-card border border-border p-6 space-y-3">
      <Skeleton className="h-3 w-20" />
      <Skeleton className="h-8 w-28" />
      <Skeleton className="h-3 w-16" />
    </div>
  );
}

export function ChartSkeleton({ height = 280 }: { height?: number }) {
  return (
    <div className="rounded-2xl bg-card border border-border p-6">
      <Skeleton className="h-4 w-40 mb-4" />
      <Skeleton style={{ height }} className="w-full" />
    </div>
  );
}
