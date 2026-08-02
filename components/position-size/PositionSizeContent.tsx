"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Field, Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { formatCurrencyCompact, formatLot } from "@/lib/format";
import {
  ASSET_CATEGORIES,
  DEFAULT_ASSETS,
  DEFAULT_LEVERAGE,
  REFERENCE_PRESET,
  equivalentLot,
  marginRequired,
  notionalValue,
  targetDailySwing,
  type AssetInputs,
} from "@/lib/position-size";

const REFERENCE_DEFAULTS = {
  lot: REFERENCE_PRESET.lot,
  unitsPerLot: REFERENCE_PRESET.unitsPerLot,
  price: REFERENCE_PRESET.price,
  atrPct: REFERENCE_PRESET.atrPct,
};

function defaultAssetState(): Record<string, AssetInputs> {
  return Object.fromEntries(
    DEFAULT_ASSETS.map((a) => [a.id, { unitsPerLot: a.unitsPerLot, price: a.price, atrPct: a.atrPct }])
  );
}

function toNumber(raw: string): number {
  const n = parseFloat(raw);
  return Number.isFinite(n) ? n : 0;
}

/** Guards formatCurrencyCompact against NaN (e.g. a card's price/ATR% edited to 0). */
function fmtMoney(value: number): string {
  return Number.isFinite(value) ? formatCurrencyCompact(value) : "—";
}

export function PositionSizeContent() {
  const [reference, setReference] = useState({ ...REFERENCE_DEFAULTS });
  const [leverage, setLeverage] = useState(DEFAULT_LEVERAGE);
  const [assets, setAssets] = useState<Record<string, AssetInputs>>(defaultAssetState);

  function updateReference(key: keyof typeof reference, raw: string) {
    setReference((prev) => ({ ...prev, [key]: toNumber(raw) }));
  }

  function updateAsset(id: string, key: keyof AssetInputs, raw: string) {
    setAssets((prev) => ({ ...prev, [id]: { ...prev[id], [key]: toNumber(raw) } }));
  }

  function handleReset() {
    setReference({ ...REFERENCE_DEFAULTS });
    setLeverage(DEFAULT_LEVERAGE);
    setAssets(defaultAssetState());
  }

  const target = targetDailySwing(reference.lot, reference);

  return (
    <div className="space-y-8">
      <Card className="border-l-4 border-accent bg-accent-soft/40">
        <div className="flex items-baseline gap-2 mb-4">
          <span className="font-display text-lg tracking-tight">{REFERENCE_PRESET.ticker}</span>
          <span className="text-sm text-fg-muted">{REFERENCE_PRESET.name} — your baseline</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Field label="Lot">
            <Input
              type="number"
              step="0.01"
              value={reference.lot}
              onChange={(e) => updateReference("lot", e.target.value)}
            />
          </Field>
          <Field label="Units / Lot">
            <Input
              type="number"
              value={reference.unitsPerLot}
              onChange={(e) => updateReference("unitsPerLot", e.target.value)}
            />
          </Field>
          <Field label="Price">
            <Input
              type="number"
              step="0.01"
              value={reference.price}
              onChange={(e) => updateReference("price", e.target.value)}
            />
          </Field>
          <Field label="ATR % (daily)">
            <Input
              type="number"
              step="0.1"
              value={reference.atrPct}
              onChange={(e) => updateReference("atrPct", e.target.value)}
            />
          </Field>
        </div>
        <div className="flex items-baseline gap-2 mt-5 pt-4 border-t border-border">
          <span className="text-xs font-medium text-fg-muted uppercase tracking-wide">
            Target daily swing
          </span>
          <span className="font-display text-2xl text-accent-strong tabular-nums">
            {fmtMoney(target)}
          </span>
        </div>
      </Card>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <label className="flex items-center gap-2 text-sm text-fg-muted">
          Leverage 1 :
          <Input
            type="number"
            value={leverage}
            onChange={(e) => setLeverage(toNumber(e.target.value))}
            className="w-20"
          />
        </label>
        <Button variant="secondary" size="sm" onClick={handleReset}>
          Reset defaults
        </Button>
      </div>

      {ASSET_CATEGORIES.map((category) => (
        <div key={category}>
          <h2 className="font-display text-base tracking-tight pb-2 mb-4 border-b-2 border-accent inline-block">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DEFAULT_ASSETS.filter((preset) => preset.category === category).map((preset) => {
              const inputs = assets[preset.id];
              const lot = equivalentLot(target, inputs);
              const notional = notionalValue(lot, inputs);
              const margin = marginRequired(notional, leverage);
              return (
                <Card key={preset.id} className="flex flex-col gap-3">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-sm tracking-tight">{preset.ticker}</span>
                    <span className="text-xs text-fg-muted">{preset.name}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <Field label="Units/Lot">
                      <Input
                        type="number"
                        value={inputs.unitsPerLot}
                        onChange={(e) => updateAsset(preset.id, "unitsPerLot", e.target.value)}
                        className="px-2 py-1.5 text-sm"
                      />
                    </Field>
                    <Field label="Price">
                      <Input
                        type="number"
                        step="0.01"
                        value={inputs.price}
                        onChange={(e) => updateAsset(preset.id, "price", e.target.value)}
                        className="px-2 py-1.5 text-sm"
                      />
                    </Field>
                    <Field label="ATR %">
                      <Input
                        type="number"
                        step="0.1"
                        value={inputs.atrPct}
                        onChange={(e) => updateAsset(preset.id, "atrPct", e.target.value)}
                        className="px-2 py-1.5 text-sm"
                      />
                    </Field>
                  </div>
                  <div className="flex flex-col gap-1.5 pt-3 border-t border-border">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-fg-muted uppercase tracking-wide">
                        Equivalent Lot
                      </span>
                      <span className="font-display text-lg text-accent-strong tabular-nums">
                        {formatLot(lot)}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-fg-muted">Notional</span>
                      <span className="text-sm tabular-nums">{fmtMoney(notional)}</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-fg-muted">Margin Req.</span>
                      <span className="text-sm tabular-nums">{fmtMoney(margin)}</span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      ))}

      <p className="text-xs text-fg-subtle max-w-2xl leading-relaxed pt-4 border-t border-border">
        Every number above is an illustrative example, not live data. Units/lot and price
        conventions vary by broker — check your platform&apos;s contract specification sheet, and
        pull the current ATR% straight off your own chart, before sizing a real position with
        these outputs.
      </p>
    </div>
  );
}
