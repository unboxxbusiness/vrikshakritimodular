"use client";

import { Wrench, Component, Box, CornerUpLeft, Utensils, GlassWater, Trash2 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const brands = ["Blum", "Hafele", "Hettich"];

const accessories = [
  { name: "Soft-closing drawers", icon: <Box className="size-5" /> },
  { name: "Tandem boxes", icon: <Component className="size-5" /> },
  { name: "Tall units & pantry pull-outs", icon: <Wrench className="size-5" /> },
  { name: "Magic corners", icon: <CornerUpLeft className="size-5" /> },
  { name: "Cutlery organizers", icon: <Utensils className="size-5" /> },
  { name: "Bottle pull-outs", icon: <GlassWater className="size-5" /> },
  { name: "Under-sink organizers", icon: <Trash2 className="size-5" /> },
];

export function HardwareAccessories() {
    const image = PlaceHolderImages.find(img => img.id === 'hardware-1');
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
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
            <div>
                <h2 className="text-3xl font-semibold md:text-4xl">Smooth Performance with Premium Hardware</h2>
                <p className="mt-4 text-muted-foreground">
                We work with globally trusted brands known for quality, durability, and effortless function. Every component is engineered for long-term reliability.
                </p>
                <div className="mt-8">
                    <h3 className="font-semibold text-lg mb-4">Hardware Brands</h3>
                    <div className="flex flex-wrap gap-4">
                        {brands.map((brand) => (
                        <div key={brand} className="py-2 px-4 bg-muted/50 rounded-full text-sm font-medium">
                            {brand}
                        </div>
                        ))}
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="font-semibold text-lg mb-4">Accessories Include:</h3>
                    <ul className="grid grid-cols-2 gap-4">
                        {accessories.map((accessory) => (
                        <li key={accessory.name} className="flex items-center text-sm">
                            <div className="text-primary mr-3">{accessory.icon}</div>
                            {accessory.name}
                        </li>
                        ))}
                    </ul>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}
