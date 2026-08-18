"use client";

import { useActionState, useEffect, useRef } from "react";
import { CheckCircle, Info, WarningCircle } from "@phosphor-icons/react/ssr";
import { Field } from "./Field";
import { ClayButton } from "@/components/ui/ClayButton";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { AREA_OF_INTEREST_OPTIONS } from "@/content/contact";

const initialState: ContactFormState = { status: "idle" };

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  organization: "Organization",
  jobTitle: "Job title",
  email: "Email",
  areaOfInterest: "Area of interest",
  message: "Message",
  consent: "Consent",
};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const summaryRef = useRef<HTMLDivElement>(null);
  const errorEntries = state.fieldErrors ? Object.entries(state.fieldErrors) : [];

  useEffect(() => {
    if (state.status === "error" || state.status === "success" || state.status === "not-configured") {
      summaryRef.current?.focus();
    }
  }, [state]);

  return (
    <form action={formAction} noValidate className="flex flex-col gap-6">
      {errorEntries.length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-[16px] border border-critical/40 bg-critical/5 p-5"
        >
          <p className="flex items-center gap-2 font-[family-name:var(--font-body)] text-sm font-semibold text-critical">
            <WarningCircle size={18} weight="fill" aria-hidden="true" />
            {state.message}
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 font-[family-name:var(--font-body)] text-sm text-critical">
            {errorEntries.map(([field, message]) => (
              <li key={field}>
                {FIELD_LABELS[field] ?? field}: {message}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {state.status === "success" ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="status"
          className="flex items-start gap-3 rounded-[16px] border border-success/40 bg-success/10 p-5"
        >
          <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
          <p className="font-[family-name:var(--font-body)] text-sm text-navy">{state.message}</p>
        </div>
      ) : null}

      {state.status === "not-configured" ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="status"
          className="flex items-start gap-3 rounded-[16px] border border-amber/40 bg-amber/10 p-5"
        >
          <Info size={20} weight="fill" className="mt-0.5 shrink-0 text-amber" aria-hidden="true" />
          <p className="font-[family-name:var(--font-body)] text-sm text-navy">{state.message}</p>
        </div>
      ) : null}

      {state.status === "error" && errorEntries.length === 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="flex items-start gap-3 rounded-[16px] border border-critical/40 bg-critical/5 p-5"
        >
          <WarningCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-critical" aria-hidden="true" />
          <p className="font-[family-name:var(--font-body)] text-sm text-navy">{state.message}</p>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" error={state.fieldErrors?.name} />
        <Field
          label="Organization"
          name="organization"
          required
          autoComplete="organization"
          error={state.fieldErrors?.organization}
        />
        <Field
          label="Job title"
          name="jobTitle"
          required
          autoComplete="organization-title"
          error={state.fieldErrors?.jobTitle}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
          error={state.fieldErrors?.email}
        />
      </div>

      <Field
        label="Area of interest"
        name="areaOfInterest"
        type="select"
        required
        options={AREA_OF_INTEREST_OPTIONS}
        error={state.fieldErrors?.areaOfInterest}
      />

      <Field label="Message" name="message" type="textarea" required error={state.fieldErrors?.message} />

      <div>
        <label className="flex items-start gap-3 font-[family-name:var(--font-body)] text-sm text-steel">
          <input
            type="checkbox"
            name="consent"
            required
            aria-invalid={Boolean(state.fieldErrors?.consent)}
            aria-describedby={state.fieldErrors?.consent ? "field-consent-error" : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-mist text-pulse focus-visible:outline-2 focus-visible:outline-pulse"
          />
          <span>
            I consent to SAMATECHS processing the information above to respond to my inquiry, in line with its
            privacy policy. <span aria-hidden="true" className="text-critical">*</span>
          </span>
        </label>
        {state.fieldErrors?.consent ? (
          <p id="field-consent-error" role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm text-critical">
            <WarningCircle size={15} weight="fill" aria-hidden="true" />
            {state.fieldErrors.consent}
          </p>
        ) : null}
      </div>

      <ClayButton type="submit" variant="primary" disabled={pending} className="self-start">
        {pending ? "Sending…" : "Send Message"}
      </ClayButton>
    </form>
  );
}
