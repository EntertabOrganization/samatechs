import { glyphForSeed } from "./field-geometry";

type NodeGlyphProps = {
  seed: string;
  tone?: "gold" | "pulse";
  className?: string;
  size?: number;
};

/**
 * Compact per-item mark used for founders, pillars, and cross-cutting
 * areas: a handful of channels resolving into one small node. Variant is
 * chosen deterministically from `seed` — same input always renders the
 * same glyph, so server and client output match exactly.
 */
export function NodeGlyph({ seed, tone = "pulse", className, size = 56 }: NodeGlyphProps) {
  const glyph = glyphForSeed(seed);
  const nodeColor = tone === "gold" ? "var(--color-gold)" : "var(--color-pulse)";

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
    >
      {glyph.d.map((d, index) => (
        <path
          key={index}
          d={d}
          fill="none"
          stroke="var(--color-sovereign)"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
      ))}
      <circle cx={glyph.node.cx} cy={glyph.node.cy} r={6} fill={nodeColor} stroke="var(--color-navy)" strokeWidth={1} />
    </svg>
  );
}
