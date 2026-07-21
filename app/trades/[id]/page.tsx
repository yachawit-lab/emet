"use client";

import { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight, Pencil, Trash2, FileQuestion, ArrowLeft } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/Card";
import { Badge, PnlGlyph } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { HydrationGate } from "@/components/layout/HydrationGate";
import { ChartSkeleton } from "@/components/ui/Skeleton";
import { TradePriceChart } from "@/components/trades/TradePriceChart";
import { useTradeStore } from "@/store/trade-store";
import { enrich } from "@/lib/derive";
import { formatCurrency, formatDuration, formatPercent, formatR } from "@/lib/format";
import { cn } from "@/lib/cn";

function StatRow({ label, value, valueClass }: { label: string; value: React.ReactNode; valueClass?: string }) {
  return (
    <div className="flex items-center justify-between py-2 text-sm border-b border-border last:border-0">
      <span className="text-fg-muted">{label}</span>
      <span className={cn("font-medium tabular-nums", valueClass)}>{value}</span>
    </div>
  );
}

function TradeDetailContent() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const { trades, deleteTrade } = useTradeStore();

  const sorted = useMemo(
    () => [...trades].sort((a, b) => new Date(a.exitTime).getTime() - new Date(b.exitTime).getTime()),
    [trades]
  );
  const idx = sorted.findIndex((t) => t.id === params.id);
  const trade = idx >= 0 ? sorted[idx] : undefined;

  if (!trade) {
    return (
      <Card>
        <EmptyState
          icon={<FileQuestion size={22} strokeWidth={1.75} />}
          title="Trade not found"
          message="It may have been deleted."
          action={<Button onClick={() => router.push("/trades")}>Back to trade log</Button>}
        />
      </Card>
    );
  }

  const t = enrich(trade);
  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  function handleDelete() {
    if (confirm(`Delete this ${trade!.symbol} trade? This can't be undone.`)) {
      deleteTrade(trade!.id);
      router.push("/trades");
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Link href="/trades" className="inline-flex items-center gap-1 text-xs text-fg-muted hover:text-fg mb-2">
            <ArrowLeft size={13} /> Trade log
          </Link>
          <div className="flex items-center gap-2">
            <h1 className="font-display text-2xl tracking-tight">{t.symbol}</h1>
            <Badge tone="neutral" className="capitalize">{t.side}</Badge>
            <Badge tone={t.grade === "C" ? "loss" : t.grade.startsWith("A") ? "gain" : "neutral"}>{t.grade}</Badge>
          </div>
          <p className="text-sm text-fg-muted mt-1">
            {format(new Date(t.entryTime), "MMM d, yyyy · h:mma")} · {t.setup} · {t.account}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" disabled={!prev} onClick={() => prev && router.push(`/trades/${prev.id}`)}>
            <ChevronLeft size={15} /> Prev
          </Button>
          <Button variant="ghost" size="sm" disabled={!next} onClick={() => next && router.push(`/trades/${next.id}`)}>
            Next <ChevronRight size={15} />
          </Button>
          <Link href={`/trades/${t.id}/edit`}>
            <Button variant="secondary" size="sm"><Pencil size={14} /> Edit</Button>
          </Link>
          <Button variant="danger" size="sm" onClick={handleDelete}><Trash2 size={14} /></Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className={cn("rounded-2xl bg-card border border-border card-shadow p-6 lg:col-span-2 flex flex-col justify-center")}>
          <div className="text-xs text-fg-muted mb-1">Net P&L</div>
          <div className={cn("font-display text-4xl tabular-nums flex items-center gap-2", t.d.netPnl >= 0 ? "text-gain" : "text-loss")}>
            <PnlGlyph value={t.d.netPnl} />
            {formatCurrency(t.d.netPnl, { sign: true })}
          </div>
          <div className="text-sm text-fg-muted mt-1">
            {formatR(t.d.rMultiple, { sign: true })} · {formatPercent(t.d.returnPct, { sign: true })} return
          </div>
        </div>
        <Card className="flex flex-col justify-center">
          <div className="text-xs text-fg-muted mb-1">Outcome</div>
          <Badge tone={t.d.outcome === "win" ? "gain" : t.d.outcome === "loss" ? "loss" : "neutral"} className="w-fit text-sm px-3 py-1">
            {t.d.outcome}
          </Badge>
          <div className="text-xs text-fg-subtle mt-2">{formatDuration(t.d.durationMin)} hold time</div>
        </Card>
      </div>

      <Card>
        <CardHeader title="Price action" />
        <TradePriceChart trade={trade} />
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="Execution" />
          <StatRow label="Quantity" value={t.qty.toLocaleString()} />
          <StatRow label="Entry price" value={`$${t.entryPrice.toFixed(2)}`} />
          <StatRow label="Exit price" value={`$${t.exitPrice.toFixed(2)}`} />
          <StatRow label="Fees" value={formatCurrency(t.fees)} />
          <StatRow label="Gross P&L" value={formatCurrency(t.d.grossPnl, { sign: true })} valueClass={t.d.grossPnl >= 0 ? "text-gain" : "text-loss"} />
          <StatRow label="Followed plan" value={t.followedPlan ? "Yes" : "No"} valueClass={t.followedPlan ? "text-gain" : "text-loss"} />
        </Card>

        <Card>
          <CardHeader title="Risk & excursion" />
          <StatRow label="Initial risk" value={formatCurrency(t.d.initialRisk)} />
          <StatRow label="R-multiple" value={formatR(t.d.rMultiple, { sign: true })} />
          <StatRow label="MFE" value={`${formatR(t.d.mfeR)} (${t.mfe.toFixed(2)}/sh)`} />
          <StatRow label="MAE" value={`${formatR(t.d.maeR)} (${t.mae.toFixed(2)}/sh)`} />
          <StatRow
            label="Capture rate"
            value={t.d.captureRate !== null ? formatPercent(t.d.captureRate * 100) : "—"}
            valueClass="text-accent-strong"
          />
        </Card>
      </div>

      <Card>
        <CardHeader title="Plan vs. actual" />
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div />
          <div className="text-xs font-medium text-fg-muted uppercase tracking-wide text-center">Planned</div>
          <div className="text-xs font-medium text-fg-muted uppercase tracking-wide text-center">Actual</div>

          <div className="text-fg-muted py-2 border-t border-border">Stop</div>
          <div className="text-center py-2 border-t border-border tabular-nums">${t.stop.toFixed(2)}</div>
          <div className="text-center py-2 border-t border-border tabular-nums">${t.exitPrice.toFixed(2)}</div>

          <div className="text-fg-muted py-2 border-t border-border">Target</div>
          <div className="text-center py-2 border-t border-border tabular-nums">${t.target.toFixed(2)}</div>
          <div className="text-center py-2 border-t border-border tabular-nums">${t.exitPrice.toFixed(2)}</div>

          <div className="text-fg-muted py-2 border-t border-border">R:R</div>
          <div className="text-center py-2 border-t border-border tabular-nums">{t.d.plannedRR ? t.d.plannedRR.toFixed(2) : "—"}</div>
          <div className="text-center py-2 border-t border-border tabular-nums">{formatR(t.d.rMultiple, { sign: true })}</div>
        </div>
      </Card>

      <Card>
        <CardHeader title="Reflection" />
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge tone="accent">{t.emotion}</Badge>
          <Badge tone="neutral">Confidence {t.confidence}/5</Badge>
          {t.tags.map((tag) => (
            <Badge key={tag} tone="neutral">{tag}</Badge>
          ))}
        </div>
        {t.thesis && (
          <div className="mb-4">
            <div className="text-xs font-medium text-fg-muted uppercase tracking-wide mb-1">Thesis</div>
            <p className="text-sm text-fg leading-relaxed">{t.thesis}</p>
          </div>
        )}
        <div className="grid sm:grid-cols-2 gap-4">
          {t.review.right && (
            <div>
              <div className="text-xs font-medium text-gain uppercase tracking-wide mb-1">What went right</div>
              <p className="text-sm text-fg-muted leading-relaxed">{t.review.right}</p>
            </div>
          )}
          {t.review.wrong && (
            <div>
              <div className="text-xs font-medium text-loss uppercase tracking-wide mb-1">What went wrong</div>
              <p className="text-sm text-fg-muted leading-relaxed">{t.review.wrong}</p>
            </div>
          )}
        </div>
        {t.review.oneChange && (
          <div className="mt-4 rounded-xl bg-accent-soft px-4 py-3">
            <div className="text-xs font-medium text-accent-strong uppercase tracking-wide mb-1">One change for next time</div>
            <p className="text-sm text-accent-strong leading-relaxed">{t.review.oneChange}</p>
          </div>
        )}
      </Card>
    </div>
  );
}

export default function TradeDetailPage() {
  return (
    <HydrationGate skeleton={<ChartSkeleton height={520} />}>
      <TradeDetailContent />
    </HydrationGate>
  );
}
