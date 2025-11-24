"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const materials = [
  {
    title: "Marine-Grade Plywood (Recommended)",
    bestFor: "Long-term durability, heavy usage",
    highlights: [
      "Boiling Water Resistant (BWR)",
      "High strength & stability",
      "Highly moisture-proof",
      "Termite- and borer-resistant",
      "Ideal for wet areas (under-sink)",
    ],
  },
  {
    title: "HDHMR Board",
    bestFor: "Premium kitchens needing strength + smooth finish",
    highlights: [
      "High density, high moisture resistance",
      "Perfect for decorative finishes",
      "Excellent for shutters & tall units",
    ],
  },
  {
    title: "BWR Plywood",
    bestFor: "Budget-friendly durability",
    highlights: [
      "Water-resistant",
      "Suitable for most kitchen zones",
      "Reliable and long-lasting",
    ],
  },
  {
    title: "Particle Board (Economy Option)",
    bestFor: "Low-budget or rental kitchens",
    highlights: [
      "Lightweight",
      "Affordable",
      "Works well in dry zones",
    ],
  },
];

export function CarcassMaterials() {
  const image = PlaceHolderImages.find(img => img.id === 'carcass-materials-1');
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold md:text-4xl">Strong Foundations for Long-Lasting Kitchens</h2>
          <p className="mt-4 text-muted-foreground">The carcass (the internal body of your kitchen) needs to be sturdy, moisture-resistant, and termite-proof. We use only trusted, high-grade options designed for Indian cooking conditions.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {materials.map((material) => (
                <div key={material.title} className="p-6 rounded-lg bg-muted/50">
                    <h3 className="font-semibold text-lg">{material.title}</h3>
                    <p className="text-sm text-primary mt-1">Best for: {material.bestFor}</p>
                    <ul className="mt-4 space-y-2">
                        {material.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start text-sm">
                            <CheckCircle className="size-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                        </li>
                        ))}
                    </ul>
                </div>
            ))}
            </div>
            {image && (
                <div className="relative aspect-square">
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover rounded-3xl"
                    />
                </div>
            )}
        </div>
      </div>
    </section>
  );
}
