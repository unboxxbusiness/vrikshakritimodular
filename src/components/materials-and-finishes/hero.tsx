"use client";

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'materials-hero-1');

  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 max-w-4xl space-y-6 text-center mx-auto">
          <h1 className="text-4xl font-semibold lg:text-5xl">
            Premium Materials & Stylish Finishes Made for Modern Indian Kitchens
          </h1>
          <p className="text-muted-foreground text-lg">
            A great modular kitchen begins with the right materials. At Vrikshakriti, we use carefully selected, high-quality boards, shutters, hardware, and finishes to ensure your kitchen looks beautiful and performs effortlessly for years. Whether you want luxurious aesthetics, long-term durability, or easy maintenance, our curated range of materials and finishes gives you complete flexibility.
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
