const LEFT_NODES = [
  { label: "Strategy", y: 42 },
  { label: "Decision Intelligence", y: 114 },
  { label: "Technology", y: 186 },
  { label: "Growth", y: 258 },
];

const RIGHT_NODES = [
  { label: "Enterprise Strategy & Performance", y: 66 },
  { label: "Risk, Governance & Decision Intelligence", y: 150 },
  { label: "Digital Transformation & Cross-Border Growth", y: 234 },
];

const LEFT_X = 190;
const RIGHT_X = 650;

function curve(y1: number, y2: number) {
  const midX = (LEFT_X + RIGHT_X) / 2;
  return `M${LEFT_X},${y1} C${midX},${y1} ${midX},${y2} ${RIGHT_X},${y2}`;
}

/**
 * Static diagram (site's own field grammar, no new visual language)
 * showing that the four cross-cutting areas inform all three advisory
 * pillars — integration and overlap, not a one-to-one mapping.
 */
export function IntegrationDiagram() {
  return (
    <figure>
      <svg
        viewBox="0 0 960 300"
        style={{ width: "100%", height: "auto" }}
        role="img"
        aria-labelledby="integration-diagram-title"
      >
        <title id="integration-diagram-title">
          Diagram showing the four cross-cutting areas each connecting to all three advisory pillars
        </title>

        {LEFT_NODES.flatMap((left) =>
          RIGHT_NODES.map((right) => (
            <path
              key={`${left.label}-${right.label}`}
              d={curve(left.y, right.y)}
              fill="none"
              stroke="var(--color-sovereign)"
              strokeWidth={1.25}
              opacity={0.18}
            />
          ))
        )}

        {LEFT_NODES.map((node) => (
          <g key={node.label}>
            <circle cx={LEFT_X} cy={node.y} r={6} fill="var(--color-pulse)" />
            <text
              x={LEFT_X - 16}
              y={node.y + 4}
              textAnchor="end"
              className="font-[family-name:var(--font-body)]"
              fontSize={13}
              fontWeight={600}
              fill="var(--color-navy)"
            >
              {node.label}
            </text>
          </g>
        ))}

        {RIGHT_NODES.map((node) => (
          <g key={node.label}>
            <circle cx={RIGHT_X} cy={node.y} r={7} fill="var(--color-gold)" stroke="var(--color-navy)" strokeWidth={1} />
            <foreignObject x={RIGHT_X + 20} y={node.y - 30} width={250} height={64}>
              <p
                className="font-[family-name:var(--font-body)] text-[12.5px] font-semibold leading-snug text-navy"
                style={{ margin: 0 }}
              >
                {node.label}
              </p>
            </foreignObject>
          </g>
        ))}
      </svg>
    </figure>
  );
}
