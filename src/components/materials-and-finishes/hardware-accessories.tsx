"use client";

import { Wrench, Component, Box, CornerUpLeft, Utensils, GlassWater, Trash2, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const hardwareItems = [
  {
    title: "Premium Brands",
    description: "We use globally trusted hardware from brands like Blum, Hafele, and Hettich for guaranteed quality.",
    icon: <CheckCircle className="size-8 text-primary" />,
  },
  {
    title: "Soft-Closing Drawers",
    description: "Experience silent and smooth-closing drawers that add a touch of luxury and prevent slamming.",
    icon: <Box className="size-8 text-primary" />,
  },
  {
    title: "Tandem Boxes",
    description: "Deep, high-load drawers with full extension, offering easy access and maximum storage.",
    icon: <Component className="size-8 text-primary" />,
  },
  {
    title: "Tall Units & Pantries",
    description: "Vertical storage solutions that make organizing groceries and large items effortless.",
    icon: <Wrench className="size-8 text-primary" />,
  },
  {
    title: "Magic Corners",
    description: "Innovative solutions that make hard-to-reach corner spaces fully accessible and usable.",
    icon: <CornerUpLeft className="size-8 text-primary" />,
  },
  {
    title: "Cutlery Organizers",
    description: "Keep your spoons, forks, and knives neatly arranged with dedicated drawer inserts.",
    icon: <Utensils className="size-8 text-primary" />,
  },
  {
    title: "Bottle Pull-Outs",
    description: "Narrow, sliding shelves perfect for organizing oils, spices, and sauces next to the hob.",
    icon: <GlassWater className="size-8 text-primary" />,
  },
  {
    title: "Under-Sink Units",
    description: "Smart organizers to neatly store cleaning supplies and waste bins in the under-sink area.",
    icon: <Trash2 className="size-8 text-primary" />,
  },
];


export function HardwareAccessories() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold md:text-4xl">Smooth Performance with Premium Hardware</h2>
          <p className="mt-4 text-muted-foreground">We work with globally trusted brands known for quality, durability, and effortless function. Every component is engineered for long-term reliability.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
            {hardwareItems.map((item, index) => (
                <Feature key={item.title} {...item} index={index} />
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
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
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
