/**
 * mulberry32 — small, fast, deterministic PRNG.
 * Same seed always produces the same sequence, so mock data is stable across reloads.
 */
export function mulberry32(seed: number) {
  let a = seed;
  return function rand() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type Rand = () => number;

/** Uniform float in [min, max) */
export function randRange(rand: Rand, min: number, max: number): number {
  return min + rand() * (max - min);
}

/** Uniform integer in [min, max] inclusive */
export function randInt(rand: Rand, min: number, max: number): number {
  return Math.floor(randRange(rand, min, max + 1));
}

/** Pick a random element from an array */
export function pick<T>(rand: Rand, arr: readonly T[]): T {
  return arr[Math.floor(rand() * arr.length)];
}

/** Pick n distinct random elements from an array */
export function pickN<T>(rand: Rand, arr: readonly T[], n: number): T[] {
  const pool = [...arr];
  const out: T[] = [];
  const count = Math.min(n, pool.length);
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(rand() * pool.length);
    out.push(pool[idx]);
    pool.splice(idx, 1);
  }
  return out;
}

/** True with probability p */
export function chance(rand: Rand, p: number): boolean {
  return rand() < p;
}

/** Pick from a weighted list of [value, weight] pairs */
export function weightedPick<T>(rand: Rand, entries: [T, number][]): T {
  const total = entries.reduce((s, [, w]) => s + w, 0);
  let r = rand() * total;
  for (const [value, weight] of entries) {
    r -= weight;
    if (r <= 0) return value;
  }
  return entries[entries.length - 1][0];
}
