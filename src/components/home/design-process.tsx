import { ClipboardList, Ruler, Box, Factory, Wrench, LifeBuoy } from 'lucide-react';

export function DesignProcess() {
  const steps = [
    {
      title: "Step 1 — Consultation",
      description: "Tell us your needs and style preferences. We guide you with expert insights.",
      icon: <ClipboardList className="size-6" />,
    },
    {
      title: "Step 2 — Space Measurement",
      description: "Our team measures your kitchen precisely for perfect planning.",
      icon: <Ruler className="size-6" />,
    },
    {
      title: "Step 3 — 3D Design & Approval",
      description: "Visualize your kitchen with realistic 3D renders before manufacturing begins.",
      icon: <Box className="size-6" />,
    },
    {
      title: "Step 4 — Manufacturing",
      description: "State-of-the-art factory production ensures accuracy and durability.",
      icon: <Factory className="size-6" />,
    },
    {
      title: "Step 5 — Installation",
      description: "Trained installers assemble and finish your kitchen with spotless workmanship.",
      icon: <Wrench className="size-6" />,
    },
    {
      title: "Step 6 — Handover & Support",
      description: "We walk you through the final kitchen and provide after-sales support.",
      icon: <LifeBuoy className="size-6" />,
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Our Hassle-Free Process</h2>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="space-y-3">
              <div className="flex items-center gap-3">
                {step.icon}
                <h3 className="text-lg font-semibold">{step.title}</h3>
              </div>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
