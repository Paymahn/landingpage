import { caseStudies } from "@/content/case-studies";

export function CaseStudies() {
  return (
    <div className="grid gap-2 md:grid-cols-2">
      {caseStudies.map((cs) => (
        <details
          key={cs.slug}
          className="group border border-black/[0.10] p-5 outline-none"
        >
          <summary className="list-none cursor-pointer select-none outline-none">
            <div className="flex items-baseline justify-between gap-6">
              <div className="text-[15px] font-medium leading-6">{cs.title}</div>
              <div className="text-[13px] leading-6 text-black/60 tabular-nums">
                {cs.year}
              </div>
            </div>
          </summary>

          <div className="mt-6 space-y-6">
            {cs.writeUp.map((section, idx) => (
              <section key={`${cs.slug}-${idx}`} className="space-y-2">
                {section.heading ? (
                  <h3 className="text-[13px] font-medium uppercase tracking-[0.14em] text-black/70">
                    {section.heading}
                  </h3>
                ) : null}
                <div className="space-y-4 text-[15px] leading-7 text-black">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={`${cs.slug}-${idx}-${pIdx}`}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}


