import { NodeGlyph } from "@/components/brand/NodeGlyph";
import type { Founder } from "@/content/about";

export function FounderProfile({ founder }: { founder: Founder }) {
  return (
    <article className="clay-dark rounded-[34px] p-8 md:p-10" data-surface="dark">
      <div className="flex items-center gap-5">
        <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-slate-navy">
          <NodeGlyph seed={founder.name} tone="gold" size={80} className="absolute inset-0" />
          <span className="relative font-[family-name:var(--font-display)] text-lg font-bold text-white">
            {founder.initials}
          </span>
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-white md:text-2xl">
            {founder.name}
          </h3>
          <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-intelligence">{founder.role}</p>
        </div>
      </div>

      <p className="mt-7 max-w-[68ch] font-[family-name:var(--font-body)] text-base leading-relaxed text-white/85">
        {founder.bio}
      </p>
    </article>
  );
}
