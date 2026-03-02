import { CaseStudies } from "@/components/CaseStudies";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <header className="space-y-10">
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            Engineering Commerce.
          </h1>
          <div className="max-w-2xl space-y-4 text-[15px] leading-7 text-black/70">
            <p>
              Headless Shopify, AWS infrastructure, and custom builders—designed
              with restraint, shipped with rigor.
            </p>
            <p>
              This is placeholder copy to help you evaluate layout density,
              measure line-length, and see how multi-paragraph text behaves
              across breakpoints.
            </p>
          </div>
        </header>

        <section className="mt-20 md:mt-28" aria-labelledby="services">
          <div className="mb-10 flex items-baseline justify-between gap-6">
            <h2
              id="services"
              className="text-[13px] font-medium uppercase tracking-[0.14em] text-black/70"
            >
              Services
            </h2>
          </div>
          <Services />
        </section>

        <section className="mt-20 md:mt-28" aria-labelledby="case-studies">
          <div className="mb-10 flex items-baseline justify-between gap-6">
            <div className="space-y-3">
              <h2
                id="case-studies"
                className="text-[13px] font-medium uppercase tracking-[0.14em] text-black/70"
              >
                Case Studies
              </h2>
              <p className="text-[15px] leading-7 text-black/70">
                Project title and year only. Click to reveal the write-up.
              </p>
            </div>
          </div>
          <CaseStudies />
        </section>

        <footer className="mt-24 border-t border-black/[0.10] pt-8 text-[13px] leading-6 text-black/60">
          © {new Date().getFullYear()} Paymahn
        </footer>
      </div>
    </main>
  );
}
