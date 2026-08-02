"use client";

import { PositionSizeContent } from "@/components/position-size/PositionSizeContent";

export default function PositionSizePage() {
  return (
    <div>
      <h1 className="font-display text-2xl tracking-tight mb-1">Position Size</h1>
      <p className="text-sm text-fg-muted mb-6">
        Match lot sizes across assets so each position carries roughly the same typical dollar swing.
      </p>
      <PositionSizeContent />
    </div>
  );
}
