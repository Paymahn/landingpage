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
        label: "Previous Site — What They Had Before",
      },
    ],
    writeUp: [
      {
        heading: "The Problem",
        paragraphs: [
          "Road Ready HGV had a website that was slow, confusing, and didn't do them any favours. People were landing on it and bouncing — no clear pricing, no obvious way to book, and it looked outdated on mobile.",
        ],
      },
      {
        heading: "What I Did",
        paragraphs: [
          "Built them a completely new site from scratch using Next.js. Everything a potential customer needs — courses, prices, locations — is right there, no digging required. Every page has a clear call-to-action: book a call, send a WhatsApp, fill in a form.",
          "I also set up their Meta Pixel and Google Analytics before handover so they're ready to run paid ads on TikTok, Instagram, and Facebook whenever they want. The site loads in under 2 seconds on mobile, which matters a lot when you're paying for ad clicks.",
        ],
      },
      {
        heading: "Result",
        paragraphs: [
          "They went from a site that was actively losing them business to one that looks professional, loads fast, and is set up to convert — whether traffic comes from Google or a social media campaign.",
        ],
      },
    ],
  },
  {
    slug: "pressure-performance-transformation",
    title: "Pressure Performance — Full Business Transformation",
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
        label: "Old Site — What They Had Before",
      },
      {
        type: "video",
        url: "https://pub-0a3ee767ee3f40d798434134d4ef166c.r2.dev/case-studies/pressure-before-1.mp4",
        label: "Old Wix Site Recording — Part 1",
      },
      {
        type: "video",
        url: "https://pub-0a3ee767ee3f40d798434134d4ef166c.r2.dev/case-studies/pressure-before-2.mp4",
        label: "Old Wix Site Recording — Part 2",
      },
    ],
    writeUp: [
      {
        heading: "The Problem",
        paragraphs: [
          "Pressure Performance is a custom martial arts brand — they were stuck on Wix and it was holding them back. Slow site, limited customisation, and they had no way of letting customers design their own gear online.",
        ],
      },
      {
        heading: "What I Did",
        paragraphs: [
          "Moved them entirely from Wix to Shopify — every product, every customer, every bit of SEO carried over. No rankings lost, no data left behind.",
          "Built a custom Shopify theme from scratch with around 10 fully editable sections so they can update their own site without needing me. Then built a 2D custom kit builder (more on that below) that lets customers design their own gear in real time.",
        ],
      },
      {
        heading: "Result",
        paragraphs: [
          "Night and day difference. Faster site, happier customers, and the owners can actually manage their own store now. Check it out at pressureperformance.co.uk",
        ],
      },
    ],
  },
  {
    slug: "pressure-2d-builder",
    title: "Pressure Performance — 2D Custom Kit Builder",
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
        heading: "The Problem",
        paragraphs: [
          "Pressure sells custom fight gear — shorts, rash guards, the works. Before the builder, every order meant endless DMs back and forth trying to figure out what the customer actually wanted. \"Can you move the logo left a bit?\" \"What about this colour instead?\" It was eating up hours.",
        ],
      },
      {
        heading: "What I Built",
        paragraphs: [
          "A 2D configurator that sits right on the Shopify product page. Built it with vanilla JS and HTML5 Canvas, wired into Shopify's backend. Customers pick their garment, choose a design, drag their logo on, add text — and see exactly what they're getting before they buy.",
          "When they add to cart, all the customisation details go straight through to the order. No interpretation needed, no back-and-forth.",
        ],
      },
      {
        heading: "The Impact",
        paragraphs: [
          "It's already paid for itself. The time saved on the customisation process alone covered the cost of building it.",
          "But the best bit — the client now runs design competitions on social media. Customers share their custom builds, it drives engagement, and people come back to the site to have a go themselves. A tool that was built to save time ended up becoming a marketing channel.",
        ],
      },
    ],
  },
];
