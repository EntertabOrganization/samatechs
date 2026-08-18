import { Container } from "@/components/layout/Container";
import { ClayButton } from "@/components/ui/ClayButton";
import { StrategicIntelligenceField } from "@/components/brand/StrategicIntelligenceField";
import { HERO } from "@/content/home";

export function Hero() {
  return (
    <section className="clay-dark relative overflow-hidden" data-surface="dark">
      {/* Field as ground — full-bleed on tablet and up, the type is inlaid into it. */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
        <StrategicIntelligenceField variant="hero" className="h-full w-full opacity-90" />
      </div>

      <Container className="relative z-10 py-24 md:py-32 lg:py-40">
        <div className="grid-12">
          <div className="col-span-12 md:col-span-8 lg:col-span-7">
            <h1
              className="font-[family-name:var(--font-display)] font-bold text-white"
              style={{ fontSize: "clamp(3rem, 7vw, 7.25rem)", lineHeight: 1.02, letterSpacing: "-0.01em" }}
            >
              {HERO.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-8 max-w-xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-mist md:text-xl">
              {HERO.subheadline}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ClayButton href={HERO.primaryCta.href} variant="primary">
                {HERO.primaryCta.label}
              </ClayButton>
              <ClayButton href={HERO.secondaryCta.href} variant="ghost-dark">
                {HERO.secondaryCta.label}
              </ClayButton>
            </div>
          </div>
        </div>

        {/* Mobile: the field becomes a contained accent beneath the CTAs, not a full-bleed background. */}
        <div className="mt-16 h-56 md:hidden">
          <StrategicIntelligenceField variant="hero" className="h-full w-full opacity-70" />
        </div>
      </Container>
    </section>
  );
}
