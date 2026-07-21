"use client";

import { TagStat } from "@/lib/aggregations";
import { formatCurrency, formatPercent, formatR } from "@/lib/format";
import { useViewStore } from "@/store/view-store";
import { useFilterStore } from "@/store/filter-store";
import { cn } from "@/lib/cn";

export function TagLeaderboard({ tags }: { tags: TagStat[] }) {
  const { hidePnl } = useViewStore();
  const { toggleTag } = useFilterStore();
  const profitable = [...tags].filter((t) => t.netPnl >= 0).sort((a, b) => b.netPnl - a.netPnl).slice(0, 6);
  const costly = [...tags].filter((t) => t.netPnl < 0).sort((a, b) => a.netPnl - b.netPnl).slice(0, 6);

  function Row({ t }: { t: TagStat }) {
    return (
      <button
        onClick={() => toggleTag(t.tag)}
        className="flex w-full items-center justify-between gap-3 rounded-lg px-2.5 py-2 hover:bg-panel transition-colors text-left"
      >
        <div className="min-w-0">
          <div className="text-sm font-medium text-fg truncate">{t.tag}</div>
          <div className="text-xs text-fg-subtle">
            {t.count} trades · {formatPercent(t.winRate * 100, { digits: 0 })} win · {formatR(t.avgR, { sign: true })} avg
          </div>
        </div>
        <div className={cn("text-sm font-medium tabular-nums shrink-0", t.netPnl >= 0 ? "text-gain" : "text-loss")}>
          {hidePnl ? "•••" : formatCurrency(t.netPnl, { sign: true })}
        </div>
      </button>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <div>
        <div className="text-xs font-medium text-gain uppercase tracking-wide mb-2 px-2.5">Most profitable</div>
        <div className="space-y-0.5">
          {profitable.length === 0 ? (
            <p className="text-sm text-fg-subtle px-2.5">No profitable tags yet.</p>
          ) : (
            profitable.map((t) => <Row key={t.tag} t={t} />)
          )}
        </div>
      </div>
      <div>
        <div className="text-xs font-medium text-loss uppercase tracking-wide mb-2 px-2.5">Most costly</div>
        <div className="space-y-0.5">
          {costly.length === 0 ? (
            <p className="text-sm text-fg-subtle px-2.5">No costly tags yet.</p>
          ) : (
            costly.map((t) => <Row key={t.tag} t={t} />)
          )}
        </div>
      </div>
    </div>
  );
}
