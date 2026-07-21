"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "secondary", size = "md", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-1.5 rounded-full font-medium transition-colors duration-150 disabled:opacity-40 disabled:pointer-events-none whitespace-nowrap";
    const sizes = {
      sm: "text-xs px-3 py-1.5",
      md: "text-sm px-4 py-2",
    };
    const variants = {
      primary: "bg-accent text-white hover:bg-accent-strong",
      secondary: "bg-panel text-fg border border-border hover:bg-border/60",
      ghost: "text-fg-muted hover:text-fg hover:bg-panel",
      danger: "bg-loss-soft text-loss hover:bg-loss/15",
    };
    return (
      <button
        ref={ref}
        className={cn(base, sizes[size], variants[variant], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
