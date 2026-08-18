import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/layout/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { NodeGlyph } from "@/components/brand/NodeGlyph";
import { ADVISORY_PILLARS, PILLARS_INTRO } from "@/content/home";

export function AdvisoryPillars() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <SectionIntro eyebrow="Advisory Pillars" title="Three Integrated Advisory Pillars" body={PILLARS_INTRO} />

        <div className="mt-16 flex flex-col">
          {ADVISORY_PILLARS.map((pillar, index) => {
            const reversed = index % 2 === 1;
            return (
              <article
                key={pillar.id}
                id={pillar.id}
                className="grid-12 items-start border-t border-mist py-12 first:border-t-0 md:py-14"
              >
                <div
                  className={`col-span-12 flex items-center gap-4 md:col-span-3 ${
                    reversed ? "md:order-2 md:col-start-10 md:justify-self-start" : "md:col-start-1"
                  }`}
                >
                  <NodeGlyph seed={pillar.id} size={48} />
                  <span className="eyebrow text-steel">0{index + 1}</span>
                </div>

                <div
                  className={`col-span-12 mt-6 md:col-span-9 md:mt-0 ${
                    reversed ? "md:order-1 md:col-start-1" : "md:col-start-4"
                  }`}
                >
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-navy md:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-steel md:text-lg">
                    {pillar.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2.5" aria-label={`Selected areas of focus: ${pillar.title}`}>
                    {pillar.focus.map((item) => (
                      <li
                        key={item}
                        className="clay-light rounded-[13px] px-4 py-2 text-sm text-navy font-[family-name:var(--font-body)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={pillar.href}
                    className="mt-6 inline-flex items-center gap-1.5 font-[family-name:var(--font-body)] text-sm font-semibold text-sovereign hover:text-pulse"
                  >
                    {pillar.linkLabel}
                    <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
