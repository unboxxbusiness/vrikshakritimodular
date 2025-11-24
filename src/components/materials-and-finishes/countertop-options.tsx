"use client";

import { Gem, Shield, Square } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const countertops = [
  { name: "Granite", description: "Durable, heat-resistant, easy to maintain", icon: <Gem className="size-8 text-primary" /> },
  { name: "Quartz", description: "Premium, non-porous, stain-free", icon: <Shield className="size-8 text-primary" /> },
  { name: "Solid Surface", description: "Seamless, elegant, customizable", icon: <Square className="size-8 text-primary" /> },
];

export function CountertopOptions() {
    const image = PlaceHolderImages.find(img => img.id === 'countertops-1');
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Countertop Options</h2>
            <p className="mt-4 text-muted-foreground">
              The right countertop brings your kitchen together. We offer a range of popular choices to suit your needs.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {countertops.map((countertop) => (
                <div key={countertop.name} className="text-center p-6 bg-muted/50 rounded-lg">
                  <div className="flex justify-center mb-4">{countertop.icon}</div>
                  <h3 className="font-semibold text-lg">{countertop.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{countertop.description}</p>
                </div>
              ))}
            </div>
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
