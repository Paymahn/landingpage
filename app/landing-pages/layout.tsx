import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Landing Pages for Personal Trainers — From £100",
  description:
    "Fast, mobile-first landing pages built for personal trainers and fitness coaches. Delivered in 48 hours. From just £100.",
};

export default function LandingPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${cormorant.variable} ${outfit.variable}`}>
      <style>{`
        /* ── Design Tokens ── */
        :root {
          --gold: #8B6914;
          --gold-light: #A37E1F;
          --gold-dark: #725510;
          --bg-deep: #E8E4DC;
          --bg-card: #DED8CE;
          --bg-elevated: #D4CEC4;
          --text-primary: #2C2418;
          --text-secondary: rgba(44,36,24,0.65);
          --text-muted: rgba(44,36,24,0.35);
          --border-hairline: rgba(44,36,24,0.1);
          --border-subtle: rgba(44,36,24,0.06);
          --shadow-card: 0 8px 60px rgba(44,36,24,0.08);
          --shadow-float: 0 16px 80px rgba(44,36,24,0.12);
        }

        /* ── Animations ── */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 4px 30px rgba(139,105,20,0.15); }
          50% { box-shadow: 0 4px 50px rgba(139,105,20,0.3); }
        }
        @keyframes grain {
          0%, 100% { transform: translate(0,0); }
          10% { transform: translate(-5%,-10%); }
          30% { transform: translate(3%,5%); }
          50% { transform: translate(-3%,15%); }
          70% { transform: translate(8%,5%); }
          90% { transform: translate(-5%,10%); }
        }

        .marquee-track {
          animation: marquee 22s linear infinite;
          display: flex;
          white-space: nowrap;
          will-change: transform;
        }

        /* ── Noise texture overlay ── */
        .lp-grain::before {
          content: '';
          position: fixed;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9999;
          animation: grain 4s steps(6) infinite;
          opacity: 0.18;
        }

        /* ── Micro-interactions ── */
        .lp-lift {
          transition: transform 0.3s cubic-bezier(0.33, 1, 0.68, 1),
                      box-shadow 0.3s cubic-bezier(0.33, 1, 0.68, 1);
        }
        .lp-lift:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-float);
        }
        .lp-btn {
          transition: transform 0.3s cubic-bezier(0.33, 1, 0.68, 1),
                      background-color 0.3s ease,
                      box-shadow 0.3s cubic-bezier(0.33, 1, 0.68, 1);
        }
        .lp-btn:hover {
          transform: translateY(-2px);
          background-color: var(--gold-light) !important;
          box-shadow: 0 12px 40px rgba(139,105,20,0.2);
        }
        .sticky-cta:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 12px 40px rgba(139,105,20,0.3) !important;
        }
        input:focus, textarea:focus {
          border-color: var(--gold) !important;
          background-color: rgba(139,105,20,0.06) !important;
        }
        input::placeholder, textarea::placeholder {
          color: var(--text-muted);
        }
        .lp-check-card {
          transition: border-color 0.25s ease, background-color 0.25s ease;
        }
        .lp-check-card:hover {
          border-color: rgba(139,105,20,0.25) !important;
          background-color: rgba(139,105,20,0.04) !important;
        }
        .lp-vibe-card {
          transition: border-color 0.25s ease, background-color 0.25s ease;
        }
        .lp-vibe-card:hover {
          border-color: rgba(139,105,20,0.25) !important;
        }

        /* ── Mobile-first responsive ── */
        .lp-section { padding: 80px 24px; }
        .lp-section-gold { padding: 80px 24px; }
        .lp-inner { max-width: 1100px; margin: 0 auto; }

        .lp-grid-2 { display: grid; grid-template-columns: 1fr; gap: 48px; }
        .lp-grid-4 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .lp-process-row { display: grid; grid-template-columns: 50px 1fr; gap: 16px; align-items: start; padding: 36px 0; }
        .lp-process-time { display: none; }
        .lp-form-grid { display: grid; grid-template-columns: 1fr; gap: 80px; align-items: start; }
        .lp-hero-cta-row { display: flex; flex-direction: column; gap: 28px; margin-top: 48px; padding-top: 36px; }
        .lp-hero-pad { padding: 48px 24px; }
        .lp-corner-price { display: none; }
        .lp-vert-label { display: none; }
        .lp-vert-rule { display: none; }

        .lp-pkg-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        .lp-pkg-tall { grid-column: auto; grid-row: auto; }
        .lp-pkg-pair { grid-column: auto; grid-row: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

        .lp-compare { display: none; }
        .lp-accordion { display: flex; flex-direction: column; gap: 0; }
        .lp-numeral { font-size: 40px; }

        /* ── Accordion (mobile) ── */
        .lp-accordion details {
          border-bottom: 1px solid var(--border-hairline);
        }
        .lp-accordion details:first-child {
          border-top: 1px solid var(--border-hairline);
        }
        .lp-accordion summary {
          list-style: none;
          cursor: pointer;
          padding: 24px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          font-family: var(--font-body), sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          transition: color 0.25s ease;
        }
        .lp-accordion summary::-webkit-details-marker { display: none; }
        .lp-accordion summary::after {
          content: '+';
          font-family: var(--font-body), sans-serif;
          font-size: 20px;
          font-weight: 300;
          color: var(--gold);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .lp-accordion details[open] summary::after {
          content: '−';
        }
        .lp-accordion .acc-body {
          padding: 0 0 28px 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Tablet 640px+ */
        @media (min-width: 640px) {
          .lp-section { padding: 100px 48px; }
          .lp-section-gold { padding: 100px 48px; }
          .lp-grid-4 { grid-template-columns: repeat(4, 1fr); gap: 14px; }
          .lp-compare { display: grid; grid-template-columns: 1fr 1fr; border-radius: 12px; overflow: hidden; }
          .lp-accordion { display: none; }
        }

        /* Desktop 960px+ */
        @media (min-width: 960px) {
          .lp-section { padding: 140px 80px; }
          .lp-section-gold { padding: 140px 80px; }
          .lp-grid-2 { grid-template-columns: 1fr 1fr; gap: 100px; }
          .lp-form-grid { grid-template-columns: 1fr 1fr; gap: 140px; }
          .lp-hero-pad { padding: 100px 100px 100px 120px; }
          .lp-hero-cta-row { flex-direction: row; align-items: flex-end; justify-content: space-between; gap: 48px; margin-top: 72px; padding-top: 48px; }
          .lp-corner-price { display: block; }
          .lp-vert-label { display: block; }
          .lp-vert-rule { display: block; }
          .lp-process-row { grid-template-columns: 140px 1fr 120px; gap: 48px; padding: 56px 0; }
          .lp-process-time { display: block; }
          .lp-pkg-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
          .lp-pkg-tall { grid-column: 2; grid-row: 1 / 3; }
          .lp-numeral { font-size: 80px; }
        }
      `}</style>
      {children}
    </div>
  );
}
