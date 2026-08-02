"use client";

import { TradeTable } from "@/components/trades/TradeTable";
import { useFilteredTrades } from "@/lib/use-filtered-trades";

export function TradeLogContent() {
  const trades = useFilteredTrades();
  return <TradeTable trades={trades} />;
}
