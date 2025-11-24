
"use client";

import { Paintbrush, Layers, Shield, Sparkles, Gem } from "lucide-react";
import { cn } from "@/lib/utils";

const shutters = [
  {
    title: "Acrylic Finish",
    description: "Ultra-premium look. Scratch-resistant, vibrant, and easy to clean.",
    icon: <Sparkles className="size-8 text-primary" />,
  },
  {
    title: "Laminate (Matte / Gloss)",
    description: "Economical & durable. Heat and stain resistant with a huge variety of colors.",
    icon: <Layers className="size-8 text-primary" />,
  },
  {
    title: "PU Finish (Polyurethane)",
    description: "Luxury painted look. Seamless, durable, and moisture-resistant.",
    icon: <Paintbrush className="size-8 text-primary" />,
  },
  {
    title: "Membrane (PVC Foil)",
    description: "Elegant and timeless with soft contours. Easy to maintain.",
    icon: <Shield className="size-8 text-primary" />,
  },
   {
    title: "Veneer Finish",
    description: "Natural wood texture. Luxurious, rich, and warm aesthetic for high-end kitchens.",
    icon: <Gem className="size-8 text-primary" />,
  },
];

export function ShutterMaterials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2>Choose the Look You Love with Long-Lasting Shutter Options</h2>
          <p className="mt-4 text-muted-foreground">Shutters decide the style, shine, and texture of your modular kitchen. We offer a wide range of finishes that balance beauty with durability.</p>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto">
            {shutters.map((shutter, index) => (
                <Feature key={shutter.title} {...shutter} index={index} />
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
  const isEvenRow = Math.floor(index / 3) % 2 === 0;
  const isFirstInRow = index % 3 === 0;

  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature dark:border-neutral-800",
        "lg:border-r",
        "border-b dark:border-neutral-800",
        isFirstInRow && "lg:border-l"
      )}
    >
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      
      <div className="mb-4 relative z-10 px-10">
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
