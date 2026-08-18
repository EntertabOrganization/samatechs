"use client";

import { useEffect, useId, useRef, type CSSProperties } from "react";
import {
  CONVERGE_CHANNELS,
  CONVERGE_NODE,
  CONVERGE_VIEWBOX,
  HERO_CHANNELS,
  HERO_CONTINUATION,
  HERO_NODE,
  HERO_ORIGIN_POINTS,
  HERO_VIEWBOX,
  type Channel,
} from "./field-geometry";

type FieldVariant = "hero" | "converge";

type StrategicIntelligenceFieldProps = {
  variant?: FieldVariant;
  className?: string;
};

function layerStyle(depth: number, delay: number): CSSProperties {
  return {
    ["--field-depth" as string]: depth,
    ["--field-delay" as string]: `${delay}ms`,
  };
}

function ChannelPaths({
  channel,
  gradientId,
}: {
  channel: Channel;
  gradientId: string;
}) {
  return (
    <g className="field-layer" style={layerStyle(channel.depth, channel.delay)}>
      <path d={channel.d} className="channel-shadow" />
      <path
        d={channel.d}
        className="channel-body field-channel"
        pathLength={1}
        stroke={`url(#${gradientId})`}
        style={{ ["--field-delay" as string]: `${channel.delay}ms` }}
      />
      <path d={channel.d} className="channel-highlight" />
    </g>
  );
}

/**
 * The Strategic Intelligence Field — SAMATECHS' signature visual.
 * Fragmented channels resolve into a single decision node: complexity
 * becoming clarity. Deterministic geometry (see field-geometry.ts), an
 * SVG stroke-dash formation on load, and restrained pointer parallax.
 */
export function StrategicIntelligenceField({
  variant = "hero",
  className,
}: StrategicIntelligenceFieldProps) {
  const rawId = useId();
  const gradientId = `field-gradient-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (reduceMotion || coarsePointer) return;

    let frame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = container.getBoundingClientRect();
        const relX = (event.clientX - rect.left) / rect.width - 0.5;
        const relY = (event.clientY - rect.top) / rect.height - 0.5;
        const maxShift = 10;
        container.style.setProperty("--field-px", `${(-relX * maxShift).toFixed(2)}px`);
        container.style.setProperty("--field-py", `${(-relY * maxShift).toFixed(2)}px`);
      });
    };

    const handlePointerLeave = () => {
      container.style.setProperty("--field-px", "0px");
      container.style.setProperty("--field-py", "0px");
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    container.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const viewBox = variant === "hero" ? HERO_VIEWBOX : CONVERGE_VIEWBOX;
  const label =
    variant === "hero"
      ? "Abstract diagram of fragmented data channels converging into a single decision node, representing SAMATECHS turning complexity into clarity."
      : "Abstract diagram of strategic channels converging behind the call to action.";

  return (
    <div ref={containerRef} className={className}>
      <svg
        viewBox={viewBox}
        width="100%"
        height="100%"
        role="img"
        aria-label={label}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-sovereign)" />
            <stop offset="100%" stopColor="var(--color-pulse)" />
          </linearGradient>
        </defs>

        {variant === "hero" ? (
          <>
            {HERO_ORIGIN_POINTS.map((point, index) => (
              <circle
                key={`origin-${index}`}
                cx={point.cx}
                cy={point.cy}
                r={4}
                className="field-origin"
                fill="var(--color-mist)"
                style={{ ["--field-delay" as string]: `${index * 40}ms` }}
              />
            ))}

            {HERO_CHANNELS.map((channel, index) => (
              <ChannelPaths key={`hero-channel-${index}`} channel={channel} gradientId={gradientId} />
            ))}

            <ChannelPaths channel={HERO_CONTINUATION} gradientId={gradientId} />

            <circle
              cx={HERO_NODE.cx}
              cy={HERO_NODE.cy}
              r={HERO_NODE.r + 7}
              fill="var(--color-gold)"
              opacity={0.16}
              className="field-node"
              style={{ ["--field-delay" as string]: `${HERO_NODE.delay}ms` }}
            />
            <circle
              cx={HERO_NODE.cx}
              cy={HERO_NODE.cy}
              r={HERO_NODE.r}
              fill="var(--color-gold)"
              stroke="var(--color-navy)"
              strokeWidth={1.5}
              className="field-node"
              style={{ ["--field-delay" as string]: `${HERO_NODE.delay}ms` }}
            />
          </>
        ) : (
          <>
            {CONVERGE_CHANNELS.map((channel, index) => (
              <ChannelPaths key={`converge-channel-${index}`} channel={channel} gradientId={gradientId} />
            ))}
            <g transform={`translate(${CONVERGE_VIEWBOX.split(" ")[2]},0) scale(-1,1)`}>
              {CONVERGE_CHANNELS.map((channel, index) => (
                <ChannelPaths key={`converge-channel-mirror-${index}`} channel={channel} gradientId={gradientId} />
              ))}
            </g>
            <circle
              cx={CONVERGE_NODE.cx}
              cy={CONVERGE_NODE.cy}
              r={CONVERGE_NODE.r + 6}
              fill="var(--color-gold)"
              opacity={0.16}
              className="field-node"
              style={{ ["--field-delay" as string]: `${CONVERGE_NODE.delay}ms` }}
            />
            <circle
              cx={CONVERGE_NODE.cx}
              cy={CONVERGE_NODE.cy}
              r={CONVERGE_NODE.r}
              fill="var(--color-gold)"
              stroke="var(--color-navy)"
              strokeWidth={1.5}
              className="field-node"
              style={{ ["--field-delay" as string]: `${CONVERGE_NODE.delay}ms` }}
            />
          </>
        )}
      </svg>
    </div>
  );
}
