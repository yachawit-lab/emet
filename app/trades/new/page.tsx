"use client";

import { HydrationGate } from "@/components/layout/HydrationGate";
import { TradeForm } from "@/components/trades/TradeForm";
import { ChartSkeleton } from "@/components/ui/Skeleton";

export default function NewTradePage() {
  return (
    <div>
      <h1 className="font-display text-2xl tracking-tight mb-1">Log a trade</h1>
      <p className="text-sm text-fg-muted mb-6">
        Fill in what actually happened — the preview updates as you type.
      </p>
      <HydrationGate skeleton={<ChartSkeleton height={420} />}>
        <TradeForm />
      </HydrationGate>
    </div>
  );
}
