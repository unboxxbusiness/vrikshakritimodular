"use client";

import { Building, Home, Users } from 'lucide-react';
import { cn } from "@/lib/utils";

const items = [
    { text: 'Apartments with compact kitchens', icon: <Building className="size-8 text-primary" /> },
    { text: 'Homes requiring multi-functional open layouts', icon: <Home className="size-8 text-primary" /> },
    { text: 'Families wanting a clean, minimal aesthetic', icon: <Users className="size-8 text-primary" /> },
];

export function BestSuitedFor() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center md:text-4xl">Best Suited For</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 relative z-10 pt-10 max-w-7xl mx-auto">
            {items.map((item, index) => (
                <Feature key={item.text} title={item.text} icon={item.icon} index={index} />
            ))}
        </div>
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
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0) && "lg:border-l dark:border-neutral-800",
        "border-b dark:border-neutral-800",
        index >= 0 && "lg:border-b-0"
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