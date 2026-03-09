import { CaseStudies } from "@/components/CaseStudies";
import { Services } from "@/components/Services";
import Link from "next/link";

export default function Home() {
  const landingPages = [
    { name: "Lanna Muay Thai", type: "Fighter & Coach", img: "https://picsum.photos/seed/lanna/800/600", result: "+42% lead conversion" },
    { name: "Elevate Fitness", type: "Online Coaching", img: "https://picsum.photos/seed/elevate/800/600", result: "Fully booked in 14 days" },
    { name: "Tayo Odunjo MMA", type: "PT & Classes", img: "https://picsum.photos/seed/tayo/800/600", result: "Sub-1.5s mobile load time" },
  ];

  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <header className="space-y-12">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold leading-[0.9] tracking-tighter md:text-8xl">
              Engineering<br />Commerce.
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
          <div className="mb-12 border-b border-black/5 pb-4">
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

        {/* Section 2: Featured Landing Pages */}
        <section className="mt-32 md:mt-48" aria-labelledby="featured-work">
          <div className="mb-12 border-b border-black/5 pb-4">
            <h2
              id="featured-work"
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40"
            >
              Featured Landing Pages
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {landingPages.map((work) => (
              <div key={work.name} className="group space-y-4">
                <div className="aspect-[4/3] w-full overflow-hidden bg-black/5 border border-black/5 rounded-sm grayscale transition-all duration-500 group-hover:grayscale-0">
                  <img
                    src={work.img}
                    alt={work.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[14px] font-bold uppercase tracking-tight">{work.name}</h3>
                    <span className="text-[10px] font-bold text-black/20 uppercase tracking-widest">{work.type}</span>
                  </div>
                  <p className="text-[12px] text-black/50 italic">{work.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-black/5">
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
                  className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 hover:text-black/60 hover:border-black/60 transition-all"
                >
                  View Full Service →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mt-32 md:mt-48" aria-labelledby="services">
          <div className="mb-12 flex items-baseline justify-between gap-6 border-b border-black/5 pb-4">
            <h2
              id="services"
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40"
            >
              Core Services
            </h2>
          </div>
          <Services />
        </section>

        <footer className="mt-48 border-t border-black/[0.05] pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[12px] font-medium text-black/40">
          <div>© {new Date().getFullYear()} Paymahn — Software Engineer</div>
          <div className="flex gap-8">
            <a href="mailto:hello@paymahn.com" className="hover:text-black transition-colors">hello@paymahn.com</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
