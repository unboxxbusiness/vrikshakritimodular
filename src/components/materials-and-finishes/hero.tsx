"use client";

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { BGPattern } from '../ui/bg-pattern';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'materials-hero-1');

  return (
    <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <BGPattern variant="grid" size={32} mask="fade-y" className="opacity-10 dark:opacity-5" />
      <div className="relative z-10 max-w-4xl space-y-6 px-6">
        <h1 className="text-4xl font-semibold lg:text-6xl !leading-tight">
          Premium Materials & Stylish Finishes Made for Modern Indian Kitchens
        </h1>
        <p className="text-lg md:text-xl">
          A great modular kitchen begins with the right materials. At Vrikshakriti, we use carefully selected, high-quality boards, shutters, hardware, and finishes to ensure your kitchen looks beautiful and performs effortlessly for years. Whether you want luxurious aesthetics, long-term durability, or easy maintenance, our curated range of materials and finishes gives you complete flexibility.
        </p>
      </div>
    </section>
  );
}
