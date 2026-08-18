import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
};

export function PageHeader({ eyebrow, title, body }: PageHeaderProps) {
  return (
    <section className="bg-ice py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1
            className="mt-4 font-[family-name:var(--font-display)] font-bold text-navy"
            style={{ fontSize: "clamp(2.7rem, 5vw, 5.5rem)", lineHeight: 1.04, letterSpacing: "-0.01em" }}
          >
            {title}
          </h1>
          {body ? (
            <p className="mt-6 max-w-2xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-steel md:text-xl">
              {body}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
