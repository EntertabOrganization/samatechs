import { Container } from "@/components/layout/Container";
import { ClayButton } from "@/components/ui/ClayButton";
import { StrategicIntelligenceField } from "@/components/brand/StrategicIntelligenceField";
import { CLOSING_CTA } from "@/content/home";

export function ClosingCTA() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-navy md:text-5xl">
            {CLOSING_CTA.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-steel">
            {CLOSING_CTA.body}
          </p>

          <div className="relative mt-14 flex min-h-44 items-center justify-center py-6 md:min-h-56">
            <div className="pointer-events-none absolute inset-0 z-0 opacity-45" aria-hidden="true">
              <StrategicIntelligenceField variant="converge" className="h-full w-full" />
            </div>
            <ClayButton href={CLOSING_CTA.cta.href} variant="primary" className="relative z-10">
              {CLOSING_CTA.cta.label}
            </ClayButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
