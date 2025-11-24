"use client";

import { cn } from "@/lib/utils";
import { Maximize, Triangle, Wind, Archive } from "lucide-react";

export function WhyChoose() {
  const features = [
    {
      title: "Space-Saving Layout",
      description:
        "Fits effortlessly into small and mid-sized homes, making optimal use of every inch.",
      icon: <Maximize className="size-8" />,
    },
    {
      title: "Seamless Work Triangle",
      description:
        "The sink, stove, and refrigerator form a natural triangle for smooth workflow.",
      icon: <Triangle className="size-8" />,
    },
    {
      title: "Open & Airy",
      description:
        "Leaves enough space for movement and dining integration.",
      icon: <Wind className="size-8" />,
    },
    {
      title: "Flexible Storage Options",
      description:
        "Corner units, tall units, and overhead cabinets can be customized to your needs.",
      icon: <Archive className="size-8" />,
    },
  ];
  return (
    <section className="bg-background relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-center md:text-4xl">Why Choose an L-Shaped Kitchen?</h2>
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
