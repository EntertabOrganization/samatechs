import { CapabilityChip } from "@/components/ui/CapabilityChip";
import type { ServicePillar } from "@/content/services";

export function CapabilityGroup({ pillar }: { pillar: ServicePillar }) {
  return (
    <article id={pillar.id} className="scroll-mt-28 border-t border-mist py-16 first:border-t-0 md:py-20">
      <div className="grid-12">
        <div className="col-span-12 md:col-span-4">
          <span className="eyebrow text-steel">0{pillar.number}</span>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-navy md:text-3xl">
            {pillar.title}
          </h3>
        </div>

        <div className="col-span-12 mt-6 md:col-span-8 md:mt-0">
          <p className="font-[family-name:var(--font-body)] text-base leading-relaxed text-steel md:text-lg">
            {pillar.problem}
          </p>
          <p className="mt-4 font-[family-name:var(--font-body)] text-base leading-relaxed text-steel md:text-lg">
            {pillar.approach}
          </p>

          <h4 className="eyebrow mt-9 text-sovereign">Selected Capabilities</h4>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {pillar.capabilities.map((capability) => (
              <CapabilityChip key={capability}>{capability}</CapabilityChip>
            ))}
          </ul>

          <h4 className="eyebrow mt-9 text-sovereign">Typical Outcomes</h4>
          <ul className="mt-4 flex flex-col gap-2.5">
            {pillar.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pulse" aria-hidden="true" />
                <span className="font-[family-name:var(--font-body)] text-base text-navy">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
