"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const shutters = [
  {
    title: "Acrylic Finish",
    appearance: "Glossy, mirror-like",
    features: [
      "Ultra-premium look",
      "Scratch-resistant",
      "Colour stays vibrant for years",
      "Easy to clean",
    ],
  },
  {
    title: "Laminate (Matte / Gloss)",
    appearance: "Smooth or textured, matte or glossy",
    features: [
      "Economical & durable",
      "Heat and stain resistant",
      "Huge variety of colors & textures",
      "Very easy to maintain",
    ],
  },
  {
    title: "PU Finish (Polyurethane)",
    appearance: "Luxury high-gloss or matte painted look",
    features: [
      "Seamless, elegant finish",
      "Durable and moisture-resistant",
      "Ideal for premium homes",
      "Custom color options available",
    ],
  },
  {
    title: "Membrane (PVC Foil)",
    appearance: "Soft, smooth, with classic contours",
    features: [
      "Elegant and timeless",
      "Excellent for classic-style kitchens",
      "Easy maintenance",
    ],
  },
   {
    title: "Veneer Finish",
    appearance: "Natural wood texture",
    features: [
      "Luxurious wooden look",
      "Ideal for high-end kitchens",
      "Rich, warm aesthetic",
    ],
  },
];

export function ShutterMaterials() {
    const image = PlaceHolderImages.find(img => img.id === 'shutter-materials-1');
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold md:text-4xl">Choose the Look You Love with Long-Lasting Shutter Options</h2>
          <p className="mt-4 text-muted-foreground">Shutters decide the style, shine, and texture of your modular kitchen. We offer a wide range of finishes that balance beauty with durability.</p>
        </div>
         <div className="grid md:grid-cols-2 gap-12 items-center">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {shutters.map((shutter) => (
                <div key={shutter.title} className="p-6 rounded-lg bg-muted/50">
                    <h3 className="font-semibold text-lg">{shutter.title}</h3>
                    <p className="text-sm text-primary mt-1">{shutter.appearance}</p>
                    <ul className="mt-4 space-y-2">
                        {shutter.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm">
                            <CheckCircle className="size-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                        </li>
                        ))}
                    </ul>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}
