"use client";

import { ShieldCheck } from "lucide-react";

const benefits = [
  "Long-term strength",
  "Moisture resistance",
  "Thermal durability",
  "Scratch & impact protection",
  "Easy maintenance",
  "Timeless aesthetics",
];

export function WhyMaterialsMatter() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Built for Indian Homes. Designed for Daily Life.</h2>
          <p className="mt-4 text-muted-foreground">Each material and finish at Vrikshakriti is handpicked to offer:</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center">
                <ShieldCheck className="size-5 text-primary mr-3 flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground font-medium">We ensure your kitchen stays beautiful—and functional—for 10–15 years and beyond.</p>
        </div>
      </div>
    </section>
  );
}
