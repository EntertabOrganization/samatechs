/**
 * Deterministic geometry for the Strategic Intelligence Field.
 * No Math.random() anywhere in this module — every value is fixed at
 * module scope so server and client render identically (no hydration
 * mismatch) and the "formation" animation is reproducible.
 */

export type Channel = {
  /** SVG path data. Rendered with pathLength=1 so dash animation is length-independent. */
  d: string;
  /** 0 (far / faint) to 1 (near / bold) — drives parallax multiplier and opacity. */
  depth: number;
  /** Stagger, in ms, for the formation draw-in. */
  delay: number;
};

export const HERO_VIEWBOX = "0 0 1000 760";

/** Fragmented channels entering from the left, converging on HERO_NODE. */
export const HERO_CHANNELS: Channel[] = [
  { d: "M30,110 C210,132 330,206 452,250 C556,288 618,336 706,392", depth: 0.55, delay: 0 },
  { d: "M14,246 C176,214 296,282 418,316 C540,350 612,388 706,404", depth: 0.7, delay: 90 },
  { d: "M46,404 C208,384 330,404 452,404 C574,404 630,406 706,412", depth: 1, delay: 180 },
  { d: "M30,560 C192,540 314,480 436,458 C558,436 626,424 706,414", depth: 0.7, delay: 90 },
  { d: "M14,684 C214,642 356,540 478,478 C578,428 636,424 706,414", depth: 0.5, delay: 0 },
];

/** Decision node: where the fan of channels resolves into one point. */
export const HERO_NODE = { cx: 718, cy: 410, r: 11, delay: 520 };

/** Single resolved channel continuing past the node toward the bottom edge. */
export const HERO_CONTINUATION: Channel = {
  d: "M718,421 C730,486 736,560 738,760",
  depth: 0.3,
  delay: 620,
};

/** Small "still fragmented" origin marks at the start of each entering channel. */
export const HERO_ORIGIN_POINTS = [
  { cx: 30, cy: 110 },
  { cx: 14, cy: 246 },
  { cx: 46, cy: 404 },
  { cx: 30, cy: 560 },
  { cx: 14, cy: 684 },
];

export const CONVERGE_VIEWBOX = "0 0 900 340";

/** Wider, shallower fan used behind the closing CTA. */
export const CONVERGE_CHANNELS: Channel[] = [
  { d: "M20,40 C220,60 360,120 450,168", depth: 0.5, delay: 0 },
  { d: "M20,120 C220,120 360,150 450,172", depth: 0.7, delay: 80 },
  { d: "M20,220 C220,190 360,190 450,176", depth: 0.85, delay: 140 },
  { d: "M20,300 C220,260 360,200 450,180", depth: 0.5, delay: 80 },
];

export const CONVERGE_NODE = { cx: 460, cy: 178, r: 9, delay: 380 };

export const CONVERGE_MIRROR_OFFSET = 900; // reflect channels to fan out on the right too

/**
 * Compact per-item marks (founders, pillars, cross-cutting areas). A small
 * set of hand-authored 64x64 variants, deterministically selected by name
 * via a simple string hash — never Math.random().
 */
export const GLYPH_VARIANTS: { d: string[]; node: { cx: number; cy: number } }[] = [
  {
    d: ["M10,10 L30,30", "M54,14 L32,30", "M12,54 L30,34"],
    node: { cx: 32, cy: 32 },
  },
  {
    d: ["M32,8 L32,26", "M10,50 L28,34", "M54,50 L36,34"],
    node: { cx: 32, cy: 32 },
  },
  {
    d: ["M8,20 L28,30", "M8,46 L28,34", "M56,32 L36,32"],
    node: { cx: 32, cy: 32 },
  },
  {
    d: ["M12,12 L30,28", "M52,12 L34,28", "M32,54 L32,32"],
    node: { cx: 32, cy: 32 },
  },
];

export function hashSeed(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

export function glyphForSeed(seed: string) {
  const index = hashSeed(seed) % GLYPH_VARIANTS.length;
  return GLYPH_VARIANTS[index];
}
