import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Diagnose, architect, and advise through delivery — how SAMATECHS moves leadership teams from ambiguity to disciplined, analytically rigorous action.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="How We Work"
        title="From ambiguity to disciplined action."
        body="Our engagements follow a consistent discipline — grounded throughout in quantitative rigor — so that leadership teams move from a fragmented problem to an implementation-ready decision with confidence."
      />

      <section className="bg-white py-24 md:py-32">
        <Container>
          <ProcessTimeline />
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
