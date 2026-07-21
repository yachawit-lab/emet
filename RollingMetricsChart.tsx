"use client";

import { useMemo, useState } from "react";
import { addMonths, format, subMonths } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { MonthView } from "@/components/calendar/MonthView";
import { WeeklySummary } from "@/components/calendar/WeeklySummary";
import { DayDrawer } from "@/components/calendar/DayDrawer";
import { YearHeatmap } from "@/components/charts/CalendarHeatmap";
import { useFilteredTrades } from "@/lib/use-filtered-trades";
import { dailyPnl } from "@/lib/aggregations";
import { useViewStore } from "@/store/view-store";
import { cn } from "@/lib/cn";

type View = "month" | "year";

export function CalendarContent() {
  const trades = useFilteredTrades();
  const { hidePnl, setHidePnl, useGross, setUseGross } = useViewStore();
  const [view, setView] = useState<View>("month");
  const [month, setMonth] = useState(() => new Date());
  const [weekStartsOn, setWeekStartsOn] = useState<0 | 1>(0);
  const [hideWeekends, setHideWeekends] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const daily = useMemo(() => dailyPnl(trades), [trades]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <SegmentedControl
          size="sm"
          options={[
            { value: "month", label: "Month" },
            { value: "year", label: "Year" },
          ]}
          value={view}
          onChange={(v) => setView(v as View)}
        />
        <div className="flex flex-wrap items-center gap-2">
          <SegmentedControl
            size="sm"
            options={[
              { value: "net", label: "Net" },
              { value: "gross", label: "Gross" },
            ]}
            value={useGross ? "gross" : "net"}
            onChange={(v) => setUseGross(v === "gross")}
          />
          <SegmentedControl
            size="sm"
            options={[
              { value: "0", label: "Sun start" },
              { value: "1", label: "Mon start" },
            ]}
            value={String(weekStartsOn)}
            onChange={(v) => setWeekStartsOn(Number(v) as 0 | 1)}
          />
          <button
            onClick={() => setHideWeekends((v) => !v)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              hideWeekends ? "border-accent bg-accent-soft text-accent-strong" : "border-border bg-card text-fg-muted hover:text-fg"
            )}
          >
            Hide weekends
          </button>
          <button
            onClick={() => setHidePnl(!hidePnl)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              hidePnl ? "border-accent bg-accent-soft text-accent-strong" : "border-border bg-card text-fg-muted hover:text-fg"
            )}
          >
            {hidePnl ? "Show P&L" : "Hide P&L"}
          </button>
        </div>
      </div>

      {view === "month" ? (
        <div className="grid lg:grid-cols-[1fr_280px] gap-6">
          <Card>
            <CardHeader
              title={format(month, "MMMM yyyy")}
              action={
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm" onClick={() => setMonth((m) => subMonths(m, 1))}>
                    <ChevronLeft size={16} />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setMonth(new Date())}>
                    Today
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setMonth((m) => addMonths(m, 1))}>
                    <ChevronRight size={16} />
                  </Button>
                </div>
              }
            />
            <MonthView
              month={month}
              daily={daily}
              weekStartsOn={weekStartsOn}
              hideWeekends={hideWeekends}
              onSelectDay={setSelectedDay}
            />
          </Card>
          <Card>
            <CardHeader title="Weekly summary" />
            <WeeklySummary month={month} daily={daily} weekStartsOn={weekStartsOn} />
          </Card>
        </div>
      ) : (
        <Card>
          <CardHeader title={format(new Date(), "yyyy")} subtitle="Trailing 12 months" />
          <YearHeatmap daily={daily} />
        </Card>
      )}

      <DayDrawer date={selectedDay} trades={trades} onClose={() => setSelectedDay(null)} />
    </div>
  );
}
