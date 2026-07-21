"use client";

import { GlobalFilterBar } from "@/components/layout/GlobalFilterBar";
import { HydrationGate } from "@/components/layout/HydrationGate";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { KpiSkeleton, ChartSkeleton } from "@/components/ui/Skeleton";

function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <KpiSkeleton key={i} />
        ))}
      </div>
      <ChartSkeleton height={280} />
      <ChartSkeleton height={140} />
      <div className="grid md:grid-cols-2 gap-6">
        <ChartSkeleton height={260} />
        <ChartSkeleton height={260} />
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1">
        <h1 className="font-display text-2xl tracking-tight">Dashboard</h1>
      </div>
      <p className="text-sm text-fg-muted mb-6">
        Monitor and evaluate your trading performance at a glance.
      </p>
      <GlobalFilterBar />
      <HydrationGate skeleton={<DashboardSkeleton />}>
        <DashboardContent />
      </HydrationGate>
    </div>
  );
}
