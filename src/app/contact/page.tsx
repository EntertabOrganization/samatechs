import type { Metadata } from "next";
import { EnvelopeSimple, LinkedinLogo, MapPin, Phone } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { CONTACT_DETAILS, CONTACT_INTRO } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a confidential conversation with SAMATECHS about your strategic, risk, technology, or cross-border objectives.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow={CONTACT_INTRO.eyebrow} title={CONTACT_INTRO.title} body={CONTACT_INTRO.body} />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid-12">
            <div className="col-span-12 md:col-span-4">
              <p className="eyebrow text-sovereign">SAMATECHS</p>
              <dl className="mt-4 flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <MapPin size={20} weight="regular" className="mt-0.5 shrink-0 text-sovereign" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Address</dt>
                    <dd className="font-[family-name:var(--font-body)] text-base text-steel">
                      {CONTACT_DETAILS.address ?? "Address to be provided"}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <EnvelopeSimple
                    size={20}
                    weight="regular"
                    className="mt-0.5 shrink-0 text-sovereign"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd className="font-[family-name:var(--font-body)] text-base text-steel">
                      {CONTACT_DETAILS.email ? (
                        <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-sovereign">
                          {CONTACT_DETAILS.email}
                        </a>
                      ) : (
                        "Email to be provided"
                      )}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} weight="regular" className="mt-0.5 shrink-0 text-sovereign" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Phone</dt>
                    <dd className="font-[family-name:var(--font-body)] text-base text-steel">
                      {CONTACT_DETAILS.phone ?? "Phone to be provided"}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <LinkedinLogo
                    size={20}
                    weight="regular"
                    className="mt-0.5 shrink-0 text-sovereign"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="sr-only">LinkedIn</dt>
                    <dd className="font-[family-name:var(--font-body)] text-base text-steel">
                      {CONTACT_DETAILS.linkedInUrl ? (
                        <a
                          href={CONTACT_DETAILS.linkedInUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-sovereign"
                        >
                          LinkedIn
                        </a>
                      ) : (
                        "LinkedIn to be provided"
                      )}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="col-span-12 mt-12 md:col-span-7 md:col-start-6 md:mt-0">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
