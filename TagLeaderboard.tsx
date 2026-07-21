"use client";

import { Sparkles } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/Card";
import { Insight } from "@/lib/insights";
import { cn } from "@/lib/cn";

export function InsightsCard({ insights }: { insights: Insight[] }) {
  return (
    <Card>
      <CardHeader
        title="Insights"
        subtitle="Plain-English patterns found in the current selection"
        action={
          <div className="rounded-full bg-accent-soft p-2 text-accent-strong">
            <Sparkles size={15} />
          </div>
        }
      />
      <ul className="space-y-3">
        {insights.map((insight) => (
          <li key={insight.id} className="flex gap-3 text-sm">
            <span
              className={cn(
                "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                insight.tone === "positive" && "bg-gain",
                insight.tone === "negative" && "bg-loss",
                insight.tone === "neutral" && "bg-fg-subtle"
              )}
            />
            <span className="text-fg-muted leading-relaxed">{insight.text}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
