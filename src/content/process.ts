export type ProcessStepData = {
  number: string;
  title: string;
  body: string;
};

export const PROCESS_INTRO = {
  eyebrow: "How We Work",
  title: "From ambiguity to disciplined action.",
};

export const PROCESS_STEPS: ProcessStepData[] = [
  {
    number: "01",
    title: "Diagnose",
    body: "We begin by clarifying the real problem. Through structured assessment, stakeholder engagement, and quantitative analysis, we define root causes, surface strategic trade-offs, and align leadership around the decisions that matter most.",
  },
  {
    number: "02",
    title: "Architect",
    body: "We design implementation-ready strategies, operating models, governance structures, and performance frameworks. Every recommendation is grounded in measurable outcomes, risk implications, and organizational realities. Our work is designed for execution, with clear accountability and defined success metrics.",
  },
  {
    number: "03",
    title: "Advise Through Delivery",
    body: "We remain engaged as trusted advisors during critical execution phases, providing executive oversight, constructive challenge, and course correction while enabling client teams to retain ownership of implementation. Selective implementation support is available where it adds value and advances the objectives of the engagement.",
  },
  {
    number: "04",
    title: "Analytical Rigor",
    body: "Our advisory work is grounded in quantitative discipline and evidence-based decision frameworks. Depending on engagement scope, we incorporate predictive analytics, machine learning-informed insights, Monte Carlo simulation, risk quantification, Lean Six Sigma diagnostics, and executive dashboard architecture to strengthen decision quality in complex, high-accountability environments.",
  },
];
