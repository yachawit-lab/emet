"use client";

import Link from "next/link";
import { format } from "date-fns";
import { Drawer } from "@/components/ui/Drawer";
import { Badge, PnlGlyph } from "@/components/ui/Badge";
import { EnrichedTrade } from "@/lib/types";
import { useViewStore } from "@/store/view-store";
import { pnlValue, formatPnlValue, maskValue } from "@/lib/value-mode";
import { cn } from "@/lib/cn";

export function DayDrawer({
  date,
  trades,
  onClose,
}: {
  date: string | null;
  trades: EnrichedTrade[];
  onClose: () => void;
}) {
  const { valueMode, useGross, hidePnl } = useViewStore();
  const dayTrades = date ? trades.filter((t) => t.exitTime.slice(0, 10) === date) : [];
  const net = dayTrades.reduce((s, t) => s + t.d.netPnl, 0);

  return (
    <Drawer open={!!date} onClose={onClose} title={date ? format(new Date(date), "MMMM d, yyyy") : ""}>
      <div className="mb-4 flex items-center justify-between rounded-xl bg-panel px-4 py-3">
        <span className="text-sm text-fg-muted">{dayTrades.length} trades</span>
        <span className={cn("font-medium tabular-nums", net >= 0 ? "text-gain" : "text-loss")}>
          {hidePnl ? "•••" : formatPnlValue(net, "$", { sign: true })}
        </span>
      </div>
      <ul className="space-y-2">
        {dayTrades.map((t) => {
          const val = pnlValue(t, valueMode, useGross);
          return (
            <li key={t.id}>
              <Link
                href={`/trades/${t.id}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-border px-3.5 py-2.5 hover:bg-panel/60 transition-colors"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-medium text-sm">{t.symbol}</span>
                    <Badge tone="neutral" className="capitalize">{t.side}</Badge>
                  </div>
                  <div className="text-xs text-fg-subtle truncate">
                    {t.setup} · {format(new Date(t.exitTime), "h:mma")}
                  </div>
                </div>
                <div className={cn("flex items-center gap-1 text-sm font-medium tabular-nums shrink-0", val >= 0 ? "text-gain" : "text-loss")}>
                  <PnlGlyph value={val} />
                  {maskValue(formatPnlValue(val, valueMode, { sign: true }), hidePnl)}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </Drawer>
  );
}
