import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PARTNER_EXPERIENCE } from "@/content/home";

export function PartnerExperience() {
  return (
    <section className="clay-dark py-24 md:py-32" data-surface="dark">
      <Container>
        <div className="grid-12">
          <div className="col-span-12 md:col-span-5">
            <Eyebrow className="text-intelligence">Track Record</Eyebrow>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold text-white md:text-4xl">
              {PARTNER_EXPERIENCE.title}
            </h2>
            <p className="mt-5 font-[family-name:var(--font-body)] text-lg text-mist">{PARTNER_EXPERIENCE.intro}</p>
          </div>

          <ul className="col-span-12 mt-10 flex flex-col gap-5 md:col-span-6 md:col-start-7 md:mt-0">
            {PARTNER_EXPERIENCE.items.map((item) => (
              <li key={item} className="flex items-start gap-4 border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                <span className="font-[family-name:var(--font-body)] text-base leading-relaxed text-white/90 md:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
