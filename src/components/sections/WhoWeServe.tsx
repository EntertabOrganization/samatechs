import { Container } from "@/components/layout/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { WHO_WE_SERVE } from "@/content/home";

export function WhoWeServe() {
  return (
    <section className="bg-ice py-24 md:py-32">
      <Container>
        <SectionIntro eyebrow="Who We Serve" title="Who We Serve" body={WHO_WE_SERVE.intro} />

        <div className="grid-12 mt-14">
          {WHO_WE_SERVE.segments.map((segment) => (
            <div key={segment.title} className="col-span-12 border-t border-mist pt-6 md:col-span-4">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-navy">
                {segment.title}
              </h3>
              <p className="mt-3 font-[family-name:var(--font-body)] text-base leading-relaxed text-steel">
                {segment.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
