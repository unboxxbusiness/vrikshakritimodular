"use client";

import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function OurApproach() {
  const features = [
    {
      title: "Design with Purpose",
      description:
        "Every kitchen we create is planned around real-life usage—cooking habits, storage needs, ergonomics, movement flow, and family lifestyle.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Honest Craftsmanship",
      description:
        "We use premium materials, innovative hardware, and factory-finished precision to ensure strength, durability, and a premium finish.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Transparency & Trust",
      description:
        "From pricing to timelines, everything is clearly communicated. No shortcuts. No hidden charges.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Customer-Centric Service",
      description:
        "Your experience matters. We focus on collaboration, clarity, and support at every stage of the project—from design to installation and beyond.",
      icon: <IconCloud />,
    },
    {
      title: "Smart Use of Space",
      description: "Our designs maximize every corner for optimal functionality.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Optimal Storage",
      description:
        "We integrate clever storage solutions to keep your kitchen organized.",
      icon: <IconHelp />,
    },
    {
      title: "Easy Maintenance",
      description:
        "Materials and finishes are chosen for their durability and ease of cleaning.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Aesthetic Harmony",
      description: "We ensure your new kitchen complements your home's overall style.",
      icon: <IconHeart />,
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold text-center md:text-4xl">Our Approach</h2>
            <p className="text-muted-foreground mt-4">We follow a systematic, customer-friendly process to ensure that your kitchen project is smooth, transparent, and stress-free. From idea to installation, our team handles every detail with precision. Our design philosophy revolves around:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
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
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
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
