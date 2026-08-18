"use server";

export type ContactFieldErrors = Partial<
  Record<"name" | "organization" | "jobTitle" | "email" | "areaOfInterest" | "message" | "consent", string>
>;

export type ContactFormState = {
  status: "idle" | "success" | "error" | "not-configured";
  message?: string;
  fieldErrors?: ContactFieldErrors;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * The only backend seam on this site. Posts validated form data to
 * process.env.SAMATECHS_CONTACT_ENDPOINT. When that variable is unset —
 * which it is out of the box, since no contact backend was supplied —
 * this returns an honest "not configured" state. It never fakes success.
 */
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const organization = String(formData.get("organization") ?? "").trim();
  const jobTitle = String(formData.get("jobTitle") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const areaOfInterest = String(formData.get("areaOfInterest") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const consent = formData.get("consent") === "on";

  const fieldErrors: ContactFieldErrors = {};
  if (!name) fieldErrors.name = "Enter your name.";
  if (!organization) fieldErrors.organization = "Enter your organization.";
  if (!jobTitle) fieldErrors.jobTitle = "Enter your job title.";
  if (!email || !EMAIL_PATTERN.test(email)) fieldErrors.email = "Enter a valid email address.";
  if (!areaOfInterest) fieldErrors.areaOfInterest = "Select an area of interest.";
  if (!message) fieldErrors.message = "Enter a message.";
  if (!consent) fieldErrors.consent = "Consent is required before this form can be submitted.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields before submitting.",
      fieldErrors,
    };
  }

  const endpoint = process.env.SAMATECHS_CONTACT_ENDPOINT;
  if (!endpoint) {
    return {
      status: "not-configured",
      message:
        "This form is not yet connected to a live submission endpoint. Please reach out directly using the contact details on this page in the meantime.",
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, organization, jobTitle, email, areaOfInterest, message, consent }),
    });

    if (!response.ok) {
      throw new Error(`Contact endpoint responded with status ${response.status}`);
    }

    return {
      status: "success",
      message: "Thank you — your message has been sent. A member of our team will be in touch shortly.",
    };
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again, or reach out directly.",
    };
  }
}
