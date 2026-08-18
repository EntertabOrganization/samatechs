import { Container } from "@/components/layout/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { ClaySurface } from "@/components/ui/ClaySurface";
import { WHY_SAMATECHS } from "@/content/home";

export function WhySamatechs() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <SectionIntro eyebrow="Why SAMATECHS" title="Why SAMATECHS" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {WHY_SAMATECHS.map((item, index) => {
            const blue = index % 3 === 0;
            return (
              <ClaySurface key={item.title} tone={blue ? "blue" : "light"} radius="lg" className="p-8 md:p-10">
                <h3
                  className={`font-[family-name:var(--font-display)] text-xl font-semibold md:text-2xl ${
                    blue ? "text-white" : "text-navy"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-4 font-[family-name:var(--font-body)] text-base leading-relaxed ${
                    blue ? "text-white/85" : "text-steel"
                  }`}
                >
                  {item.description}
                </p>
              </ClaySurface>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
