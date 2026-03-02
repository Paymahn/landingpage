export type CaseStudySection = {
  heading?: string;
  paragraphs: readonly string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  year: number;
  writeUp: readonly CaseStudySection[];
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "atlas-replatform",
    title: "Atlas Replatform",
    year: 2025,
    writeUp: [
      {
        heading: "Context",
        paragraphs: [
          "A fast-growing catalog outpaced theme-based constraints: merchandising demanded flexibility, marketing wanted speed, and operations needed predictability.",
          "The objective was to modernize without losing what already worked: reliable checkout, stable integrations, and a cadence the team could maintain.",
          "This paragraph is filler to show how a third paragraph changes pacing. It’s intentionally long enough to wrap on multiple lines, so you can evaluate line length and leading across devices.",
        ],
      },
      {
        heading: "Approach",
        paragraphs: [
          "We split the surface area into a headless storefront and a deliberately boring backend. The storefront focused on performance and content agility; the backend focused on correctness and integration clarity.",
          "A clean API boundary reduced coupling, made releases safer, and allowed iterative migration instead of a risky big-bang launch.",
          "We also established a content model that’s easy to extend. The goal here is not visual flair, but a clear reading experience: headings, paragraphs, and consistent spacing.",
        ],
      },
      {
        heading: "Notes",
        paragraphs: [
          "Filler note: keep units small, keep boundaries explicit, keep the system readable. This section exists purely to preview an extra heading in the write-up.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "A storefront that loads quickly, scales cleanly, and stays easy to evolve. Marketing regained autonomy while engineering kept the system legible.",
          "Placeholder outcome text: reduced friction in daily updates, fewer regressions during releases, and a calmer operational posture.",
        ],
      },
    ],
  },
  {
    slug: "meridian-aws-foundation",
    title: "Meridian AWS Foundation",
    year: 2024,
    writeUp: [
      {
        heading: "Context",
        paragraphs: [
          "Commerce workloads are spiky: campaigns, drops, and seasonal traffic punish brittle infrastructure.",
          "The goal was a foundation that could scale without drama and remain transparent to operators.",
          "More filler: this line exists to demonstrate how consecutive paragraphs behave in a text-heavy layout and how the page feels when content expands.",
        ],
      },
      {
        heading: "Approach",
        paragraphs: [
          "We codified environments, tightened IAM, and standardized observability. Deploys became repeatable and incidents became diagnosable.",
          "The design favored fewer moving parts, clear ownership boundaries, and a bias toward systems that fail loudly and recover quickly.",
          "Additional placeholder: documentation and runbooks were treated as part of the deliverable, not an afterthought. This ensures the section reads like a narrative, not a bullet list.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "A stable baseline for growth: faster deployments, clearer telemetry, and infrastructure that behaves like a product—versioned, reviewed, and auditable.",
          "Filler outcome paragraph: the team gained confidence to ship changes more frequently, because rollback paths and observability were designed in from day one.",
        ],
      },
    ],
  },
  {
    slug: "custom-builder-suite",
    title: "Custom Builder Suite",
    year: 2023,
    writeUp: [
      {
        heading: "Context",
        paragraphs: [
          "Teams building on Shopify often repeat the same work: product ingestion, catalog rules, bespoke admin tooling, and workflows that don’t quite fit.",
          "The aim was to create a reusable set of builders that kept the surface area consistent and reduced time-to-shipping for new features.",
          "Placeholder context: the constraints were familiar—tight deadlines, many stakeholders, and the need for a stable platform that doesn’t block experimentation.",
        ],
      },
      {
        heading: "Approach",
        paragraphs: [
          "We built opinionated, composable modules—each small enough to understand, but structured to be extended safely.",
          "The focus was on ergonomics: predictable interfaces, typed boundaries, and documentation that explains decisions, not just usage.",
          "More filler: the modules are designed to be boring in the best way—easy to review, easy to test, easy to replace. This paragraph is here to show how longer prose feels.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "A toolkit that accelerates delivery while keeping complexity contained. New initiatives start from a solid base instead of reinventing fundamentals.",
          "Filler outcome: fewer one-off solutions, more consistency in implementation, and a path for gradual improvements without rewrites.",
        ],
      },
    ],
  },
];


