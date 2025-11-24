
"use client";

import { cn } from "@/lib/utils";
import {
  Heart,
  HelpCircle,
  Route,
  Cloud,
  DollarSign,
  Settings,
  Terminal,
  Maximize,
} from "lucide-react";

export function WhatWeDo() {
  const features = [
    {
      title: "Personalized design consultation",
      description:
        "We start by understanding your needs, lifestyle, and aesthetic preferences.",
      icon: <Terminal />,
    },
    {
      title: "Space measurement & layout planning",
      description:
        "Our experts take precise measurements to ensure a perfect fit and optimal layout.",
      icon: <Settings />,
    },
    {
      title: "Custom 3D kitchen designs",
      description:
        "Visualize your dream kitchen with realistic 3D renders before we build it.",
      icon: <DollarSign />,
    },
    {
      title: "Material & finish selection",
      description: "We guide you through our curated selection of high-quality materials and finishes.",
      icon: <Cloud />,
    },
    {
      title: "Factory manufacturing",
      description: "Your kitchen is built with precision in our state-of-the-art facility.",
      icon: <Route />,
    },
    {
      title: "Professional installation",
      description:
        "Our skilled team ensures a seamless and professional installation process.",
      icon: <HelpCircle />,
    },
    {
      title: "After-sales support & warranty",
      description:
        "We stand by our work with comprehensive warranties and support.",
      icon: <Maximize />,
    },
    {
      title: "And everything else",
      description: "We handle all the details to bring your dream kitchen to life.",
      icon: <Heart />,
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h2>End-to-End Modular Kitchen Solutions</h2>
            <p className="mt-4 text-muted-foreground">
              We specialize exclusively in modular kitchens—allowing us to perfect our craft and stay dedicated to the space that matters most. Our services are designed to offer a complete, hassle-free experience:
            </p>
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
