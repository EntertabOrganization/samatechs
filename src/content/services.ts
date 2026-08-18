export const SERVICES_INTRO = {
  eyebrow: "Services & Capabilities",
  title: "An Integrated Advisory Model",
  body: "Our three client-facing advisory pillars draw on four cross-cutting areas of expertise, depending on the client's needs:",
};

export type CrossCuttingArea = {
  title: string;
  description: string;
};

export const CROSS_CUTTING_AREAS: CrossCuttingArea[] = [
  {
    title: "Strategy",
    description: "Enterprise direction, performance, operating models, and transformation.",
  },
  {
    title: "Decision Intelligence",
    description: "Analytics, artificial intelligence, governance, risk, and executive decision support.",
  },
  {
    title: "Technology",
    description: "Digital strategy, automation, AI-enabled capabilities, and product design.",
  },
  {
    title: "Growth",
    description: "Cross-border expansion, partnerships, localization, and market entry.",
  },
];

export type ServicePillar = {
  id: "enterprise-strategy" | "risk-governance" | "digital-transformation";
  number: string;
  title: string;
  problem: string;
  approach: string;
  capabilities: string[];
  outcomes: string[];
};

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "enterprise-strategy",
    number: "1",
    title: "Enterprise Strategy & Performance",
    problem:
      "Organizations often struggle to translate strategic ambition into measurable execution. Leadership teams face competing priorities, fragmented performance information, unclear accountability, and increasing pressure to deliver sustainable results.",
    approach:
      "We help executive teams clarify strategic direction, define enterprise priorities, design operating models, and establish performance architectures that align organizational execution with long-term objectives. Our recommendations are grounded in quantitative analysis, governance discipline, and implementation feasibility.",
    capabilities: [
      "Enterprise and business-unit strategy",
      "Operating model design",
      "Strategic planning and prioritization",
      "Performance architecture",
      "KPI and OKR frameworks",
      "Executive dashboards",
      "Organizational and root-cause diagnostics",
      "Transformation governance and executive oversight",
    ],
    outcomes: [
      "Clearer strategic priorities",
      "Stronger executive alignment",
      "Measurable accountability",
      "Better resource allocation",
      "More disciplined organizational performance",
    ],
  },
  {
    id: "risk-governance",
    number: "2",
    title: "Risk, Governance & Decision Intelligence",
    problem:
      "Organizations generate more data than ever, yet executive decisions are often constrained by fragmented information, inconsistent governance, and poorly quantified risk.",
    approach:
      "We help leadership strengthen governance structures and transform organizational data into executive decision intelligence. By integrating governance, analytics, AI, and quantitative risk assessment, we improve visibility, accountability, and decision quality.",
    capabilities: [
      "Enterprise Risk Management and governance architecture",
      "Decision-rights and accountability frameworks",
      "GRC architecture and internal audit modernization",
      "Risk quantification, stress testing, and scenario analysis",
      "Executive dashboards and performance reporting",
      "Predictive analytics, statistical modeling, and Monte Carlo simulation",
      "AI strategy, opportunity assessment, and executive copilots",
      "AI-enabled automation and agentic AI",
      "Domain applications using retrieval-augmented generation, language models, and computer vision",
    ],
    outcomes: [
      "Stronger visibility into risk and performance",
      "Clearer accountability and decision rights",
      "Faster access to decision-relevant insights",
      "Earlier identification of emerging risks",
      "More consistent, evidence-based decisions",
    ],
  },
  {
    id: "digital-transformation",
    number: "3",
    title: "Digital Transformation & Cross-Border Growth",
    problem:
      "Organizations pursuing digital transformation or entering new markets must navigate technology choices, commercial strategy, regulatory complexity, and local market dynamics simultaneously.",
    approach:
      "We advise organizations on technology-enabled growth and market expansion between the U.S. and GCC. Our approach combines digital strategy, commercial structuring, AI-enabled solution design, and regional expertise to reduce execution risk and accelerate market readiness.",
    capabilities: [
      "Digital transformation roadmaps",
      "AI, cloud, and automation strategy",
      "Digital product and SaaS strategy",
      "U.S.–GCC market-entry and localization strategy",
      "Regulatory navigation and commercial structuring",
      "Strategic partner identification",
      "Ecosystem mapping",
      "Investment readiness and launch governance",
    ],
    outcomes: [
      "Faster market entry",
      "Reduced expansion risk",
      "Stronger commercial partnerships",
      "Scalable digital operating models",
      "Greater alignment between technology investment and business value",
    ],
  },
];
