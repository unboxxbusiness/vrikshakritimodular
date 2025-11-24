
"use client";

import { ShieldCheck, Waves, Thermometer, HardHat, Wrench, Gem } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "Long-term strength",
    icon: <ShieldCheck className="size-8 text-primary" />,
  },
  {
    title: "Moisture resistance",
    icon: <Waves className="size-8 text-primary" />,
  },
  {
    title: "Thermal durability",
    icon: <Thermometer className="size-8 text-primary" />,
  },
  {
    title: "Scratch & impact protection",
    icon: <HardHat className="size-8 text-primary" />,
  },
  {
    title: "Easy maintenance",
    icon: <Wrench className="size-8 text-primary" />,
  },
  {
    title: "Timeless aesthetics",
    icon: <Gem className="size-8 text-primary" />,
  },
];

export function WhyMaterialsMatter() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2>Built for Indian Homes. Designed for Daily Life.</h2>
          <p className="mt-4 text-muted-foreground">Each material and finish at Vrikshakriti is handpicked to offer:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Feature 
              key={benefit.title} 
              title={benefit.title} 
              icon={benefit.icon} 
              index={index} 
            />
          ))}
        </div>

        <p className="mt-12 text-center text-muted-foreground font-medium">We ensure your kitchen stays beautiful—and functional—for 10–15 years and beyond.</p>
      </div>
    </section>
  );
}


const Feature = ({
  title,
  icon,
  index,
}: {
  title: string;
  icon: React.ReactNode;
  index: number;
}) => {
  const total = benefits.length;
  const isFirstInRow = index % 3 === 0;
  const isBottomRow = Math.floor(index / 3) === Math.floor((total - 1) / 3);

  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center text-center lg:border-r py-10 relative group/feature dark:border-neutral-800",
        isFirstInRow && "lg:border-l dark:border-neutral-800",
        !isBottomRow && "border-b dark:border-neutral-800",
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
    </div>
  );
};
