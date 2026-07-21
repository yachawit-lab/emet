# Ledger — Trading Journal

A personal trading journal built with Next.js. Log trades, review performance on a dashboard, browse P&L by day/week/year on a calendar, and dig into deeper patterns (weekday/hour edge, plan adherence, R-multiple distribution, tag performance) on the Analytics page.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [Zustand](https://github.com/pmndrs/zustand) for state, persisted to the browser via `localStorage`
- [Recharts](https://recharts.org/) for charts, [Framer Motion](https://www.framer.com/motion/) for animation
- [Vitest](https://vitest.dev/) for unit tests

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Run the production build |
| `npm run lint` | Lint with ESLint |
| `npm test` | Run the test suite once |
| `npm run test:watch` | Run tests in watch mode |

## Project structure

```
app/                    Routes (App Router)
  page.tsx              Dashboard
  trades/                Trade log, new trade, trade detail/edit
  calendar/              Calendar view
  analytics/             Analytics view
components/
  ui/                    Generic UI primitives (Card, Button, Input, Badge, ...)
  layout/                App shell, sidebar, top bar, global filter bar
  dashboard/, analytics/, calendar/, trades/, charts/
                         Feature-specific components and chart wrappers
lib/                     Pure logic: types, derived-metrics math, filters,
                         aggregations, formatting, CSV export, mock data generator
store/                   Zustand stores (trades, filters, view preferences)
```

## Data & storage

**There is no backend or database.** All trade data lives in your browser's `localStorage`, managed by the Zustand store in `store/trade-store.ts`. This means:

- Your trades persist across reloads and browser restarts, on **this browser, this device only**.
- Clearing browser data, switching browsers, or using a private/incognito window will not show your trades.
- There's no cloud sync between devices.

**On first load the app seeds itself with 300 synthetic mock trades** (`lib/seed.ts`) so every screen has realistic data to render. These are flagged internally (`isSeed: true`) but are otherwise ordinary trades in the store.

To back up or move data, use **Export CSV** on the Trade Log page.

Two things worth doing before relying on this for real trades:
1. **Clear the mock trades** and start from an empty log (not yet implemented — the current "Reset demo" button in the sidebar *regenerates* mock data rather than clearing it).
2. Decide whether browser-local storage is enough, or whether you want a real local database (e.g. SQLite) or hosted/cloud storage (e.g. Supabase) so data isn't tied to one browser. Flagged for a follow-up change.

## Testing

```bash
npm test
```

Covers the derived-metrics math (`lib/derive.ts`), portfolio metrics (`lib/metrics.ts`), filtering (`lib/filters.ts`), and the mock data generator (`lib/seed.ts`).
