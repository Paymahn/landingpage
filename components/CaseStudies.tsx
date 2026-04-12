import { caseStudies } from "@/content/case-studies";
import Image from "next/image";

export function CaseStudies() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {caseStudies.map((cs) => (
        <details
          key={cs.slug}
          className="group border border-black/[0.10] p-5 outline-none bg-white transition-all hover:border-black/20"
        >
          <summary className="list-none cursor-pointer select-none outline-none">
            <div className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between gap-6">
                <div className="text-[15px] font-semibold leading-6 uppercase tracking-tight">{cs.title}</div>
                <div className="text-[13px] leading-6 text-black/60 tabular-nums font-medium">
                  {cs.year}
                </div>
              </div>
              {cs.tags && cs.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 bg-black/5 text-black/50 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </summary>

          <div className="mt-8 space-y-8 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Media Section */}
            {cs.media && cs.media.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
                  Media & Recordings
                </h3>
                <div className="grid gap-4">
                  {cs.media.map((item, mIdx) => (
                    <div key={`${cs.slug}-media-${mIdx}`} className="space-y-2">
                      {item.type === "video" ? (
                        <div className="aspect-video w-full overflow-hidden bg-black/5 border border-black/5 rounded-sm">
                          <video
                            src={item.url}
                            controls
                            className="h-full w-full object-cover"
                            preload="metadata"
                          />
                        </div>
                      ) : (
                        <Image src={item.url} alt={item.label || cs.title} className="w-full rounded-sm" width={800} height={450} />
                      )}
                      {item.label && (
                        <p className="text-[12px] italic text-black/50">{item.label}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Write-up Section */}
            <div className="space-y-6">
              {cs.writeUp.map((section, idx) => (
                <section key={`${cs.slug}-${idx}`} className="space-y-3">
                  {section.heading ? (
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
                      {section.heading}
                    </h3>
                  ) : null}
                  <div className="space-y-4 text-[14px] leading-relaxed text-black/80">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={`${cs.slug}-${idx}-${pIdx}`}>{p}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}


