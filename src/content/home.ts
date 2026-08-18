export const HERO = {
  headline: ["Strategic Clarity.", "Measurable Impact."],
  subheadline:
    "SAMATECHS advises leadership teams on complex strategic, operational, risk, technology, and cross-border challenges—designing implementation-ready solutions that strengthen decision-making and deliver measurable results.",
  primaryCta: { label: "Schedule a Consultation", href: "/contact" },
  secondaryCta: { label: "Explore Our Capabilities", href: "/services" },
};

export type AdvisoryPillar = {
  id: "enterprise-strategy" | "risk-governance" | "digital-transformation";
  title: string;
  description: string;
  focus: string[];
  linkLabel: string;
  href: string;
};

export const PILLARS_INTRO =
  "We combine strategy, decision intelligence, technology, and cross-border expertise to help organizations navigate complexity from diagnosis through execution.";

export const ADVISORY_PILLARS: AdvisoryPillar[] = [
  {
    id: "enterprise-strategy",
    title: "Enterprise Strategy & Performance",
    description:
      "We help executive teams define strategic direction, translate priorities into measurable performance, and establish the operating models and governance structures required for disciplined execution.",
    focus: [
      "Enterprise and business-unit strategy",
      "Operating model and transformation design",
      "Performance frameworks, KPIs, and OKRs",
      "Root-cause diagnostics and operational optimization",
      "Program governance and executive oversight",
    ],
    linkLabel: "Explore Enterprise Strategy & Performance",
    href: "/services#enterprise-strategy",
  },
  {
    id: "risk-governance",
    title: "Risk, Governance & Decision Intelligence",
    description:
      "We help leadership teams strengthen governance, improve risk visibility, and transform fragmented data into timely, decision-relevant insight through analytics and artificial intelligence.",
    focus: [
      "Enterprise risk and governance architecture",
      "Risk quantification and scenario analysis",
      "Executive dashboards and performance reporting",
      "Predictive analytics and statistical modeling",
      "AI strategy, decision-support tools, and automation",
    ],
    linkLabel: "Explore Risk, Governance & Decision Intelligence",
    href: "/services#risk-governance",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation & Cross-Border Growth",
    description:
      "We help organizations design technology-enabled growth strategies and navigate U.S.–GCC market expansion with greater commercial, regulatory, and execution confidence.",
    focus: [
      "Digital transformation and product strategy",
      "AI, cloud, and automation advisory",
      "U.S.–GCC market-entry and localization strategy",
      "Regulatory and commercial structuring",
      "Strategic partnerships and ecosystem mapping",
    ],
    linkLabel: "Explore Digital Transformation & Cross-Border Growth",
    href: "/services#digital-transformation",
  },
];

export const WHO_WE_SERVE = {
  intro:
    "SAMATECHS works with leadership teams navigating complex strategic, operational, technological, risk, and cross-border challenges. Our senior-led advisory model is particularly suited to organizations that require rigorous analysis, executive alignment, and implementation-ready solutions.",
  segments: [
    {
      title: "Executive and Governance Leaders",
      description:
        "Boards, CEOs, executive leadership teams, strategy offices, risk leaders, and transformation offices.",
    },
    {
      title: "Public and Institutional Organizations",
      description:
        "Government entities, public institutions, development organizations, and regulated enterprises operating in high-accountability environments.",
    },
    {
      title: "Growth and Innovation Organizations",
      description:
        "Family businesses, investment organizations, technology companies, and organizations pursuing digital transformation or U.S.–GCC market expansion.",
    },
  ],
};

export const WHY_SAMATECHS = [
  {
    title: "Senior-Led Advisory",
    description:
      "Every engagement is led directly by experienced partners who remain involved from problem diagnosis through executive alignment and delivery oversight.",
  },
  {
    title: "Integrated Expertise",
    description:
      "We bring together enterprise strategy, analytics, artificial intelligence, risk, technology, and cross-border market expertise within a single advisory model.",
  },
  {
    title: "Evidence-Based Recommendations",
    description:
      "Our recommendations combine structured problem-solving, quantitative analysis, executive judgment, and an understanding of organizational realities.",
  },
  {
    title: "Implementation-Ready Design",
    description:
      "We develop strategies, operating models, governance structures, and decision frameworks designed for execution.",
  },
];

/**
 * The source content includes an editorial instruction here — not copy:
 * "[Replace or supplement with client-approved and quantified case results
 * as they become available]". It must never render on the site; it is
 * left here only as a note for whoever supplies approved results later.
 */
export const PARTNER_EXPERIENCE = {
  title: "Experience Our Partners Bring",
  intro: "The experience of our partners includes:",
  items: [
    "Defining enterprise strategies and governance structures",
    "Designing analytics-driven performance frameworks",
    "Developing AI and data-science applications across multiple sectors",
    "Strengthening executive risk and decision-intelligence capabilities",
    "Supporting cross-border market entry and strategic partnerships",
  ],
};

export const CLOSING_CTA = {
  title: "Complex challenges require integrated thinking.",
  body: "Whether you are redefining enterprise strategy, strengthening governance, exploring AI-enabled transformation, or entering a new market, SAMATECHS can help you move from ambiguity to disciplined action.",
  cta: { label: "Start a Confidential Conversation", href: "/contact" },
};
