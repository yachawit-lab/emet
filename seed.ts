"use client";

import { useParams, useRouter } from "next/navigation";
import { HydrationGate } from "@/components/layout/HydrationGate";
import { TradeForm } from "@/components/trades/TradeForm";
import { ChartSkeleton } from "@/components/ui/Skeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { useTradeStore } from "@/store/trade-store";
import { FileQuestion } from "lucide-react";

function EditTradeContent() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const trade = useTradeStore((s) => s.trades.find((t) => t.id === params.id));

  if (!trade) {
    return (
      <EmptyState
        icon={<FileQuestion size={22} strokeWidth={1.75} />}
        title="Trade not found"
        message="It may have been deleted."
        action={<Button onClick={() => router.push("/trades")}>Back to trade log</Button>}
      />
    );
  }

  return <TradeForm existing={trade} />;
}

export default function EditTradePage() {
  return (
    <div>
      <h1 className="font-display text-2xl tracking-tight mb-1">Edit trade</h1>
      <p className="text-sm text-fg-muted mb-6">Update any field — every screen recalculates live.</p>
      <HydrationGate skeleton={<ChartSkeleton height={420} />}>
        <EditTradeContent />
      </HydrationGate>
    </div>
  );
}
