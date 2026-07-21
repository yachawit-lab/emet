"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverLift?: boolean;
  padded?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverLift = false, padded = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl bg-card border border-border card-shadow",
        padded && "p-6",
        hoverLift &&
          "transition-all duration-200 hover:-translate-y-0.5 hover:card-shadow-hover",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export function CardHeader({
  title,
  subtitle,
  action,
  className,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-start justify-between gap-4 mb-5", className)}>
      <div>
        <h3 className="font-display text-lg text-fg tracking-tight">{title}</h3>
        {subtitle && <p className="text-sm text-fg-muted mt-0.5">{subtitle}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
