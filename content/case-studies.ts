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
    tags: ["Next.js", "Tailwind CSS", "High Performance", "Social Media Ready"],
    media: [
      {
        type: "video",
        url: "https://pub-0a3ee767ee3f40d798434134d4ef166c.r2.dev/case-studies/road-ready-after.mp4",
        label: "Finished Site Recording",
      },
      {
        type: "video",
        url: "https://pub-0a3ee767ee3f40d798434134d4ef166c.r2.dev/case-studies/road-ready-before.mp4",
        label: "Previous Site Recording - Performance & UX Audit",
      },
    ],
    writeUp: [
      {
        heading: "Context",
        paragraphs: [
          "A complete rebuild of the Road Ready HGV platform, moving from a legacy system to a modern, high-performance web architecture.",
          "The previous site was slow, difficult to navigate, and lacked clear calls-to-action — costing the business leads on every visit.",
        ],
      },
      {
        heading: "What Was Built",
        paragraphs: [
          "A fast-loading Next.js and Tailwind CSS site with all course information clearly structured and accessible within seconds. Every page features persistent CTAs — enquiry forms, phone links, and WhatsApp buttons — so visitors are never more than one tap from booking.",
          "Built-in Meta Pixel and Google Analytics integration from day one, preparing the business for paid social media campaigns across TikTok, Instagram, and Facebook. The site is ready to receive ad traffic and convert it immediately.",
        ],
      },
      {
        heading: "Key Benefits",
        paragraphs: [
          "Sub-2 second load times on mobile — critical for ad traffic where users bounce fast. Clean, scannable layout that presents pricing, locations, and course details without friction.",
          "Social media campaign readiness with tracking pixels pre-installed, Open Graph meta tags for link previews, and a mobile-first design that matches how ad traffic actually arrives.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "A platform that stands out in the HGV training industry. Faster, clearer, and built to convert — whether traffic comes from Google, social ads, or word of mouth.",
        ],
      },
    ],
  },
  {
    slug: "pressure-performance-transformation",
    title: "Pressure Performance Transformation",
    year: 2025,
    tags: ["Shopify", "Custom Theme", "Wix Migration", "2D Builder"],
    media: [
      {
        type: "video",
        url: "https://pub-0a3ee767ee3f40d798434134d4ef166c.r2.dev/case-studies/pressure-finished.mp4",
        label: "Finished Site Recording",
      },
      {
        type: "video",
        url: "https://pub-0a3ee767ee3f40d798434134d4ef166c.r2.dev/case-studies/pressure-builder.mp4",
        label: "Old Pressure Performance Home Page",
      },
      {
        type: "video",
        url: "https://pub-0a3ee767ee3f40d798434134d4ef166c.r2.dev/case-studies/pressure-before-1.mp4",
        label: "Previous Site Recording (Wix) - Part 1",
      },
      {
        type: "video",
        url: "https://pub-0a3ee767ee3f40d798434134d4ef166c.r2.dev/case-studies/pressure-before-2.mp4",
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
    slug: "pressure-2d-builder",
    title: "Pressure Performance — 2D Custom Builder",
    year: 2025,
    tags: ["Custom Tool", "E-Commerce", "Real-Time Preview", "Shopify", "Liquid"],
    media: [
      {
        type: "video",
        url: "https://pub-0a3ee767ee3f40d798434134d4ef166c.r2.dev/case-studies/pressure-builder-preview.mp4",
        label: "2D Builder — Full Walkthrough",
      },
    ],
    writeUp: [
      {
        heading: "Context",
        paragraphs: [
          "Pressure Performance sells fully custom martial arts gear — shirts, shorts, and fight kits with bespoke designs. The old workflow relied on lengthy back-and-forth messages to confirm layouts, colours, and logo placement, costing the business hours on every single order.",
        ],
      },
      {
        heading: "What Was Built",
        paragraphs: [
          "A fully interactive 2D configurator built with vanilla JavaScript, HTML5 Canvas, and Shopify Liquid — embedded directly into the storefront. Customers choose a garment type, pick a base design, upload logos, place text, and preview their custom kit in real time before adding to cart.",
          "Every configuration syncs with Shopify's variant and metafield system, so the order arrives with all customisation details attached — no manual interpretation needed.",
        ],
      },
      {
        heading: "Business Impact",
        paragraphs: [
          "The builder has already paid for itself. The client has recouped the development cost through the time saved on the customisation process alone — what used to take multiple messages back and forth now happens instantly on-site.",
          "Beyond efficiency, the builder has become a marketing tool. The client runs design competitions through social media, encouraging customers to share their custom builds — driving engagement, reach, and repeat traffic back to the store.",
        ],
      },
    ],
  },
];
