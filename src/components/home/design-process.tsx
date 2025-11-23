import { ClipboardList, Ruler, Box, Factory, Wrench, LifeBuoy } from 'lucide-react';

const steps = [
  {
    title: "Step 1 — Consultation",
    description: "Tell us your needs and style preferences. We guide you with expert insights.",
    icon: <ClipboardList className="size-8 text-primary" />,
  },
  {
    title: "Step 2 — Space Measurement",
    description: "Our team measures your kitchen precisely for perfect planning.",
    icon: <Ruler className="size-8 text-primary" />,
  },
  {
    title: "Step 3 — 3D Design & Approval",
    description: "Visualize your kitchen with realistic 3D renders before manufacturing begins.",
    icon: <Box className="size-8 text-primary" />,
  },
  {
    title: "Step 4 — Manufacturing",
    description: "State-of-the-art factory production ensures accuracy and durability.",
    icon: <Factory className="size-8 text-primary" />,
  },
  {
    title: "Step 5 — Installation",
    description: "Trained installers assemble and finish your kitchen with spotless workmanship.",
    icon: <Wrench className="size-8 text-primary" />,
  },
  {
    title: "Step 6 — Handover & Support",
    description: "We walk you through the final kitchen and provide after-sales support.",
    icon: <LifeBuoy className="size-8 text-primary" />,
  },
];

const ProcessStep = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="rounded-lg space-y-4 border bg-card text-card-foreground shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-4">
            {icon}
            <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
    </div>
);


export function DesignProcess() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-semibold lg:text-5xl">Our Hassle-Free Process</h2>
          <p className="text-muted-foreground">From initial consultation to final handover, we've streamlined every step to ensure a smooth and transparent experience for you.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <ProcessStep key={step.title} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
