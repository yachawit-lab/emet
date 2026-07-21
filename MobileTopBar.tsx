"use client";

import { cn } from "@/lib/cn";
import { Inbox } from "lucide-react";

export function EmptyState({
  title,
  message,
  icon,
  action,
  className,
}: {
  title: string;
  message?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center py-14 px-6",
        className
      )}
    >
      <div className="mb-3 text-fg-subtle">{icon ?? <Inbox size={28} strokeWidth={1.5} />}</div>
      <div className="font-display text-base text-fg mb-1">{title}</div>
      {message && <p className="text-sm text-fg-muted max-w-xs">{message}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
