"use client";

import { CaseStudies } from "@/components/CaseStudies";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <header className="space-y-12">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold leading-[0.9] tracking-tighter md:text-8xl">
              Engineering what you need.
            </h1>
          </div>
          <div className="max-w-2xl space-y-6 text-[16px] leading-relaxed text-black/60">
            <p>
              I'm a software engineer you can hire to build, fix, or completely redo your online presence. Shopify stores, custom websites, landing pages, internal tools — if it lives on the internet, I can build it.
            </p>
            <p>
              I always aim to provide nothing less than 100% to my clients, you've invested in me, I'll invest in you.
            </p>
          </div>
        </header>

        {/* Section 1: Business Transformations */}
        <section className="mt-32 md:mt-48" aria-labelledby="transformations">
          <div className="mb-12 border-b border-black/10 pb-4">
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
          <div className="mb-12 border-b border-black/10 pb-4">
            <div className="flex items-baseline justify-between gap-6">
              <h2
                id="currently-building"
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40"
              >
                Currently Building
              </h2>
              <span className="text-[11px] font-medium text-black/30 md:block hidden lowercase italic">
                Active projects
              </span>
            </div>
          </div>

          <div className="border-l-2 border-black pl-6 md:pl-8 space-y-6">
            <div className="flex items-baseline justify-between gap-6">
              <h3 className="text-[15px] font-semibold leading-6 uppercase tracking-tight">
                Chris Rees Academy (CRA)
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">
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
                CRA is the most storied martial arts gym in Swansea — known for producing high-level fighters and being a great place for complete beginners. They had zero tech setup. Multiple CRMs that didn't talk to each other,  no website worth mentioning, and no way of capturing leads online.
              </p>
              <p>
                I'm building them a full site from scratch, wiring it into a single CRM so that when someone signs up for a free trial on the website, the staff get notified instantly and the lead is automatically followed up.
              </p>
              <p>
                The site gives CRA a strong online presence — interactive timetable, coach profiles, class breakdowns, and a feel for what the gym is actually like. 
              </p>
            </div>
          </div>
        </section>



        {/* Services Section */}
        <section className="mt-32 md:mt-48" aria-labelledby="services">
          <div className="mb-12 flex items-baseline justify-between gap-6 border-b border-black/10 pb-4">
            <h2
              id="services"
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40"
            >
              Core Services
            </h2>
          </div>
          <Services />
        </section>

        <footer className="mt-48 border-t border-black/10 pt-12 text-[12px] font-medium text-black/40">
          <div>© {new Date().getFullYear()} Paymahn — Engineer for Hire</div>
        </footer>
      </div>
    </main>
  );
}
