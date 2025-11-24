"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, PanelTop, Grid3x3, RefreshCw, Layers } from 'lucide-react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

const options = [
  { text: 'New Shutters', description: 'Refresh the look with new cabinet doors.', icon: <PanelTop className="size-8 text-primary" /> },
  { text: 'Overhead Cabinets', description: 'Add or replace upper storage units.', icon: <Layers className="size-8 text-primary" /> },
  { text: 'Modular Drawers', description: 'Upgrade to smooth, modern drawers.', icon: <Grid3x3 className="size-8 text-primary" /> },
  { text: 'Accessory Upgrades', description: 'Install smart organizers and pull-outs.', icon: <RefreshCw className="size-8 text-primary" /> },
];

export function DesignOptions() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center md:text-4xl">Design Options</h2>
            <p className="text-muted-foreground mt-4">Upgrade your existing kitchen with our flexible semi-modular solutions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 pt-10 max-w-7xl mx-auto">
            {options.map((option, index) => (
                <Feature key={option.text} title={option.text} description={option.description} icon={option.icon} index={index} />
            ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild>
                <Link href="#">
                    Explore Semi-Modular Solutions <ArrowRight className="size-4 ml-2" />
                </Link>
            </Button>
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
