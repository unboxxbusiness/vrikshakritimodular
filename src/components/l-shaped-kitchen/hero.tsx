"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'l-shaped-kitchen-hero-1');

  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 max-w-3xl space-y-6">
          <h1 className="text-4xl font-semibold lg:text-5xl">L-Shaped Modular Kitchens</h1>
          <p className="text-muted-foreground">
            Discover the perfect blend of functionality and style with our L-Shaped modular kitchens. Ideal for small to medium-sized spaces, this layout maximizes corner space and creates an efficient work triangle.
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
