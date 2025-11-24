
"use client";

import { Gem, Shield, Square } from "lucide-react";
import { cn } from "@/lib/utils";

const countertops = [
  { name: "Granite", description: "Durable, heat-resistant, easy to maintain", icon: <Gem className="size-8 text-primary" /> },
  { name: "Quartz", description: "Premium, non-porous, stain-free", icon: <Shield className="size-8 text-primary" /> },
  { name: "Solid Surface", description: "Seamless, elegant, customizable", icon: <Square className="size-8 text-primary" /> },
];

export function CountertopOptions() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h2>Countertop Options</h2>
            <p className="mt-4 text-muted-foreground">
              The right countertop brings your kitchen together. We offer a range of popular choices to suit your needs.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 relative z-10 max-w-7xl mx-auto">
            {countertops.map((countertop, index) => (
                <Feature 
                    key={countertop.name} 
                    title={countertop.name}
                    description={countertop.description}
                    icon={countertop.icon}
                    index={index}
                />
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
        "lg:border-b-0"
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
