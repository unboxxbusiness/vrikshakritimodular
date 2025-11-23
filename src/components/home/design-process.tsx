import { ClipboardList, Ruler, Box, Factory, Wrench, LifeBuoy } from 'lucide-react';
import { cn } from '@/lib/utils';

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

const ProcessStep = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};


export function DesignProcess() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-semibold lg:text-5xl">Our Hassle-Free Process</h2>
          <p className="text-muted-foreground">From initial consultation to final handover, we've streamlined every step to ensure a smooth and transparent experience for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {steps.map((step, index) => (
            <ProcessStep key={step.title} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
