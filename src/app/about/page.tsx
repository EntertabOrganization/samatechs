import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { FounderProfile } from "@/components/sections/FounderProfile";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FOUNDERS, FOUNDER_DISCLAIMER, MISSION, VISION, WHO_WE_ARE } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "SAMATECHS is a boutique strategic advisory and analytics firm led by senior partners in strategy, analytics, and artificial intelligence.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow={WHO_WE_ARE.eyebrow} title={WHO_WE_ARE.title} />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid-12">
            <div className="col-span-12 md:col-span-6">
              {WHO_WE_ARE.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-5 font-[family-name:var(--font-body)] text-base leading-relaxed text-steel first:mt-0 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="col-span-12 mt-10 border-t border-mist pt-10 md:col-span-5 md:col-start-8 md:mt-0 md:border-t-0 md:border-l md:pt-0 md:pl-10">
              <p className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-snug text-navy md:text-3xl">
                &ldquo;{WHO_WE_ARE.statement}&rdquo;
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ice py-20 md:py-28">
        <Container>
          <div className="grid-12">
            <div className="col-span-12 md:col-span-6">
              <Eyebrow>{MISSION.title}</Eyebrow>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-navy md:text-3xl">
                {MISSION.title}
              </h2>
              <p className="mt-4 font-[family-name:var(--font-body)] text-base leading-relaxed text-steel md:text-lg">
                {MISSION.body}
              </p>
            </div>
            <div className="col-span-12 mt-10 md:col-span-6 md:mt-0">
              <Eyebrow>{VISION.title}</Eyebrow>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-navy md:text-3xl">
                {VISION.title}
              </h2>
              <p className="mt-4 font-[family-name:var(--font-body)] text-base leading-relaxed text-steel md:text-lg">
                {VISION.body}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <Eyebrow>Our Founders</Eyebrow>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold text-navy md:text-4xl">
            Our Founders
          </h2>

          <div className="mt-12 flex flex-col gap-6">
            {FOUNDERS.map((founder) => (
              <FounderProfile key={founder.name} founder={founder} />
            ))}
          </div>

          <p className="mt-10 max-w-3xl font-[family-name:var(--font-body)] text-sm leading-relaxed text-steel">
            {FOUNDER_DISCLAIMER}
          </p>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
