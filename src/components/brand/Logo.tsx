type LogoProps = {
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Typographic placeholder wordmark. No official SAMATECHS logo asset is
 * in the repository, and the brand guideline explicitly forbids rebuilding
 * the neural-network mark in CSS — so this renders the name in Montserrat
 * with the specified minimum clear space, nothing more. Swap for the
 * official SVG in a single place: see public/logo/README.md.
 */
export function Logo({ tone = "dark", className }: LogoProps) {
  const color = tone === "light" ? "var(--color-white)" : "var(--color-navy)";

  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        // Clear space: X/4 of the wordmark's cap-height, applied as padding.
        padding: "0.35em 0.2em",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "1.35rem",
        letterSpacing: "0.02em",
        color,
      }}
    >
      SAMATECHS
    </span>
  );
}
