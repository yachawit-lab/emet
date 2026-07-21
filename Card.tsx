"use client";

import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { TradeTable } from "@/components/trades/TradeTable";
import { useFilteredTrades } from "@/lib/use-filtered-trades";
import { Rows3 } from "lucide-react";

export function TradeLogContent() {
  const trades = useFilteredTrades();

  if (trades.length === 0) {
    return (
      <Card>
        <EmptyState
          icon={<Rows3 size={22} strokeWidth={1.75} />}
          title="No trades match these filters"
          message="Try widening the date range or clearing a filter."
        />
      </Card>
    );
  }

  return <TradeTable trades={trades} />;
}
