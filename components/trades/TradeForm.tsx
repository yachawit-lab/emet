"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea } from "@/components/ui/Input";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { Badge, PnlGlyph } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import {
  ACCOUNTS,
  ALL_TAGS,
  Emotion,
  Grade,
  MISTAKE_TAGS,
  QUALITY_TAGS,
  SETUPS,
  SYMBOLS,
  Trade,
} from "@/lib/types";
import { deriveTrade } from "@/lib/derive";
import { formatCurrency, formatR } from "@/lib/format";
import { useTradeStore } from "@/store/trade-store";

const EMOTIONS: Emotion[] = ["Calm", "Confident", "Neutral", "Anxious", "Frustrated", "Excited"];
const GRADES: Grade[] = ["A+", "A", "B", "C"];

function toLocalInput(iso: string): string {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function fromLocalInput(v: string): string {
  return new Date(v).toISOString();
}

type Draft = Omit<Trade, "id" | "isSeed" | "createdAt" | "updatedAt">;

function emptyDraft(): Draft {
  const now = new Date();
  return {
    symbol: "AAPL",
    side: "long",
    qty: 100,
    entryPrice: 100,
    exitPrice: 100,
    entryTime: now.toISOString(),
    exitTime: now.toISOString(),
    fees: 1,
    stop: 99,
    target: 103,
    mfe: 0,
    mae: 0,
    setup: SETUPS[0],
    tags: [],
    grade: "B",
    emotion: "Neutral",
    confidence: 3,
    followedPlan: true,
    thesis: "",
    review: { right: "", wrong: "", thesisCorrect: true, oneChange: "" },
    account: "Main",
  };
}

export function TradeForm({ existing }: { existing?: Trade }) {
  const router = useRouter();
  const { addTrade, updateTrade } = useTradeStore();
  const [draft, setDraft] = useState<Draft>(() =>
    existing
      ? {
          symbol: existing.symbol,
          side: existing.side,
          qty: existing.qty,
          entryPrice: existing.entryPrice,
          exitPrice: existing.exitPrice,
          entryTime: existing.entryTime,
          exitTime: existing.exitTime,
          fees: existing.fees,
          stop: existing.stop,
          target: existing.target,
          mfe: existing.mfe,
          mae: existing.mae,
          setup: existing.setup,
          tags: existing.tags,
          grade: existing.grade,
          emotion: existing.emotion,
          confidence: existing.confidence,
          followedPlan: existing.followedPlan,
          thesis: existing.thesis,
          review: existing.review,
          account: existing.account,
        }
      : emptyDraft()
  );

  function set<K extends keyof Draft>(key: K, value: Draft[K]) {
    setDraft((d) => ({ ...d, [key]: value }));
  }
  function setReview<K extends keyof Draft["review"]>(key: K, value: Draft["review"][K]) {
    setDraft((d) => ({ ...d, review: { ...d.review, [key]: value } }));
  }
  function toggleTag(tag: string) {
    setDraft((d) => ({
      ...d,
      tags: d.tags.includes(tag) ? d.tags.filter((t) => t !== tag) : [...d.tags, tag],
    }));
  }

  const preview = useMemo(
    () =>
      deriveTrade({
        ...draft,
        id: "preview",
        isSeed: false,
        createdAt: "",
        updatedAt: "",
      }),
    [draft]
  );

  const canSubmit = draft.symbol && draft.qty > 0 && draft.entryPrice > 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    if (existing) {
      updateTrade(existing.id, draft);
      router.push(`/trades/${existing.id}`);
    } else {
      const id = addTrade(draft);
      router.push(`/trades/${id}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader title="Mechanical" subtitle="What actually happened" />
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Symbol">
              <Input
                list="symbols"
                value={draft.symbol}
                onChange={(e) => set("symbol", e.target.value.toUpperCase())}
                required
              />
              <datalist id="symbols">
                {SYMBOLS.map((s) => (
                  <option key={s} value={s} />
                ))}
              </datalist>
            </Field>
            <Field label="Side">
              <SegmentedControl
                options={[
                  { value: "long", label: "Long" },
                  { value: "short", label: "Short" },
                ]}
                value={draft.side}
                onChange={(v) => set("side", v)}
              />
            </Field>
            <Field label="Quantity">
              <Input
                type="number"
                min={1}
                value={draft.qty}
                onChange={(e) => set("qty", Number(e.target.value))}
                required
              />
            </Field>
            <Field label="Account">
              <Select value={draft.account} onChange={(e) => set("account", e.target.value as Draft["account"])}>
                {ACCOUNTS.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </Select>
            </Field>
            <Field label="Entry price">
              <Input
                type="number"
                step="0.01"
                value={draft.entryPrice}
                onChange={(e) => set("entryPrice", Number(e.target.value))}
                required
              />
            </Field>
            <Field label="Exit price">
              <Input
                type="number"
                step="0.01"
                value={draft.exitPrice}
                onChange={(e) => set("exitPrice", Number(e.target.value))}
                required
              />
            </Field>
            <Field label="Entry time">
              <Input
                type="datetime-local"
                value={toLocalInput(draft.entryTime)}
                onChange={(e) => set("entryTime", fromLocalInput(e.target.value))}
              />
            </Field>
            <Field label="Exit time">
              <Input
                type="datetime-local"
                value={toLocalInput(draft.exitTime)}
                onChange={(e) => set("exitTime", fromLocalInput(e.target.value))}
              />
            </Field>
            <Field label="Fees" hint="Round-trip commissions">
              <Input
                type="number"
                step="0.01"
                value={draft.fees}
                onChange={(e) => set("fees", Number(e.target.value))}
              />
            </Field>
            <Field label="Setup">
              <Select value={draft.setup} onChange={(e) => set("setup", e.target.value)}>
                {SETUPS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </Select>
            </Field>
          </div>
        </Card>

        <Card>
          <CardHeader title="Risk" subtitle="Your plan before the trade" />
          <div className="grid sm:grid-cols-3 gap-4">
            <Field label="Stop">
              <Input type="number" step="0.01" value={draft.stop} onChange={(e) => set("stop", Number(e.target.value))} />
            </Field>
            <Field label="Target">
              <Input type="number" step="0.01" value={draft.target} onChange={(e) => set("target", Number(e.target.value))} />
            </Field>
            <div className="hidden sm:block" />
            <Field label="MFE (per share)" hint="Best price move in your favor">
              <Input type="number" step="0.01" value={draft.mfe} onChange={(e) => set("mfe", Number(e.target.value))} />
            </Field>
            <Field label="MAE (per share)" hint="Worst price move against you">
              <Input type="number" step="0.01" value={draft.mae} onChange={(e) => set("mae", Number(e.target.value))} />
            </Field>
          </div>
        </Card>

        <Card>
          <CardHeader title="Reflection" subtitle="Quick-pickers plus notes" />
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <Field label="Grade">
              <SegmentedControl options={GRADES.map((g) => ({ value: g, label: g }))} value={draft.grade} onChange={(v) => set("grade", v)} />
            </Field>
            <Field label="Confidence">
              <SegmentedControl
                options={[1, 2, 3, 4, 5].map((n) => ({ value: String(n), label: String(n) }))}
                value={String(draft.confidence)}
                onChange={(v) => set("confidence", Number(v) as Draft["confidence"])}
              />
            </Field>
            <Field label="Emotion">
              <Select value={draft.emotion} onChange={(e) => set("emotion", e.target.value as Emotion)}>
                {EMOTIONS.map((em) => (
                  <option key={em} value={em}>{em}</option>
                ))}
              </Select>
            </Field>
            <Field label="Followed plan?">
              <SegmentedControl
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
                value={draft.followedPlan ? "yes" : "no"}
                onChange={(v) => set("followedPlan", v === "yes")}
              />
            </Field>
          </div>
          <Field label="Tags" className="mb-4">
            <div className="flex flex-wrap gap-1.5">
              {ALL_TAGS.map((tag) => {
                const selected = draft.tags.includes(tag);
                const isMistake = (MISTAKE_TAGS as readonly string[]).includes(tag);
                const isQuality = (QUALITY_TAGS as readonly string[]).includes(tag);
                return (
                  <button
                    type="button"
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={cn(
                      "rounded-full border px-2.5 py-1 text-xs font-medium transition-colors",
                      selected
                        ? isMistake
                          ? "border-loss bg-loss-soft text-loss"
                          : isQuality
                            ? "border-gain bg-gain-soft text-gain"
                            : "border-accent bg-accent-soft text-accent-strong"
                        : "border-border bg-card text-fg-muted hover:text-fg"
                    )}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </Field>
          <Field label="Thesis" className="mb-4">
            <Textarea rows={2} value={draft.thesis} onChange={(e) => set("thesis", e.target.value)} placeholder="What was the plan going in?" />
          </Field>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="What you did right">
              <Textarea rows={2} value={draft.review.right} onChange={(e) => setReview("right", e.target.value)} />
            </Field>
            <Field label="What you did wrong">
              <Textarea rows={2} value={draft.review.wrong} onChange={(e) => setReview("wrong", e.target.value)} />
            </Field>
          </div>
          <Field label="One change for next time" className="mt-4">
            <Textarea rows={2} value={draft.review.oneChange} onChange={(e) => setReview("oneChange", e.target.value)} />
          </Field>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="sticky top-24">
          <CardHeader title="Live preview" />
          <div className="space-y-4">
            <div>
              <div className="text-xs text-fg-muted mb-1">Net P&L</div>
              <div
                className={cn(
                  "font-display text-3xl tabular-nums flex items-center gap-1.5",
                  preview.netPnl >= 0 ? "text-gain" : "text-loss"
                )}
              >
                <PnlGlyph value={preview.netPnl} />
                {formatCurrency(preview.netPnl, { sign: true })}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-xs text-fg-muted">R-multiple</div>
                <div className="font-medium tabular-nums">{formatR(preview.rMultiple, { sign: true })}</div>
              </div>
              <div>
                <div className="text-xs text-fg-muted">Gross P&L</div>
                <div className="font-medium tabular-nums">{formatCurrency(preview.grossPnl, { sign: true })}</div>
              </div>
              <div>
                <div className="text-xs text-fg-muted">Initial risk</div>
                <div className="font-medium tabular-nums">{formatCurrency(preview.initialRisk)}</div>
              </div>
              <div>
                <div className="text-xs text-fg-muted">Planned R:R</div>
                <div className="font-medium tabular-nums">{preview.plannedRR ? `${preview.plannedRR.toFixed(2)}` : "—"}</div>
              </div>
            </div>
            <Badge tone={preview.outcome === "win" ? "gain" : preview.outcome === "loss" ? "loss" : "neutral"}>
              {preview.outcome}
            </Badge>
          </div>
          <div className="mt-6 flex flex-col gap-2">
            <Button type="submit" variant="primary" disabled={!canSubmit}>
              {existing ? "Save changes" : "Log trade"}
            </Button>
            <Button type="button" variant="ghost" onClick={() => router.back()}>
              Cancel
            </Button>
          </div>
        </Card>
      </div>
    </form>
  );
}
