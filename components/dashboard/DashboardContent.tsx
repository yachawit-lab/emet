"use client";

import { useMemo } from "react";
import { Card, CardHeader } from "@/components/ui/Card";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { InsightsCard } from "@/components/dashboard/InsightsCard";
import { RecentTradesList } from "@/components/dashboard/RecentTradesList";
import { EquityCurveChart, DrawdownStrip } from "@/components/charts/EquityCurve";
import { YearHeatmap } from "@/components/charts/CalendarHeatmap";
import { BreakdownBars } from "@/components/charts/BreakdownBars";
import { RMultipleHistogram } from "@/components/charts/RMultipleHistogram";
import { WinLossDonut } from "@/components/charts/WinLossDonut";
import { EmptyState } from "@/components/ui/EmptyState";
import { useFilteredTrades, usePreviousPeriodTrades } from "@/lib/use-filtered-trades";
import { computeMetrics } from "@/lib/metrics";
import { equityCurve, dailyPnl, rMultipleHistogram } from "@/lib/aggregations";
import { generateInsights } from "@/lib/insights";
import {
  formatCurrency,
  formatCurrencyCompact,
  formatPercent,
  formatR,
  formatDuration,
} from "@/lib/format";
import { useViewStore } from "@/store/view-store";
import { TrendingUp } from "lucide-react";

export function DashboardContent() {
  const trades = useFilteredTrades();
  const prevTrades = usePreviousPeriodTrades();
  const { useGross } = useViewStore();

  const metrics = useMemo(() => computeMetrics(trades), [trades]);
  const prevMetrics = useMemo(
    () => (prevTrades.length > 0 ? computeMetrics(prevTrades) : null),
    [prevTrades]
  );
  const equity = useMemo(() => equityCurve(trades), [trades]);
  const daily = useMemo(() => dailyPnl(trades), [trades]);
  const histogram = useMemo(() => rMultipleHistogram(trades), [trades]);
  const insights = useMemo(() => generateInsights(trades), [trades]);

  const netForMode = useGross ? metrics.grossPnl : metrics.netPnl;
  const prevNetForMode = prevMetrics ? (useGross ? prevMetrics.grossPnl : prevMetrics.netPnl) : undefined;

  const equitySparkline = equity.map((p) => p.equity);

  if (trades.length === 0) {
    return (
      <Card>
        <EmptyState
          icon={<TrendingUp size={22} strokeWidth={1.75} />}
          title="No trades match these filters"
          message="Try widening the date range or clearing a filter to see performance data."
        />
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard
          label="Net P&L"
          value={netForMode}
          format={(v) => formatCurrency(v, { sign: true })}
          delta={prevNetForMode !== undefined ? netForMode - prevNetForMode : undefined}
          deltaFormat={(v) => formatCurrencyCompact(v)}
          sparkline={equitySparkline}
        />
        <KpiCard
          label="Win Rate"
          value={metrics.winRate * 100}
          format={(v) => formatPercent(v, { digits: 0 })}
          delta={prevMetrics ? (metrics.winRate - prevMetrics.winRate) * 100 : undefined}
          deltaFormat={(v) => formatPercent(v, { digits: 0 })}
          tone="neutral"
        />
        <KpiCard
          label="Profit Factor"
          value={metrics.profitFactor ?? 0}
          format={(v) => (metrics.profitFactor === null ? "—" : v.toFixed(2))}
          tone={metrics.profitFactor === null ? "neutral" : metrics.profitFactor >= 1 ? "gain" : "loss"}
          hint={
            metrics.profitFactor === null
              ? "No losses yet"
              : metrics.profitFactor >= 2
                ? "Excellent"
                : metrics.profitFactor >= 1.5
                  ? "Solid"
                  : metrics.profitFactor >= 1
                    ? "Marginal"
                    : "Losing"
          }
        />
        <KpiCard
          label="Expectancy"
          value={metrics.expectancy}
          format={(v) => formatR(v, { sign: true })}
          tone={metrics.expectancy >= 0 ? "gain" : "loss"}
          hint="mean R per trade"
        />
        <KpiCard
          label="Avg Win / Avg Loss"
          value={metrics.payoffRatio ?? 0}
          format={(v) => (metrics.payoffRatio === null ? "—" : `${v.toFixed(2)}×`)}
          tone="neutral"
          hint={`${formatCurrency(metrics.avgWin, { sign: true })} / ${formatCurrency(metrics.avgLoss, { sign: true })}`}
        />
        <KpiCard
          label="Max Drawdown"
          value={metrics.maxDrawdown}
          format={(v) => formatCurrency(v)}
          tone="loss"
          hint={`${formatPercent(metrics.maxDrawdownPct)} from peak`}
        />
        <KpiCard
          label="Sharpe (ann.)"
          value={metrics.sharpe ?? 0}
          format={(v) => (metrics.sharpe === null ? "—" : v.toFixed(2))}
          tone="neutral"
        />
        <KpiCard
          label="Execution Score"
          value={metrics.executionScore}
          format={(v) => v.toFixed(0)}
          tone={metrics.executionScore >= 70 ? "gain" : metrics.executionScore >= 50 ? "neutral" : "loss"}
          hint={`${formatPercent(metrics.adherenceRate * 100, { digits: 0 })} plan adherence`}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KpiCard
          label="Recovery Factor"
          value={metrics.recoveryFactor ?? 0}
          format={(v) => (metrics.recoveryFactor === null ? "—" : v.toFixed(2))}
          tone="neutral"
          hint="net P&L ÷ max drawdown"
        />
        <KpiCard
          label="Best / Worst Trade"
          value={metrics.largestWin}
          format={(v) => formatCurrency(v, { sign: true })}
          tone="gain"
          hint={`Worst: ${formatCurrency(metrics.largestLoss, { sign: true })}`}
        />
        <KpiCard
          label="Win / Loss Streak"
          value={metrics.longestWinStreak}
          format={(v) => `${v.toFixed(0)}W`}
          tone="neutral"
          hint={`Max loss streak: ${metrics.longestLossStreak}L`}
        />
        <KpiCard
          label="Total Fees"
          value={metrics.totalFees}
          format={(v) => formatCurrency(v)}
          tone="neutral"
          hint="commissions + swap"
        />
      </div>

      <Card>
        <CardHeader
          title="Equity curve"
          subtitle={`${trades.length} trades · ${formatDuration(metrics.avgHoldMin)} avg hold`}
        />
        <EquityCurveChart data={equity} />
        <DrawdownStrip data={equity} />
      </Card>

      <Card>
        <CardHeader title="Daily P&L" subtitle="Last 12 months" />
        <YearHeatmap daily={daily} />
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="Performance breakdown" subtitle="Click a bar to filter" />
          <BreakdownBars trades={trades} />
        </Card>
        <Card>
          <CardHeader title="R-multiple distribution" />
          <RMultipleHistogram bins={histogram} />
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="Win / loss" />
          <WinLossDonut metrics={metrics} />
        </Card>
        <InsightsCard insights={insights} />
      </div>

      <RecentTradesList trades={trades} />
    </div>
  );
}
