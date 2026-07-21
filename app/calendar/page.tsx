"use client";

import { GlobalFilterBar } from "@/components/layout/GlobalFilterBar";
import { HydrationGate } from "@/components/layout/HydrationGate";
import { CalendarContent } from "@/components/calendar/CalendarContent";
import { ChartSkeleton } from "@/components/ui/Skeleton";

export default function CalendarPage() {
  return (
    <div>
      <h1 className="font-display text-2xl tracking-tight mb-1">Calendar</h1>
      <p className="text-sm text-fg-muted mb-6">P&L by day, week, and year.</p>
      <GlobalFilterBar showViewToggles={false} />
      <HydrationGate skeleton={<ChartSkeleton height={480} />}>
        <CalendarContent />
      </HydrationGate>
    </div>
  );
}
