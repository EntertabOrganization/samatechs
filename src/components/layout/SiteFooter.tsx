import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "@/components/brand/Logo";
import { NAV_LINKS } from "@/content/nav";
import { CONTACT_DETAILS } from "@/content/contact";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="clay-dark mt-auto" data-surface="dark">
      <Container className="py-16">
        <div className="grid-12">
          <div className="col-span-12 md:col-span-5">
            <Logo tone="light" className="-ml-2" />
            <p className="mt-4 max-w-sm font-[family-name:var(--font-body)] text-sm leading-relaxed text-mist">
              Strategic advisory and analytics for leadership teams navigating complex strategic, risk, technology,
              and cross-border challenges.
            </p>
          </div>

          <nav className="col-span-6 mt-10 md:col-span-3 md:mt-0" aria-label="Footer navigation">
            <p className="eyebrow text-intelligence">Navigate</p>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-body)] text-sm text-white/85 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 mt-10 md:col-span-4 md:mt-0">
            <p className="eyebrow text-intelligence">Contact</p>
            <dl className="mt-4 flex flex-col gap-2 font-[family-name:var(--font-body)] text-sm text-white/85">
              <div>
                <dt className="sr-only">Address</dt>
                <dd>{CONTACT_DETAILS.address ?? "Address to be provided"}</dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  {CONTACT_DETAILS.email ? (
                    <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-white">
                      {CONTACT_DETAILS.email}
                    </a>
                  ) : (
                    "Email to be provided"
                  )}
                </dd>
              </div>
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>{CONTACT_DETAILS.phone ?? "Phone to be provided"}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/50 font-[family-name:var(--font-body)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} SAMATECHS. All rights reserved.</p>
          <p>Strategic Clarity. Measurable Impact.</p>
        </div>
      </Container>
    </footer>
  );
}
