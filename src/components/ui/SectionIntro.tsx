import { Eyebrow } from "./Eyebrow";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
};

export function SectionIntro({ eyebrow, title, body, tone = "light", align = "left" }: SectionIntroProps) {
  const headingColor = tone === "dark" ? "text-white" : "text-navy";
  const bodyColor = tone === "dark" ? "text-mist" : "text-steel";
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-[42rem] ${alignClass}`}>
      {eyebrow ? <Eyebrow className={tone === "dark" ? "text-intelligence" : ""}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-3 font-[family-name:var(--font-display)] font-semibold ${headingColor}`}
        style={{ fontSize: "clamp(2rem, 3.6vw, 4rem)", lineHeight: 1.08 }}
      >
        {title}
      </h2>
      {body ? (
        <p className={`mt-5 font-[family-name:var(--font-body)] text-lg leading-relaxed ${bodyColor}`}>{body}</p>
      ) : null}
    </div>
  );
}
