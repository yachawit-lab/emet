"use client";

import { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

const fieldBase =
  "w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-fg placeholder:text-fg-subtle focus:border-accent transition-colors";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn(fieldBase, className)} {...props} />
  )
);
Input.displayName = "Input";

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, ...props }, ref) => (
    <select ref={ref} className={cn(fieldBase, "cursor-pointer", className)} {...props} />
  )
);
Select.displayName = "Select";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea ref={ref} className={cn(fieldBase, "resize-none", className)} {...props} />
));
Textarea.displayName = "Textarea";

export function Field({
  label,
  hint,
  children,
  className,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="block text-xs font-medium text-fg-muted mb-1.5">{label}</span>
      {children}
      {hint && <span className="block text-xs text-fg-subtle mt-1">{hint}</span>}
    </label>
  );
}
