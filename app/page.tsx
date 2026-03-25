"use client";

import { CaseStudies } from "@/components/CaseStudies";
import { Services } from "@/components/Services";
import Link from "next/link";

export default function Home() {
  const landingPages = [
    { name: "Tristen Muay Thai", type: "Fighter & Coach", url: "https://tristenmuaythai.com", result: "Live — tristenmuaythai.com" },
  ];

  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <header className="space-y-12">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold leading-[0.9] tracking-tighter md:text-8xl">
              Engineering<br />
              <span className="border-b-2 border-[#8B6914]">Commerce</span>.
            </h1>
          </div>
          <div className="max-w-2xl space-y-6 text-[16px] leading-relaxed text-black/60">
            <p>
              Headless Shopify, AWS infrastructure, and custom builders—designed
              with restraint, shipped with rigor.
            </p>
            <p>
              Specialised work for brands that demand performance. From full-scale
              platform migrations to bespoke interactive experiences.
            </p>
          </div>
        </header>

        {/* Section 1: Business Transformations */}
        <section className="mt-32 md:mt-48" aria-labelledby="transformations">
          <div className="mb-12 border-b border-[#8B6914]/15 pb-4">
            <div className="flex items-baseline justify-between gap-6">
              <h2
                id="transformations"
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40"
              >
                Business Transformations
              </h2>
              <span className="text-[11px] font-medium text-black/30 md:block hidden lowercase italic">
                Click to expand details & recordings
              </span>
            </div>
          </div>
          <CaseStudies />
        </section>

        {/* Section 2: Currently Building */}
        <section className="mt-32 md:mt-48" aria-labelledby="currently-building">
          <div className="mb-12 border-b border-[#8B6914]/15 pb-4">
            <div className="flex items-baseline justify-between gap-6">
              <h2
                id="currently-building"
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40"
              >
                Currently Building
              </h2>
              <span className="text-[11px] font-medium text-[#8B6914]/50 md:block hidden lowercase italic">
                Active projects
              </span>
            </div>
          </div>

          <div className="border-l-2 border-[#8B6914] pl-6 md:pl-8 space-y-6">
            <div className="flex items-baseline justify-between gap-6">
              <h3 className="text-[15px] font-semibold leading-6 uppercase tracking-tight">
                Chris Rees Academy (CRA)
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B6914]/60">
                In Progress
              </span>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {["Next.js", "CRM Integration", "Automation", "Lead Capture", "Timetable UI"].map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-bold uppercase tracking-widest text-black/35"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-4 text-[14px] leading-relaxed text-black/80 max-w-3xl">
              <p>
                A full website build for Chris Rees Academy — a well-known martial arts gym in Swansea with a reputation for producing high-level fighters and fostering a welcoming environment for beginners.
              </p>
              <p>
                The gym has no existing tech infrastructure. We&apos;re consolidating multiple disconnected CRMs into a single unified system, integrating it directly with the website so that when a visitor signs up for a free trial, their information is immediately pushed to staff through automated workflows — managing the full lifecycle of a new lead without manual effort.
              </p>
              <p>
                The site itself is optimised around free trial sign-ups as the primary conversion goal. It features an interactive timetable, dedicated coach profiles, and clear breakdowns of every class offered — all within a clean, connected UI that makes the breadth of what CRA offers immediately scannable.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Landing Pages */}
        <section className="mt-32 md:mt-48" aria-labelledby="featured-work">
          <div className="mb-12 border-b border-[#8B6914]/15 pb-4">
            <h2
              id="featured-work"
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40"
            >
              Featured Landing Pages
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {landingPages.map((work) => (
              <a key={work.name} href={work.url} target="_blank" rel="noopener noreferrer" className="group space-y-4 no-underline text-inherit">
                <div className="aspect-[4/3] w-full overflow-hidden bg-black/[0.03] border border-black/5 rounded-sm group-hover:border-[#8B6914]/20 transition-all duration-500">
                  <video
                    src="https://pub-0a3ee767ee3f40d798434134d4ef166c.r2.dev/case-studies/tristen-muaythai.mp4"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                    onMouseLeave={(e) => { const v = e.target as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
                    className="h-full w-full object-cover"
                    preload="metadata"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[14px] font-bold uppercase tracking-tight">{work.name}</h3>
                    <span className="text-[10px] font-bold text-black/20 uppercase tracking-widest">{work.type}</span>
                  </div>
                  <p className="text-[12px] text-black/50 italic">{work.result}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-[#8B6914]/10">
            <div className="max-w-xl space-y-6">
              <h3 className="text-2xl font-bold tracking-tight text-black">
                Performance Page Stack.
              </h3>
              <p className="text-[15px] leading-relaxed text-black/60">
                Bespoke landing pages built for speed and conversion. Hand-coded,
                mobile-first, and optimized for sub-2s load times.
              </p>
              <div className="pt-2">
                <Link
                  href="/landing-pages"
                  className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider border-b border-[#8B6914] text-black pb-0.5 hover:text-[#8B6914] transition-all"
                >
                  View Full Service →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mt-32 md:mt-48" aria-labelledby="services">
          <div className="mb-12 flex items-baseline justify-between gap-6 border-b border-[#8B6914]/15 pb-4">
            <h2
              id="services"
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40"
            >
              Core Services
            </h2>
          </div>
          <Services />
        </section>

        <footer className="mt-48 border-t border-[#8B6914]/10 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[12px] font-medium text-black/40">
          <div>© {new Date().getFullYear()} Paymahn — Software Engineer</div>
          <div className="flex gap-8">
            <a href="mailto:hello@paymahn.com" className="hover:text-[#8B6914] transition-colors">hello@paymahn.com</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#8B6914] transition-colors">LinkedIn</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
