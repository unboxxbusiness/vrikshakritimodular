"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'l-shaped-kitchen-hero-1');

  return (
    <section className="py-16 md:py-32 bg-background pt-16">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 max-w-3xl space-y-6 text-center mx-auto">
          <h1 className="text-4xl font-semibold lg:text-5xl">L-Shaped Modular Kitchens – Smart, Space-Saving & Stylish</h1>
          <p className="text-muted-foreground text-lg">
            The L-Shaped modular kitchen is one of the most practical and popular layouts for modern Indian homes. Designed to maximize corner space and open up the room, it offers a perfect balance of efficiency and elegance.
          </p>
        </div>
        {heroImage && (
          <div className="relative aspect-video w-full">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              data-ai-hint={heroImage.imageHint}
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        )}
      </div>
    </section>
  );
}
