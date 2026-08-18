import type { ElementType, ReactNode } from "react";

type ClaySurfaceProps = {
  as?: ElementType;
  tone?: "light" | "blue" | "dark";
  radius?: "sm" | "md" | "lg";
  interactive?: boolean;
  className?: string;
  children: ReactNode;
};

const toneClass: Record<NonNullable<ClaySurfaceProps["tone"]>, string> = {
  light: "clay-light",
  blue: "clay-blue",
  dark: "clay-dark",
};

const radiusClass: Record<NonNullable<ClaySurfaceProps["radius"]>, string> = {
  sm: "rounded-[16px]",
  md: "rounded-[26px]",
  lg: "rounded-[34px]",
};

export function ClaySurface({
  as: Component = "div",
  tone = "light",
  radius = "md",
  interactive = false,
  className = "",
  children,
}: ClaySurfaceProps) {
  const classes = `${toneClass[tone]} ${radiusClass[radius]} ${interactive ? "clay-press" : ""} ${className}`.trim();
  return <Component className={classes} data-surface={tone === "dark" ? "dark" : undefined}>{children}</Component>;
}
