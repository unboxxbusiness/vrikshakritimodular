"use client";

import { cn } from "@/lib/utils";
import { Wallet, Construction, Settings, Wrench } from "lucide-react";

export function WhyChoose() {
  const features = [
    {
      title: "Budget-Friendly",
      description:
        "Retain granite, sink, tiles, and civil base cabinets if they are in good condition.",
      icon: <Wallet className="size-8" />,
    },
    {
      title: "Quick Renovation",
      description:
        "Transform your kitchen without major construction.",
      icon: <Construction className="size-8" />,
    },
    {
      title: "Customizable",
      description:
        "Mix old civil structure with new shutters, drawers, and accessories.",
      icon: <Settings className="size-8" />,
    },
    {
      title: "Minimal Breakage",
      description:
        "Renovation without disturbing the plumbing or electrical lines.",
      icon: <Wrench className="size-8" />,
    },
  ];
  return (
    <section className="bg-background relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-center md:text-4xl">Why Choose a Semi-Modular Kitchen?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 pt-10 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </div>
    </section>
  );
}

const Feature = ({
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
        (index === 0) && "lg:border-l dark:border-neutral-800",
        "border-b dark:border-neutral-800",
         index >= 0 && "lg:border-b-0",
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-primary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-green-500 transition-all duration-200 origin-center" />
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
