import type { ProcessStepData } from "@/content/process";

export function ProcessStep({ step, row }: { step: ProcessStepData; row: number }) {
  return (
    <div style={{ gridColumn: 2, gridRow: row }} className="pb-2">
      <span className="eyebrow text-sovereign">{step.number}</span>
      <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-navy md:text-3xl">
        {step.title}
      </h3>
      <p className="mt-3 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-steel md:text-lg">
        {step.body}
      </p>
    </div>
  );
}
