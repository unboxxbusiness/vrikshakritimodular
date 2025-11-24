"use client";

import { Palette, Layers, Sparkles, Box } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const textures = [
  "Gloss",
  "Matte",
  "Super-matte",
  "Textured wood",
  "Stone-like patterns",
  "Metallic finishes",
];
const themes = [
  "Warm wooden tones",
  "Minimal whites & greys",
  "Rich dual-tone combinations",
  "Matte blacks & premium dark shades",
  "Pastel & earthy palettes",
];

export function FinishOptions() {
    const image = PlaceHolderImages.find(img => img.id === 'finish-options-1');
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold md:text-4xl">Find the Style That Matches Your Personality</h2>
            <p className="mt-4 text-muted-foreground">We offer a wide range of finishes that suit every home aesthetic:</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h3 className="font-semibold text-xl flex items-center mb-4"><Layers className="size-6 mr-3 text-primary"/> Surface Textures</h3>
              <div className="flex flex-wrap gap-3">
                {textures.map((texture) => (
                  <div key={texture} className="py-2 px-4 bg-muted/50 rounded-full text-sm">
                    {texture}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-xl flex items-center mb-4"><Palette className="size-6 mr-3 text-primary" /> Popular Color Themes</h3>
              <div className="flex flex-wrap gap-3">
                {themes.map((theme) => (
                  <div key={theme} className="py-2 px-4 bg-muted/50 rounded-full text-sm">
                    {theme}
                  </div>
                ))}
              </div>
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
