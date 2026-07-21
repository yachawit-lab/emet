"use client";

import { useMemo } from "react";
import { Card, CardHeader } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { WeekdayHourHeatmap } from "@/components/analytics/WeekdayHourHeatmap";
import { MaeScatterChart } from "@/components/analytics/MaeScatterChart";
import { ProcessVsProfitChart } from "@/components/analytics/ProcessVsProfitChart";
import { RollingMetricsChart } from "@/components/analytics/RollingMetricsChart";
import { TagLeaderboard } from "@/components/analytics/TagLeaderboard";
import { useFilteredTrades } from "@/lib/use-filtered-trades";
import {
  weekdayHourHeatmap,
  maeScatter,
  processVsProfit,
  rollingMetrics,
  tagLeaderboard,
} from "@/lib/aggregations";
import { BarChart3 } from "lucide-react";

const ROLLING_WINDOW = 20;

export function AnalyticsContent() {
  const trades = useFilteredTrades();

  const heatmapCells = useMemo(() => weekdayHourHeatmap(trades), [trades]);
  const scatter = useMemo(() => maeScatter(trades), [trades]);
  const process = useMemo(() => processVsProfit(trades), [trades]);
  const rolling = useMemo(() => rollingMetrics(trades, ROLLING_WINDOW), [trades]);
  const tags = useMemo(() => tagLeaderboard(trades), [trades]);

  if (trades.length === 0) {
    return (
      <Card>
        <EmptyState
          icon={<BarChart3 size={22} strokeWidth={1.75} />}
          title="No trades match these filters"
          message="Try widening the date range or clearing a filter."
        />
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader title="Weekday × hour performance" subtitle="Where your edge is strongest and weakest" />
        <WeekdayHourHeatmap cells={heatmapCells} />
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="MAE vs. result" subtitle="Adverse excursion against realized R — click a point" />
          <MaeScatterChart points={scatter} />
        </Card>
        <Card>
          <CardHeader title="Process vs. profit" subtitle="Money curve alongside your execution score" />
          <ProcessVsProfitChart data={process} />
        </Card>
      </div>

      <Card>
        <CardHeader title="Rolling metrics" subtitle={`Trailing ${ROLLING_WINDOW}-trade window`} />
        <RollingMetricsChart data={rolling} window={ROLLING_WINDOW} />
      </Card>

      <Card>
        <CardHeader title="Tag leaderboard" subtitle="Click a tag to filter by it" />
        <TagLeaderboard tags={tags} />
      </Card>
    </div>
  );
}
