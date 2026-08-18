export const CONTACT_INTRO = {
  eyebrow: "Contact",
  title: "Start a confidential conversation.",
  body: "Whether you are evaluating a strategic initiative, entering a new market, strengthening governance, or exploring AI-enabled transformation, we welcome a confidential conversation about your objectives and challenges.",
};

/**
 * The source content leaves these as explicit placeholders:
 * "[Insert Address Here]", "[Insert Contact Email Here]", "[Insert Phone
 * Number Here]". They are kept as null rather than invented, and the UI
 * renders an honest "to be provided" state for each.
 */
export const CONTACT_DETAILS = {
  address: null as string | null,
  email: null as string | null,
  phone: null as string | null,
  linkedInUrl: null as string | null,
};

export const AREA_OF_INTEREST_OPTIONS = [
  "Enterprise Strategy & Performance",
  "Risk, Governance & Decision Intelligence",
  "Digital Transformation & Cross-Border Growth",
  "General Inquiry",
] as const;
