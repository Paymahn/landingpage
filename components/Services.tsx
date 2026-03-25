const services = [
  {
    title: "Full Website Builds",
    description:
      "From scratch or from a mess — I'll build you a site that loads quick, looks sharp, and actually brings in enquiries. Shopify, Next.js, whatever fits. You tell me what you need, I'll figure out the best way to build it.",
  },
  {
    title: "Shopify & E-Commerce",
    description:
      "Custom themes, migrations from Wix or WordPress, product builders, the lot. I've moved entire businesses onto Shopify without losing a single customer record or Google ranking.",
  },
  {
    title: "Landing Pages & Ads",
    description:
      "Fast, focused pages built to convert ad traffic. I'll set up your tracking pixels, your domain, your analytics — and have it live before the week's out. Affordable flat-rate pricing, no surprises.",
  },
] as const;

export function Services() {
  return (
    <div className="grid gap-10 md:grid-cols-3">
      {services.map((s) => (
        <div key={s.title} className="space-y-3">
          <h3 className="text-[15px] font-medium leading-6">{s.title}</h3>
          <p className="text-[15px] leading-7 text-black/70">{s.description}</p>
        </div>
      ))}
    </div>
  );
}
