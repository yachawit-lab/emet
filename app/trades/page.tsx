"use client";

import { GlobalFilterBar } from "@/components/layout/GlobalFilterBar";
import { HydrationGate } from "@/components/layout/HydrationGate";
import { TradeLogContent } from "@/components/trades/TradeLogContent";
import { ChartSkeleton } from "@/components/ui/Skeleton";

export default function TradesPage() {
  return (
    <div>
      <h1 className="font-display text-2xl tracking-tight mb-1">Trade Log</h1>
      <p className="text-sm text-fg-muted mb-6">
        Every trade, sortable and searchable. Click a row for the full breakdown.
      </p>
      <GlobalFilterBar showViewToggles={false} />
      <HydrationGate skeleton={<ChartSkeleton height={420} />}>
        <TradeLogContent />
      </HydrationGate>
    </div>
  );
}
