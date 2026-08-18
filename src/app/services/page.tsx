import type { Metadata } from "next";
import { Compass, Brain, Cpu, TrendUp } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { CapabilityGroup } from "@/components/sections/CapabilityGroup";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ClaySurface } from "@/components/ui/ClaySurface";
import { IntegrationDiagram } from "@/components/brand/IntegrationDiagram";
import { CROSS_CUTTING_AREAS, SERVICES_INTRO, SERVICE_PILLARS } from "@/content/services";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description:
    "SAMATECHS' integrated advisory model: Enterprise Strategy & Performance, Risk, Governance & Decision Intelligence, and Digital Transformation & Cross-Border Growth.",
};

const AREA_ICONS: Record<string, typeof Compass> = {
  Strategy: Compass,
  "Decision Intelligence": Brain,
  Technology: Cpu,
  Growth: TrendUp,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow={SERVICES_INTRO.eyebrow} title={SERVICES_INTRO.title} body={SERVICES_INTRO.body} />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {CROSS_CUTTING_AREAS.map((area) => {
              const Icon = AREA_ICONS[area.title];
              return (
                <ClaySurface key={area.title} tone="light" radius="md" className="p-7">
                  <Icon size={26} weight="regular" className="text-sovereign" aria-hidden="true" />
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold text-navy">
                    {area.title}
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed text-steel">
                    {area.description}
                  </p>
                </ClaySurface>
              );
            })}
          </div>

          <div className="mt-16">
            <Eyebrow>Integration &amp; Overlap</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-navy md:text-3xl">
              Every engagement draws on all four areas.
            </h2>
            <div className="mt-10 overflow-x-auto">
              <div className="min-w-[640px]">
                <IntegrationDiagram />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ice py-4">
        <Container>
          {SERVICE_PILLARS.map((pillar) => (
            <CapabilityGroup key={pillar.id} pillar={pillar} />
          ))}
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
