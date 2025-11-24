"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'u-shaped-kitchen-hero-1');

  return (
    <section className="py-16 md:py-32 bg-background pt-24">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 max-w-3xl space-y-6 text-center mx-auto">
          <h1 className="text-4xl font-semibold lg:text-5xl">U-Shaped Modular Kitchens – Maximum Storage, Maximum Efficiency</h1>
          <p className="text-muted-foreground text-lg">
            A U-Shaped modular kitchen wraps around three sides of the room, giving you exceptional counter space, abundant storage, and a highly efficient working environment.
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
