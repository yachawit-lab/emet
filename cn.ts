"use client";

import { GlobalFilterBar } from "@/components/layout/GlobalFilterBar";
import { HydrationGate } from "@/components/layout/HydrationGate";
import { AnalyticsContent } from "@/components/analytics/AnalyticsContent";
import { ChartSkeleton } from "@/components/ui/Skeleton";

export default function AnalyticsPage() {
  return (
    <div>
      <h1 className="font-display text-2xl tracking-tight mb-1">Analytics</h1>
      <p className="text-sm text-fg-muted mb-6">Deeper patterns in when, how, and why you win or lose.</p>
      <GlobalFilterBar />
      <HydrationGate skeleton={<ChartSkeleton height={480} />}>
        <AnalyticsContent />
      </HydrationGate>
    </div>
  );
}
