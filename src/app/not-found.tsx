import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ClayButton } from "@/components/ui/ClayButton";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="bg-ice py-28 md:py-40">
      <Container>
        <div className="max-w-xl">
          <Eyebrow>404</Eyebrow>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold text-navy md:text-5xl">
            This page isn&rsquo;t part of the plan.
          </h1>
          <p className="mt-5 font-[family-name:var(--font-body)] text-lg leading-relaxed text-steel">
            The page you&rsquo;re looking for doesn&rsquo;t exist. Return to the homepage, or start a confidential
            conversation with our team.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ClayButton href="/" variant="primary">
              Back to Home
            </ClayButton>
            <ClayButton href="/contact" variant="secondary">
              Contact Us
            </ClayButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
