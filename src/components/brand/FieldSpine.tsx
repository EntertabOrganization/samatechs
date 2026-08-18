type FieldSpineProps = {
  /** Unique id for this instance's gradient — required since the SVG has no client-side id generation. */
  id: string;
  className?: string;
};

const STRANDS = [
  { d: "M8,0 C12,26 17,54 20,84 L20,320", delay: 0 },
  { d: "M20,0 L20,84 L20,320", delay: 90 },
  { d: "M32,0 C28,26 23,54 20,84 L20,320", delay: 180 },
];

/**
 * A vertical Strategic-Intelligence-Field channel used as the spine of
 * the How We Work sequence: fragmented strands at the top resolve into
 * one confident channel — the same visual grammar as the hero, oriented
 * to a process rather than a decision. No JS required; pure CSS draw-in.
 */
export function FieldSpine({ id, className }: FieldSpineProps) {
  const gradientId = `spine-gradient-${id}`;

  return (
    <svg
      viewBox="0 0 40 320"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--color-mist)" />
          <stop offset="35%" stopColor="var(--color-sovereign)" />
          <stop offset="100%" stopColor="var(--color-pulse)" />
        </linearGradient>
      </defs>
      {STRANDS.map((strand, index) => (
        <g key={index}>
          <path d={strand.d} className="channel-shadow" vectorEffect="non-scaling-stroke" />
          <path
            d={strand.d}
            className="channel-body field-channel"
            pathLength={1}
            stroke={`url(#${gradientId})`}
            vectorEffect="non-scaling-stroke"
            style={{ ["--field-delay" as string]: `${strand.delay}ms` }}
          />
          <path d={strand.d} className="channel-highlight" vectorEffect="non-scaling-stroke" />
        </g>
      ))}
    </svg>
  );
}
