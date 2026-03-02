const services = [
  {
    title: "Headless Shopify",
    description:
      "Modern storefront architecture focused on performance, flexibility, and clean boundaries. Placeholder text extends this block so you can see how cards align when copy runs longer than a single line.",
  },
  {
    title: "AWS Infrastructure",
    description:
      "Reliable foundations: environments, CI/CD, observability, and cost-aware scaling. This sentence exists to validate vertical rhythm and spacing in a three-column grid.",
  },
  {
    title: "Shopify Custom Builders",
    description:
      "Typed tools and modules that make teams faster without making systems fragile. More filler copy here to preview how longer descriptions feel in a restrained, text-forward layout.",
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


