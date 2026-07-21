"use client";

import Link from "next/link";
import { format } from "date-fns";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge, PnlGlyph } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { EnrichedTrade } from "@/lib/types";
import { useViewStore } from "@/store/view-store";
import { pnlValue, formatPnlValue, maskValue } from "@/lib/value-mode";
import { cn } from "@/lib/cn";
import { Inbox } from "lucide-react";

export function RecentTradesList({ trades }: { trades: EnrichedTrade[] }) {
  const { valueMode, useGross, hidePnl } = useViewStore();
  const recent = [...trades]
    .sort((a, b) => new Date(b.exitTime).getTime() - new Date(a.exitTime).getTime())
    .slice(0, 8);

  return (
    <Card padded={false}>
      <div className="p-6 pb-0">
        <CardHeader
          title="Recent trades"
          action={
            <Link href="/trades" className="text-xs font-medium text-accent-strong hover:underline">
              View all
            </Link>
          }
        />
      </div>
      {recent.length === 0 ? (
        <EmptyState
          icon={<Inbox size={22} strokeWidth={1.75} />}
          title="No trades yet"
          message="Log your first trade to see it here."
        />
      ) : (
        <ul className="divide-y divide-border">
          {recent.map((t) => {
            const val = pnlValue(t, valueMode, useGross);
            return (
              <li key={t.id}>
                <Link
                  href={`/trades/${t.id}`}
                  className="flex items-center justify-between gap-3 px-6 py-3 hover:bg-panel/60 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                        t.side === "long" ? "bg-gain-soft text-gain" : "bg-loss-soft text-loss"
                      )}
                    >
                      {t.symbol.slice(0, 2)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-medium text-sm text-fg">{t.symbol}</span>
                        <Badge tone="neutral" className="capitalize">{t.side}</Badge>
                      </div>
                      <div className="text-xs text-fg-subtle truncate">
                        {t.setup} · {format(new Date(t.exitTime), "MMM d, h:mma")}
                      </div>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium tabular-nums shrink-0",
                      val >= 0 ? "text-gain" : "text-loss"
                    )}
                  >
                    <PnlGlyph value={val} />
                    {maskValue(formatPnlValue(val, valueMode, { sign: true }), hidePnl)}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </Card>
  );
}
