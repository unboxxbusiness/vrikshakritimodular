
"use client";

import { Palette, Layers, Sparkles, Box, Contrast, Bot, Leaf, Building } from "lucide-react";
import { cn } from "@/lib/utils";

const textures = [
  { title: "Gloss", description: "A high-shine, reflective finish for a modern look.", icon: <Sparkles className="size-8 text-primary" /> },
  { title: "Matte", description: "A smooth, non-reflective finish that hides fingerprints.", icon: <Bot className="size-8 text-primary" /> },
  { title: "Textured Wood", description: "Mimics the natural grain and feel of wood.", icon: <Leaf className="size-8 text-primary" /> },
  { title: "Stone-like", description: "Patterns that resemble granite, marble, or other stones.", icon: <Building className="size-8 text-primary" /> },
];

const themes = [
  { title: "Warm Wooden Tones", description: "Creates a cozy, natural, and inviting atmosphere.", icon: <Palette className="size-8 text-primary" /> },
  { title: "Minimal Whites & Greys", description: "Clean, modern, and makes spaces feel larger.", icon: <Layers className="size-8 text-primary" /> },
  { title: "Rich Dual-Tone", description: "Contrasting colors for a bold, contemporary statement.", icon: <Contrast className="size-8 text-primary" /> },
  { title: "Premium Dark Shades", description: "Luxurious matte blacks and deep greys for a sophisticated feel.", icon: <Box className="size-8 text-primary" /> },
];

const Feature = ({
  title,
  description,
  icon,
  index,
  total,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  total: number;
}) => {
  const isFirstInRow = index % 4 === 0;
  const isLastInRow = (index + 1) % 4 === 0 || index === total - 1;
  const isBottomRow = Math.floor(index / 4) === Math.floor((total - 1) / 4);

  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature dark:border-neutral-800",
        !isLastInRow && "lg:border-r",
        isFirstInRow && "lg:border-l",
        !isBottomRow && "border-b"
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


export function FinishOptions() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
            <h2>Find the Style That Matches Your Personality</h2>
            <p className="mt-4 text-muted-foreground">We offer a wide range of finishes that suit every home aesthetic. Explore our popular textures and color themes to find the perfect match for your kitchen.</p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-center mb-10">Surface Textures</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
              {textures.map((feature, index) => (
                  <Feature key={feature.title} {...feature} index={index} total={textures.length}/>
              ))}
          </div>
        </div>

        <div>
          <h3 className="text-center mb-10">Popular Color Themes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
              {themes.map((feature, index) => (
                  <Feature key={feature.title} {...feature} index={index} total={themes.length}/>
              ))}
          </div>
        </div>

      </div>
    </section>
  );
}
