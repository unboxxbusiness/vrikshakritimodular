"use client";

import { LayoutTemplate, Palette, DollarSign, Box, Archive, CalendarClock } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    { 
        title: "Personalized layout suggestions",
        description: "Get expert advice on the best kitchen layout for your space and cooking style.",
        icon: <LayoutTemplate />
    },
    { 
        title: "Material & finish recommendations",
        description: "Explore a curated selection of materials and finishes that fit your aesthetic and budget.",
        icon: <Palette />
    },
    { 
        title: "Budget estimate based on your space",
        description: "Receive a transparent, no-obligation cost estimate for your dream kitchen.",
        icon: <DollarSign />
    },
    { 
        title: "3D design preview guidance",
        description: "Visualize your future kitchen with our 3D rendering process.",
        icon: <Box />
    },
    { 
        title: "Accessory & storage planning",
        description: "Discover smart storage solutions and accessories to maximize functionality.",
        icon: <Archive />
    },
    { 
        title: "Complete project timeline explanation",
        description: "Understand the end-to-end process, from design to installation.",
        icon: <CalendarClock />
    },
];

export function WhatYouGet() {
    return (
        <section className="py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold md:text-4xl">What’s Included in the Free Consultation?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10">
                    {features.map((feature, index) => (
                        <Feature key={feature.title} {...feature} index={index} />
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Everything happens directly on WhatsApp, so you get quick replies and easy follow-ups.
                    </p>
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
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
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
