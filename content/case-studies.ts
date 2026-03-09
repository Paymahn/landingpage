export type CaseStudySection = {
  heading?: string;
  paragraphs: readonly string[];
};

export type CaseStudyMedia = {
  type: "video" | "image";
  url: string;
  label?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  year: number | string;
  writeUp: readonly CaseStudySection[];
  media?: readonly CaseStudyMedia[];
  tags?: readonly string[];
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "road-ready-hgv-transformation",
    title: "Road Ready HGV Transformation",
    year: 2025,
    tags: ["Next.js", "Tailwind CSS", "High Performance"],
    media: [
      {
        type: "video",
        url: "/videos/case-studies/road-ready-before.mp4",
        label: "Previous Site Recording - Performance & UX Audit",
      },
    ],
    writeUp: [
      {
        heading: "Context",
        paragraphs: [
          "A complete rebuild of the Road Ready HGV platform, moving from a legacy system to a modern, high-performance web architecture.",
          "The focus was on speed, accessibility, and a premium user experience that converts leads for HGV training.",
        ],
      },
      {
        heading: "Tech Stack",
        paragraphs: [
          "Built using Next.js and Tailwind CSS for a lean, lightning-fast storefront. The transition resulted in significantly improved Core Web Vitals and a more maintainable codebase.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "A state-of-the-art platform that stands out in the HGV training industry. Faster load times, better mobile handling, and a cleaner path to conversion.",
        ],
      },
    ],
  },
  {
    slug: "pressure-performance-transformation",
    title: "Pressure Performance Transformation",
    year: 2025,
    media: [
      {
        type: "video",
        url: "/videos/case-studies/pressure-builder.mp4",
        label: "2D Custom Builder Preview",
      },
      {
        type: "video",
        url: "/videos/case-studies/pressure-before-1.mp4",
        label: "Previous Site Recording (Wix) - Part 1",
      },
      {
        type: "video",
        url: "/videos/case-studies/pressure-before-2.mp4",
        label: "Previous Site Recording (Wix) - Part 2",
      },
    ],
    writeUp: [
      {
        heading: "Context",
        paragraphs: [
          "Just completed a comprehensive business transformation for leading custom martial arts brand Pressure Performance.",
          "An entire data migration from Wix to Shopify, maintaining all SEO, customer and product information.",
        ],
      },
      {
        heading: "Approach",
        paragraphs: [
          "A custom theme built on top of Dawn 2.0 with close to 10 custom and fully editable Shopify sections.",
          "We focused on performance and maintaining the brand's established search presence while moving to a more robust commerce platform.",
        ],
      },
      {
        heading: "The 2D Builder",
        paragraphs: [
          "A fully editable 2D builder for their entire custom range. Customers can choose shirt and short type, choose the base design, add logos, and see text placement come to life in real-time.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "A modern, high-converting Shopify store that gives both the customers and the business owners more control and a better user experience.",
          "Check it out at www.pressureperformance.co.uk",
        ],
      },
    ],
  },
  {
    slug: "next-js-site-01",
    title: "Next.js Site #01",
    year: "Coming Soon",
    writeUp: [
      {
        heading: "Upcoming Project",
        paragraphs: [
          "A comprehensive website built in the high-performing Next.js & Tailwind stack. Focusing on speed, SEO, and premium user experience.",
          "Currently in development. Stay posted for the full launch.",
        ],
      },
    ],
  },
  {
    slug: "next-js-site-02",
    title: "Next.js Site #02",
    year: "Coming Soon",
    writeUp: [
      {
        heading: "Upcoming Project",
        paragraphs: [
          "Another high-performance application leveraging the power of Next.js and Tailwind CSS.",
          "Focusing on specialised work and fast delivery for modern web requirements.",
        ],
      },
    ],
  },
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
        ],
      },
      {
        heading: "Approach",
        paragraphs: [
          "We split the surface area into a headless storefront and a deliberately boring backend. The storefront focused on performance and content agility; the backend focused on correctness and integration clarity.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "A storefront that loads quickly, scales cleanly, and stays easy to evolve. Marketing regained autonomy while engineering kept the system legible.",
        ],
      },
    ],
  },
];
