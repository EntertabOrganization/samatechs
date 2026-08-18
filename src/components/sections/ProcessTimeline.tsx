import { FieldSpine } from "@/components/brand/FieldSpine";
import { PROCESS_STEPS } from "@/content/process";
import { ProcessStep } from "./ProcessStep";

export function ProcessTimeline() {
  const stepCount = PROCESS_STEPS.length;

  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: "40px 1fr", columnGap: "1.75rem", rowGap: "3.75rem" }}
    >
      <div
        style={{ gridColumn: 1, gridRow: `1 / span ${stepCount}` }}
        className="relative"
        aria-hidden="true"
      >
        <FieldSpine id="how-we-work" className="absolute inset-0 h-full w-full" />
      </div>

      {PROCESS_STEPS.map((step, index) => (
        <div
          key={`${step.number}-marker`}
          style={{ gridColumn: 1, gridRow: index + 1 }}
          className="flex h-11 w-11 items-start justify-center pt-2"
          aria-hidden="true"
        >
          <span
            className={`h-3.5 w-3.5 rounded-full border-2 border-navy ${
              index === stepCount - 1 ? "bg-gold" : "bg-pulse"
            }`}
          />
        </div>
      ))}

      {PROCESS_STEPS.map((step, index) => (
        <ProcessStep key={step.number} step={step} row={index + 1} />
      ))}
    </div>
  );
}
