"use client";
import { useState } from "react";

export default function LandingPages() {
    /* ── Shared form styles ── */
    const labelStyle = {
        fontFamily: "var(--font-body), sans-serif",
        fontSize: "10px",
        fontWeight: 600 as const,
        textTransform: "uppercase" as const,
        letterSpacing: "0.18em",
        color: "var(--text-secondary)",
        display: "block" as const,
        marginBottom: "10px",
    };
    const inputStyle = {
        width: "100%",
        padding: "16px 18px",
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-hairline)",
        borderRadius: "8px",
        color: "var(--text-primary)",
        fontFamily: "var(--font-body), sans-serif",
        fontSize: "14px",
        fontWeight: 400 as const,
        outline: "none",
        boxSizing: "border-box" as const,
        transition: "border-color 0.3s ease, background-color 0.3s ease",
    };
    const sectionLabel = (text: string) => (
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "72px" }}>
            <span style={{
                fontFamily: "var(--font-body), sans-serif", fontSize: "10px", fontWeight: 600,
                textTransform: "uppercase", letterSpacing: "0.25em", color: "var(--gold)", whiteSpace: "nowrap",
            }}>{text}</span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "var(--border-hairline)" }} />
        </div>
    );

    return (
        <main className="lp-grain" style={{ backgroundColor: "var(--bg-deep)", color: "var(--text-primary)", minHeight: "100vh", overflowX: "hidden" }}>

            {/* ── Sticky CTA ── */}
            <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 1000 }}>
                <a href="#apply" className="sticky-cta" style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    backgroundColor: "var(--gold)", color: "var(--bg-deep)",
                    fontFamily: "var(--font-body), sans-serif", fontSize: "12px", fontWeight: 600,
                    padding: "14px 28px", borderRadius: "50px",
                    textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.15em",
                    boxShadow: "0 4px 30px rgba(139,105,20,0.15)",
                    animation: "pulseGlow 4s ease-in-out infinite",
                }}>Order — £100</a>
            </div>

            {/* ══════════════════ HERO ══════════════════ */}
            <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>




                <div className="lp-hero-pad" style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", animation: "fadeUp 1s ease-out" }}>

                    <h1 style={{
                        fontFamily: "var(--font-display), serif",
                        fontSize: "clamp(3.8rem, 14vw, 12rem)", lineHeight: 0.86,
                        letterSpacing: "-0.03em", textTransform: "uppercase",
                        fontWeight: 700, marginBottom: "0",
                    }}>
                        <span style={{ display: "block", color: "var(--text-primary)" }}>Stop</span>
                        <span style={{ display: "block", color: "var(--text-primary)" }}>Losing</span>
                        <span style={{ display: "block", color: "var(--gold)", WebkitTextStroke: "2px var(--gold)", textShadow: "0 4px 30px rgba(139,105,20,0.25)" }}>Clients</span>
                    </h1>

                    <p style={{
                        fontFamily: "var(--font-body), sans-serif",
                        fontSize: "clamp(14px, 2.5vw, 18px)", color: "var(--gold)", marginTop: "22px",
                        fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase",
                    }}>For personal trainers who are{" "}
                        <span style={{ borderBottom: "2px solid var(--gold)", paddingBottom: "2px" }}>serious</span>
                        {" "}about{" "}
                        <span style={{ borderBottom: "2px solid var(--gold)", paddingBottom: "2px" }}>growth</span>
                    </p>

                    <div className="lp-hero-cta-row" style={{ borderTop: "1px solid var(--border-hairline)" }}>
                        <div style={{
                            display: "flex", flexDirection: "column", gap: "6px",
                            maxWidth: "480px",
                        }}>
                            <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "clamp(16px, 2.5vw, 20px)", lineHeight: 1.6, color: "var(--text-secondary)", fontWeight: 400, margin: 0 }}>
                                You create the transformation.
                            </p>
                            <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "clamp(16px, 2.5vw, 20px)", lineHeight: 1.6, color: "var(--text-primary)", fontWeight: 500, margin: 0 }}>
                                I build the page that brings them to you.
                            </p>
                            <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "clamp(20px, 3.5vw, 28px)", lineHeight: 1.4, color: "var(--text-primary)", fontWeight: 600, margin: "8px 0 0 0" }}>
                                Custom landing page, your .com domain, live in 48 hours.
                            </p>
                            <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "clamp(24px, 4vw, 36px)", lineHeight: 1.3, color: "var(--gold)", fontWeight: 700, margin: "10px 0 0 0", letterSpacing: "-0.01em" }}>
                                One flat fee: £100.
                            </p>
                        </div>
                        <a href="#apply" className="lp-btn" style={{
                            display: "inline-flex", alignItems: "center", gap: "12px",
                            backgroundColor: "var(--gold)", color: "var(--bg-deep)",
                            fontFamily: "var(--font-body), sans-serif", fontSize: "13px", fontWeight: 600,
                            padding: "18px 48px", borderRadius: "6px",
                            textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.12em",
                            whiteSpace: "nowrap",
                        }}>Get Your Page →</a>
                    </div>
                </div>


            </section>

            {/* ══════════════════ MARQUEE ══════════════════ */}
            <section style={{ borderTop: "1px solid rgba(139,105,20,0.15)", borderBottom: "1px solid rgba(139,105,20,0.15)", backgroundColor: "var(--bg-card)", overflow: "hidden" }}>
                <div className="marquee-track">
                    {[...Array(2)].map((_, idx) => (
                        <div key={idx} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                            {["48H Delivery", "·", "£100 Flat Rate", "·", "Mobile-First", "·", "Zero Templates", "·", "Your Own .com", "·", "Analytics Included", "·", "Live in 48 Hours", "·"].map((item, i) => (
                                <span key={`${idx}-${i}`} style={{
                                    fontFamily: item === "·" ? "serif" : "var(--font-body), sans-serif",
                                    fontSize: item === "·" ? "20px" : "11px",
                                    textTransform: "uppercase", letterSpacing: item === "·" ? "0" : "0.2em",
                                    color: item === "·" ? "var(--gold)" : "var(--text-secondary)",
                                    padding: "18px 20px", whiteSpace: "nowrap", fontWeight: item === "·" ? 400 : 500,
                                }}>{item}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════ THE PROBLEM ══════════════════ */}
            <ProblemSection />

            {/* ══════════════════ WHY NOT FIVERR ══════════════════ */}
            <section className="lp-section" style={{ backgroundColor: "var(--bg-card)" }}>
                <div className="lp-inner">
                    {sectionLabel("Why Not Just Use Fiverr?")}

                    <div style={{ marginBottom: "64px" }}>
                        <h2 style={{
                            fontFamily: "var(--font-display), serif",
                            fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 0.94, fontWeight: 700,
                            textTransform: "uppercase", marginBottom: "0",
                        }}>
                            Fiverr and Upwork will charge you{" "}
                            <strong style={{ color: "#8C2B2B", textShadow: "0 2px 15px rgba(140,43,43,0.25)" }}>MORE</strong> for a cloned template.
                            <span style={{ display: "block", lineHeight: 1, marginTop: "12px", color: "var(--gold)" }}>Here&apos;s the difference.</span>
                        </h2>
                    </div>

                    {/* ── Comparison data ── */}
                    {(() => {
                        const rows = [
                            { topic: "Design", bad: "A cloned WordPress theme you've seen on 50 other sites", good: "Fully custom design — built around you, from scratch" },
                            { topic: "Performance", bad: "Plugins stacked on plugins — slow, bloated, fragile", good: "Lean hand-coded build. Sub-2s load time, no bloat" },
                            { topic: "Domain", bad: "A generic .wordpress.com or .wixsite.com subdomain", good: "Your own .com — set up properly and ready to share" },
                            { topic: "Speed", bad: "Delivered 'when it's ready' — weeks of chasing", good: "48 hours, guaranteed. You get a link or your money back" },
                            { topic: "Mobile", bad: "Desktop-first, shrunk down to mobile as an afterthought", good: "Mobile-first — because that's how your clients browse" },
                            { topic: "Analytics", bad: "No analytics, no pixel, no way to measure your ads", good: "Google Analytics + Meta Pixel installed before handover" },
                        ];

                        return (
                            <>
                                {/* ━━ Desktop: Side-by-side table ━━ */}
                                <div className="lp-compare" style={{ border: "1px solid var(--border-hairline)", boxShadow: "var(--shadow-card)" }}>
                                    {/* Headers */}
                                    <div style={{ backgroundColor: "rgba(160,50,50,0.08)", padding: "18px 28px", borderBottom: "1px solid rgba(160,50,50,0.1)" }}>
                                        <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(140,50,50,0.7)" }}>Fiverr WordPress seller</span>
                                    </div>
                                    <div style={{ backgroundColor: "rgba(139,105,20,0.06)", padding: "18px 28px", borderBottom: "1px solid rgba(139,105,20,0.12)" }}>
                                        <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold)" }}>This — £100 flat</span>
                                    </div>

                                    {rows.map((row, i) => (
                                        <div key={i} style={{ display: "contents" }}>
                                            <div style={{
                                                backgroundColor: "rgba(160,50,50,0.05)",
                                                padding: "24px 28px",
                                                borderBottom: i < rows.length - 1 ? "1px solid rgba(160,50,50,0.08)" : "none",
                                                display: "flex", alignItems: "flex-start", gap: "14px",
                                                marginBottom: i < rows.length - 1 ? "0" : "0",
                                            }}>
                                                <span style={{ color: "rgba(160,50,50,0.6)", fontSize: "14px", flexShrink: 0, marginTop: "2px" }}>✕</span>
                                                <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "14px", lineHeight: 1.7, color: "rgba(140,50,50,0.55)" }}>{row.bad}</span>
                                            </div>
                                            <div style={{
                                                backgroundColor: "rgba(139,105,20,0.04)",
                                                padding: "24px 28px",
                                                borderBottom: i < rows.length - 1 ? "1px solid rgba(139,105,20,0.08)" : "none",
                                                display: "flex", alignItems: "flex-start", gap: "14px",
                                            }}>
                                                <span style={{ color: "var(--gold)", fontSize: "14px", flexShrink: 0, marginTop: "2px" }}>✓</span>
                                                <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "14px", lineHeight: 1.7, color: "var(--text-primary)", fontWeight: 500 }}>{row.good}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* ━━ Mobile: Accordion ━━ */}
                                <div className="lp-accordion">
                                    {rows.map((row, i) => (
                                        <details key={i}>
                                            <summary>{row.topic}</summary>
                                            <div className="acc-body">
                                                {/* Bad — Fiverr */}
                                                <div style={{
                                                    backgroundColor: "rgba(160,50,50,0.06)",
                                                    borderLeft: "2px solid rgba(160,50,50,0.3)",
                                                    borderRadius: "0 8px 8px 0",
                                                    padding: "16px 18px",
                                                    display: "flex", alignItems: "flex-start", gap: "12px",
                                                }}>
                                                    <span style={{ color: "rgba(160,50,50,0.65)", fontSize: "13px", flexShrink: 0, marginTop: "1px" }}>✕</span>
                                                    <div>
                                                        <div style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(160,50,50,0.55)", marginBottom: "4px" }}>Fiverr</div>
                                                        <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "14px", lineHeight: 1.7, color: "rgba(140,50,50,0.55)" }}>{row.bad}</span>
                                                    </div>
                                                </div>

                                                {/* Good — Us */}
                                                <div style={{
                                                    backgroundColor: "rgba(139,105,20,0.06)",
                                                    borderLeft: "2px solid rgba(139,105,20,0.3)",
                                                    borderRadius: "0 8px 8px 0",
                                                    padding: "16px 18px",
                                                    display: "flex", alignItems: "flex-start", gap: "12px",
                                                }}>
                                                    <span style={{ color: "var(--gold)", fontSize: "13px", flexShrink: 0, marginTop: "1px" }}>✓</span>
                                                    <div>
                                                        <div style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(139,105,20,0.6)", marginBottom: "4px" }}>Us</div>
                                                        <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "14px", lineHeight: 1.7, color: "var(--text-primary)", fontWeight: 500 }}>{row.good}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </>
                        );
                    })()}

                    <div style={{ marginTop: "72px", borderTop: "1px solid var(--border-hairline)", paddingTop: "56px", textAlign: "center", paddingBottom: "16px" }}>
                        <p style={{
                            fontFamily: "var(--font-display), serif",
                            fontSize: "clamp(24px, 4.5vw, 42px)",
                            lineHeight: 1.25,
                            color: "var(--text-primary)",
                            fontWeight: 700,
                            margin: "0 auto",
                            maxWidth: "900px",
                        }}>
                            &ldquo;If you think it&apos;s expensive to hire a professional, wait until you hire an amateur.&rdquo;
                        </p>
                        <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "12px", color: "var(--text-muted)", marginTop: "24px", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600 }}>— Red Adair</p>
                    </div>
                </div>
            </section>

            {/* ══════════════════ RECENT WORK (SOCIAL PROOF) ══════════════════ */}
            <section className="lp-section">
                <div className="lp-inner">
                    {sectionLabel("Recent Work")}

                    <div style={{ marginBottom: "64px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px" }}>
                        <h2 style={{
                            fontFamily: "var(--font-display), serif",
                            fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 0.92,
                            textTransform: "uppercase", fontWeight: 700, marginBottom: "0", maxWidth: "600px",
                        }}>
                            Proof in the{" "}
                            <span style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic", textTransform: "none", color: "var(--gold)", display: "inline-block", fontSize: "1.05em", fontWeight: 300 }}>
                                pixels.
                            </span>
                        </h2>
                        <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "15px", lineHeight: 1.8, color: "var(--text-secondary)", maxWidth: "340px", margin: 0 }}>
                            A few recent landing pages built for personal trainers and coaches. Fast, custom, and designed to convert.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
                        {[
                            {
                                name: "Tristen Muay Thai",
                                type: "Fighter & Coach",
                                url: "https://tristenmuaythai.com",
                                result: "Live — tristenmuaythai.com",
                                videoSrc: "https://pub-0a3ee767ee3f40d798434134d4ef166c.r2.dev/case-studies/tristen-muaythai.mp4",
                            },
                            {
                                name: "Road Ready ADR",
                                type: "HGV / ADR Landing Page",
                                url: "https://roadreadyhgv.com",
                                result: "Live — roadreadyhgv.com",
                                videoSrc: "https://pub-0a3ee767ee3f40d798434134d4ef166c.r2.dev/case-studies/road-ready-adr.mp4",
                            },
                        ].map((work) => (
                            <div key={work.name} className="lp-lift" style={{
                                backgroundColor: "var(--bg-card)",
                                borderRadius: "12px",
                                overflow: "hidden",
                                border: "1px solid var(--border-hairline)",
                                boxShadow: "0 8px 30px rgba(44,36,24,0.04)",
                                display: "flex", flexDirection: "column",
                            }}>
                                {/* Browser bar mockup */}
                                <div style={{ backgroundColor: "rgba(44,36,24,0.05)", padding: "12px 16px", display: "flex", alignItems: "center", gap: "6px", borderBottom: "1px solid var(--border-hairline)" }}>
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "rgba(44,36,24,0.15)" }} />
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "rgba(44,36,24,0.15)" }} />
                                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "rgba(44,36,24,0.15)" }} />
                                </div>

                                <div style={{ width: "100%", aspectRatio: "4/3", backgroundColor: "rgba(44,36,24,0.02)", position: "relative", overflow: "hidden" }}>
                                    <video
                                        src={work.videoSrc}
                                        muted
                                        loop
                                        playsInline
                                        autoPlay
                                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                                        preload="metadata"
                                    />
                                </div>

                                {/* Content */}
                                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1, backgroundColor: "var(--bg-card)" }}>
                                    <div style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--gold)", marginBottom: "8px" }}>
                                        {work.type}
                                    </div>
                                    <h3 style={{ fontFamily: "var(--font-display), serif", fontSize: "24px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px", lineHeight: 1.2 }}>
                                        {work.name}
                                    </h3>
                                    <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "13px", color: "var(--text-secondary)", marginBottom: "24px" }}>
                                        {work.result}
                                    </p>
                                    <div style={{ marginTop: "auto" }}>
                                        <a href={work.url} target="_blank" rel="noopener noreferrer" style={{
                                            display: "inline-flex", alignItems: "center", gap: "8px",
                                            fontFamily: "var(--font-body), sans-serif", fontSize: "12px", fontWeight: 600,
                                            textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-primary)",
                                            textDecoration: "none", borderBottom: "1px solid var(--border-hairline)", paddingBottom: "4px",
                                            transition: "border-color 0.2s ease"
                                        }}>
                                            Visit Live Site <span style={{ fontSize: "14px", transform: "translateY(-1px)" }}>↗</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════ PACKAGE ══════════════════ */}
            <section className="lp-section-gold" style={{ backgroundColor: "var(--gold)", position: "relative", overflow: "hidden" }}>
                <div className="lp-inner">
                    <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "72px" }}>
                        <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.25em", color: "rgba(232,228,220,0.5)", whiteSpace: "nowrap" }}>What You Get</span>
                        <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(232,228,220,0.15)" }} />
                    </div>

                    <div className="lp-pkg-grid" style={{ marginBottom: "20px" }}>
                        <div>
                            <h2 style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(2.6rem, 7vw, 5.5rem)", lineHeight: 0.9, textTransform: "uppercase", color: "#E8E4DC", fontWeight: 700, marginBottom: "0", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px" }}>
                                <span>The</span>
                                <span style={{
                                    fontStyle: "italic", fontSize: "1.3em",
                                    fontWeight: 300, lineHeight: 1,
                                    border: "1px solid #1A120B",
                                    padding: "4px 24px",
                                    display: "inline-block",
                                }}>EVERYTHING</span>
                                <span>package.</span>
                            </h2>
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "36px", maxWidth: "340px" }}>
                                <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "15px", lineHeight: 1.6, color: "rgba(232,228,220,0.65)", margin: 0 }}>
                                    <strong style={{ color: "#E8E4DC", fontSize: "17px", fontWeight: 700 }}>Not</strong> a template.
                                </p>
                                <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "15px", lineHeight: 1.6, color: "rgba(232,228,220,0.65)", margin: 0 }}>
                                    <strong style={{ color: "#E8E4DC", fontSize: "17px", fontWeight: 700 }}>Not</strong> a Wix site.
                                </p>
                                <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "15px", lineHeight: 1.6, color: "rgba(232,228,220,0.65)", margin: 0 }}>
                                    A hand-built, mobile-first landing page with your own .com — live in 48 hours.
                                </p>
                                <p style={{
                                    fontFamily: "var(--font-body), sans-serif", fontSize: "16px", lineHeight: 1.5,
                                    color: "var(--gold)", fontWeight: 700, margin: "12px 0 0 0",
                                    backgroundColor: "rgba(232,228,220,0.95)", padding: "12px 20px",
                                    borderRadius: "8px", display: "inline-block",
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                                }}>
                                    £100, flat. No hidden fees.
                                </p>
                            </div>
                        </div>

                        <div className="lp-pkg-tall lp-lift" style={{ backgroundColor: "rgba(232,228,220,0.1)", padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid #1A120B", minHeight: "280px", boxShadow: "0 8px 40px rgba(0,0,0,0.1)" }}>
                            <div>
                                <h3 style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "16px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#E8E4DC", marginBottom: "12px" }}>Your Own .com Domain</h3>
                                <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "14px", lineHeight: 1.75, color: "rgba(232,228,220,0.6)" }}>
                                    A proper .com — not a subdomain. Set up on Cloudflare for maximum speed. First year included.
                                </p>
                            </div>
                        </div>

                        <div className="lp-pkg-pair">
                            {[
                                { title: "Mobile-First", body: "Built for phones. Flawless on desktop too." },
                                { title: "Sub-2s Load", body: "Loads before they lose interest. Guaranteed." },
                            ].map((item) => (
                                <div key={item.title} className="lp-lift" style={{ backgroundColor: "rgba(232,228,220,0.1)", padding: "28px 24px", border: "1px solid #1A120B", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <h3 style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "14px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#E8E4DC", marginBottom: "6px" }}>{item.title}</h3>
                                    <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "13px", lineHeight: 1.7, color: "rgba(232,228,220,0.55)", margin: 0 }}>{item.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lp-grid-4">
                        {[
                            { title: "WhatsApp CTA", body: "One tap to book. Zero friction." },
                            { title: "Analytics", body: "Google Analytics + Meta Pixel, pre-installed." },
                            { title: "SSL + Hosting", body: "HTTPS secured. Globally fast." },
                            { title: "Custom Design", body: "Your brand. Not a template." },
                        ].map((item) => (
                            <div key={item.title} className="lp-lift" style={{ backgroundColor: "rgba(232,228,220,0.1)", padding: "24px 20px", border: "1px solid #1A120B", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
                                <h3 style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#E8E4DC", marginBottom: "4px" }}>{item.title}</h3>
                                <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "12px", lineHeight: 1.65, color: "rgba(232,228,220,0.5)", margin: 0 }}>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════ PROCESS ══════════════════ */}
            <section className="lp-section">
                <div className="lp-inner">
                    {sectionLabel("The Process")}

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {[
                            { step: "I", title: "Fill in the form", serif: "below", body: "Name, services, brand, vibe. Takes two minutes — it's all I need to start building.", time: "Day 0" },
                            { step: "II", title: "I build your page", serif: "your way", body: "Within 48 hours, your page is live and your .com is pointing to it. I'll send you the link.", time: "Day 1–2" },
                            { step: "III", title: "Go live", serif: "instantly", body: "Happy with it? Done. Drop the link in your bio, fire up your TikTok ad, start getting enquiries.", time: "Day 2" },
                        ].map((item, i) => (
                            <div key={item.step} className="lp-process-row" style={{
                                borderBottom: i < 2 ? "1px solid var(--border-hairline)" : "none",
                                borderTop: i === 0 ? "1px solid var(--border-hairline)" : "none",
                            }}>
                                <div className="lp-numeral" style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic", color: "rgba(139,105,20,0.12)", lineHeight: 1, userSelect: "none", fontWeight: 300 }}>{item.step}</div>
                                <div>
                                    <h3 style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "clamp(16px, 3vw, 22px)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1, marginBottom: "8px" }}>
                                        {item.title}{" "}
                                        <span style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic", textTransform: "none", color: "var(--gold)", fontSize: "1.1em", fontWeight: 300 }}>{item.serif}</span>
                                    </h3>
                                    <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "14px", lineHeight: 1.8, color: "var(--text-secondary)", maxWidth: "480px" }}>{item.body}</p>
                                </div>
                                <div className="lp-process-time" style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(139,105,20,0.35)", textAlign: "right" }}>{item.time}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════ APPLICATION FORM ══════════════════ */}
            <section id="apply" className="lp-section" style={{ backgroundColor: "var(--bg-card)", position: "relative", overflow: "hidden" }}>
                <div style={{
                    position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                    width: "800px", height: "600px", borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(139,105,20,0.04) 0%, transparent 70%)", pointerEvents: "none",
                }} />

                <div className="lp-inner lp-form-grid" style={{ position: "relative" }}>
                    {/* Left: Heading */}
                    <div>
                        {sectionLabel("Order Your Page")}

                        <h2 style={{ fontFamily: "var(--font-display), serif", fontSize: "clamp(2.6rem, 6vw, 4.5rem)", lineHeight: 0.9, textTransform: "uppercase", fontWeight: 700, marginBottom: "0" }}>
                            Tell Me{" "}
                            <span style={{ fontStyle: "italic", textTransform: "none", color: "var(--gold)", display: "block", fontSize: "1.1em", lineHeight: 0.95, fontWeight: 300 }}>what you need.</span>
                        </h2>

                        <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "15px", lineHeight: 1.9, color: "var(--text-secondary)", maxWidth: "360px", marginTop: "32px" }}>
                            Fill this in and I&apos;ll come back to you within 24 hours with a plan. You don&apos;t pay anything until you&apos;re happy with the direction — no risk, no commitment.
                        </p>

                        <div style={{ marginTop: "48px", padding: "20px 24px", borderLeft: "2px solid var(--gold)", backgroundColor: "rgba(139,105,20,0.04)" }}>
                            <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                                <strong style={{ color: "var(--text-primary)" }}>How it works:</strong> You send the brief. I review it and send you a mockup or direction within 24 hours. If you like it, you pay the £100 and I build it. If not, no hard feelings.
                            </p>
                        </div>
                    </div>

                    {/* Right: Structured Brief */}
                    <form action="mailto:pkzadeh@gmail.com" method="POST" encType="text/plain" style={{ display: "flex", flexDirection: "column" }}>

                        {/* A — About You */}
                        <div style={{ marginBottom: "44px" }}>
                            <div style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--gold)", marginBottom: "24px", paddingBottom: "12px", borderBottom: "1px solid rgba(139,105,20,0.15)" }}>A — About You</div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                                {[
                                    { id: "name", l: "Your name", p: "", t: "text" },
                                    { id: "email", l: "Email address", p: "", t: "email" },
                                ].map((f) => (
                                    <div key={f.id}>
                                        <label htmlFor={f.id} style={labelStyle}>{f.l}</label>
                                        <input id={f.id} name={f.id} type={f.t} required placeholder={f.p} style={inputStyle} />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <label htmlFor="handle" style={labelStyle}>Instagram or TikTok <span style={{ textTransform: "none", opacity: 0.5, letterSpacing: "0" }}>(so I can see your brand)</span></label>
                                <input id="handle" name="handle" type="text" placeholder="" style={inputStyle} />
                            </div>
                        </div>

                        {/* B — Your Business */}
                        <div style={{ marginBottom: "44px" }}>
                            <div style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--gold)", marginBottom: "24px", paddingBottom: "12px", borderBottom: "1px solid rgba(139,105,20,0.15)" }}>B — Your Business</div>
                            {[
                                { id: "services", l: "What do you offer?", p: "" },
                                { id: "audience", l: "Who are you trying to reach?", p: "" },
                                { id: "location", l: "Where are you based?", p: "" },
                            ].map((f, i) => (
                                <div key={f.id} style={{ marginBottom: i < 2 ? "14px" : "0" }}>
                                    <label htmlFor={f.id} style={labelStyle}>{f.l}</label>
                                    <input id={f.id} name={f.id} type="text" placeholder={f.p} style={inputStyle} />
                                </div>
                            ))}
                        </div>

                        {/* C — Design Preferences */}
                        <div style={{ marginBottom: "44px" }}>
                            <div style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--gold)", marginBottom: "24px", paddingBottom: "12px", borderBottom: "1px solid rgba(139,105,20,0.15)" }}>C — Design Preferences</div>

                            <div style={{ marginBottom: "24px" }}>
                                <label style={labelStyle}>Pick a colour that fits your brand <span style={{ textTransform: "none", opacity: 0.5, letterSpacing: "0" }}>(or type a hex code)</span></label>
                                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
                                    {[
                                        { c: "#C44B3F", n: "Red" }, { c: "#D4874D", n: "Copper" }, { c: "#C9A96E", n: "Gold" },
                                        { c: "#4A8C6F", n: "Green" }, { c: "#4A7FB5", n: "Blue" }, { c: "#8B6BB5", n: "Violet" },
                                        { c: "#C45A7B", n: "Rose" }, { c: "#E8E4DC", n: "Cream" },
                                    ].map((s) => (
                                        <label key={s.n} title={s.n} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                                            <input type="radio" name="primary_color" value={s.c} style={{ display: "none" }} />
                                            <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: s.c, border: "1px solid rgba(44,36,24,0.15)", cursor: "pointer", transition: "transform 0.3s ease, box-shadow 0.3s ease" }} />
                                            <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "9px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.n}</span>
                                        </label>
                                    ))}
                                    <input type="text" name="primary_color_custom" placeholder="#hex" style={{ ...inputStyle, width: "72px", padding: "10px 12px", fontSize: "13px", marginLeft: "4px" }} />
                                </div>
                            </div>

                            <div style={{ marginBottom: "24px" }}>
                                <label style={labelStyle}>What style suits your brand?</label>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                                    {[
                                        { v: "bold", l: "Bold & In-Your-Face", d: "Dark background, big headlines, strong contrast. Works well if your brand is about intensity — combat sports, HIIT, bootcamps." },
                                        { v: "clean", l: "Clean & Simple", d: "Lots of white space, easy to read, nothing flashy. Good for a professional, approachable look — online coaching, yoga, wellness." },
                                        { v: "dark", l: "Dark & High-End", d: "Sleek dark tones, sharp typography, premium feel. Suits high-ticket services, private coaching, or luxury fitness brands." },
                                        { v: "bright", l: "Bright & Friendly", d: "Colourful, warm, and inviting. Great if your audience is beginners, families, or anyone who might feel intimidated by a gym." },
                                    ].map((vibe) => (
                                        <label key={vibe.v} className="lp-vibe-card" style={{
                                            display: "flex", gap: "12px", alignItems: "flex-start",
                                            padding: "16px", backgroundColor: "var(--bg-elevated)",
                                            border: "1px solid var(--border-hairline)", borderRadius: "10px", cursor: "pointer",
                                        }}>
                                            <input type="radio" name="design_vibe" value={vibe.v} style={{ accentColor: "var(--gold)", marginTop: "2px", flexShrink: 0 }} />
                                            <div>
                                                <div style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "3px" }}>{vibe.l}</div>
                                                <div style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.5 }}>{vibe.d}</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="inspiration" style={labelStyle}>Any sites or pages you like the look of? <span style={{ textTransform: "none", opacity: 0.5, letterSpacing: "0" }}>(optional)</span></label>
                                <textarea id="inspiration" name="inspiration" rows={3} placeholder="" style={{ ...inputStyle, resize: "vertical" as const }} />
                            </div>
                        </div>

                        {/* D — Must-Haves */}
                        <div style={{ marginBottom: "36px" }}>
                            <div style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--gold)", marginBottom: "24px", paddingBottom: "12px", borderBottom: "1px solid rgba(139,105,20,0.15)" }}>D — What Do You Need On The Page?</div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
                                {["WhatsApp button", "Booking / Calendly", "Testimonials section", "Pricing table", "Before & after gallery", "Instagram feed", "Contact form", "Google Maps"].map((feature) => (
                                    <label key={feature} className="lp-check-card" style={{
                                        display: "flex", gap: "10px", alignItems: "center",
                                        padding: "14px 16px", backgroundColor: "var(--bg-elevated)",
                                        border: "1px solid var(--border-hairline)", borderRadius: "8px", cursor: "pointer",
                                    }}>
                                        <input type="checkbox" name="features" value={feature} style={{ accentColor: "var(--gold)", flexShrink: 0 }} />
                                        <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "13px", color: "var(--text-secondary)" }}>{feature}</span>
                                    </label>
                                ))}
                            </div>
                            <div>
                                <label htmlFor="extras" style={labelStyle}>Anything else I should know? <span style={{ textTransform: "none", opacity: 0.5, letterSpacing: "0" }}>(optional)</span></label>
                                <textarea id="extras" name="extras" rows={3} placeholder="" style={{ ...inputStyle, resize: "vertical" as const }} />
                            </div>
                        </div>

                        <button type="submit" className="lp-btn" style={{
                            width: "100%", padding: "20px",
                            backgroundColor: "var(--gold)", color: "var(--bg-deep)",
                            fontFamily: "var(--font-body), sans-serif", fontSize: "12px", fontWeight: 600,
                            textTransform: "uppercase", letterSpacing: "0.15em",
                            border: "none", borderRadius: "8px", cursor: "pointer",
                        }}>Send My Brief</button>

                        <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "12px", color: "var(--text-muted)", textAlign: "center", marginTop: "16px" }}>
                            No payment required to get started. I&apos;ll reply within 24 hours.
                        </p>
                    </form>
                </div>
            </section>

            {/* ══════════════════ FOOTER ══════════════════ */}
            <footer style={{
                borderTop: "1px solid var(--border-hairline)", padding: "32px 24px",
                display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px",
            }}>
                <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>© {new Date().getFullYear()} Paymahn</span>
                <span style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic", fontSize: "14px", color: "var(--text-muted)", fontWeight: 300 }}>Landing pages that convert.</span>
            </footer>
        </main>
    );
}

/* ── Problem Section — Interactive Click-to-Reveal ── */
function ProblemSection() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    const cards = [
        {
            n: "01", title: "Professional Presence",
            hook: "First impressions close deals.",
            body: "Clients judge you in seconds. A polished, branded landing page tells them you're serious — not just another PT with an Instagram page. It's the difference between a scroll-past and a sign-up.",
        },
        {
            n: "02", title: "Built To Convert",
            hook: "Every element designed to get enquiries.",
            body: "Clear headline, one strong call-to-action, social proof, and a WhatsApp button — all above the fold. No distractions, no dead links. Just a direct path from visitor to paying client.",
        },
        {
            n: "03", title: "Credibility That Closes",
            hook: "Your own .com says you mean business.",
            body: "A custom domain hits different to a link-in-bio page. Fast load times and a professional layout show clients you invest in your business — so they'll invest in you.",
        },
    ];

    return (
        <section className="lp-section">
            <div className="lp-inner">
                <div className="lp-grid-2">
                    <div>
                        <h2 style={{
                            fontFamily: "var(--font-display), serif",
                            fontSize: "clamp(2.8rem, 7vw, 5rem)", lineHeight: 0.9,
                            textTransform: "uppercase", fontWeight: 700, marginBottom: "0",
                        }}>
                            Looking Professional{" "}
                            <span style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic", textTransform: "none", color: "var(--gold)", display: "block", fontSize: "1.05em", lineHeight: 0.95, fontWeight: 300 }}>
                                converts clients.
                            </span>
                        </h2>
                        <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "16px", lineHeight: 1.8, color: "var(--text-secondary)", marginTop: "36px", maxWidth: "400px" }}>
                            Your followers already trust you. A professional landing page turns that trust into bookings, enquiries, and paying clients.
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {cards.map((card, i) => {
                            const isOpen = openIdx === i;
                            return (
                                <div
                                    key={card.n}
                                    onClick={() => setOpenIdx(isOpen ? null : i)}
                                    style={{
                                        padding: "28px 24px",
                                        borderBottom: "1px solid var(--border-hairline)",
                                        borderTop: i === 0 ? "1px solid var(--border-hairline)" : "none",
                                        borderLeft: isOpen ? "4px solid var(--gold)" : "4px solid transparent",
                                        backgroundColor: isOpen ? "var(--bg-elevated)" : "transparent",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                                        <div style={{ flex: 1 }}>
                                            <h3 style={{
                                                fontFamily: "var(--font-body), sans-serif", fontSize: "15px", fontWeight: 700,
                                                textTransform: "uppercase", letterSpacing: "0.06em",
                                                color: isOpen ? "var(--gold)" : "var(--text-primary)",
                                                margin: 0, transition: "color 0.3s ease",
                                            }}>{card.title}</h3>
                                            {!isOpen && (
                                                <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "13px", color: "var(--text-muted)", margin: "4px 0 0 0", lineHeight: 1.5 }}>
                                                    {card.hook}
                                                </p>
                                            )}
                                        </div>
                                        <span style={{
                                            fontFamily: "var(--font-body), sans-serif", fontSize: "18px", fontWeight: 300,
                                            color: "var(--gold)", flexShrink: 0,
                                            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                                            transition: "transform 0.3s ease",
                                        }}>+</span>
                                    </div>

                                    <div style={{
                                        maxHeight: isOpen ? "200px" : "0",
                                        overflow: "hidden",
                                        transition: "max-height 0.4s cubic-bezier(0.33, 1, 0.68, 1), opacity 0.3s ease, margin-top 0.3s ease",
                                        opacity: isOpen ? 1 : 0,
                                        marginTop: isOpen ? "16px" : "0",
                                    }}>
                                        <p style={{
                                            fontFamily: "var(--font-body), sans-serif", fontSize: "14px", lineHeight: 1.8,
                                            color: "var(--text-secondary)", paddingLeft: "40px", margin: 0,
                                        }}>{card.body}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ── Linktree vs Landing Page mini-comparison ── */}
                <div style={{ marginTop: "72px", display: "grid", gridTemplateColumns: "1fr 1fr", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border-hairline)" }}>
                    {/* Linktree side */}
                    <div style={{ padding: "32px 28px", backgroundColor: "rgba(160,50,50,0.05)" }}>
                        <div style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(140,50,50,0.8)", marginBottom: "24px" }}>Linktree</div>
                        {[
                            "Looks like a hobby",
                            "Same template as everyone",
                            "No brand, no identity",
                            "Slow, cluttered, generic",
                            "Screams \"I just started\"",
                        ].map((item) => (
                            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                                <span style={{ color: "rgba(160,50,50,0.5)", fontSize: "14px", flexShrink: 0, marginTop: "2px" }}>✕</span>
                                <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "15px", lineHeight: 1.6, color: "rgba(140,50,50,0.7)" }}>{item}</span>
                            </div>
                        ))}
                    </div>
                    {/* Landing page side */}
                    <div style={{ padding: "32px 28px", backgroundColor: "rgba(139,105,20,0.04)" }}>
                        <div style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold)", marginBottom: "24px" }}>Custom Landing Page</div>
                        {[
                            "Looks like a real business",
                            "100% custom to your brand",
                            "Your colours, your identity",
                            "Fast, clean, professional",
                            "Says \"I'm worth investing in\"",
                        ].map((item) => (
                            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                                <span style={{ color: "var(--gold)", fontSize: "14px", flexShrink: 0, marginTop: "2px", fontWeight: 700 }}>✓</span>
                                <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "15px", lineHeight: 1.6, color: "var(--text-primary)", fontWeight: 600 }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
