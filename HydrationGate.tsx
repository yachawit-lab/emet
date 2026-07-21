"use client";

import { cn } from "@/lib/cn";

type Tone = "neutral" | "gain" | "loss" | "accent";

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const tones: Record<Tone, string> = {
    neutral: "bg-panel text-fg-muted border-border",
    gain: "bg-gain-soft text-gain border-transparent",
    loss: "bg-loss-soft text-loss border-transparent",
    accent: "bg-accent-soft text-accent-strong border-transparent",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

export function PnlGlyph({ value }: { value: number }) {
  if (value > 0.005) return <span aria-hidden>▲</span>;
  if (value < -0.005) return <span aria-hidden>▼</span>;
  return <span aria-hidden>–</span>;
}
