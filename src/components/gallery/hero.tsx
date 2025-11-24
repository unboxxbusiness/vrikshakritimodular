"use client";

import { Eye, Palette, Sparkles, Star } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="overflow-hidden py-16 md:py-32 bg-background pt-16">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-3xl text-center mx-auto">
          <h1 className="text-4xl font-semibold lg:text-5xl">A Collection of Kitchens Designed to Inspire</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Welcome to the Vrikshakriti Gallery—where thoughtful design meets timeless craftsmanship. Every kitchen you see here is a reflection of our passion for detail, our commitment to quality, and our belief that the heart of every home deserves to be beautiful, functional, and truly personal.
          </p>
        </div>
        <div className="mask-b-from-75% mask-l-from-75% mask-b-to-95% mask-l-to-95% relative -mx-4 pr-3 pt-3 md:-mx-12">
          <div className="perspective-midrange">
            <div className="rotate-x-6 -skew-2">
              <div className="aspect-video relative rounded-lg overflow-hidden border">
                <Image
                  src="https://res.cloudinary.com/dhrigocvd/image/upload/v1763958686/Gemini_Generated_Image_wkk0fiwkk0fiwkk0_zgz3un.png"
                  alt="Modern kitchen gallery hero image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Eye className="size-4" />
              <h3 className="text-sm font-medium">Browse & Explore</h3>
            </div>
            <p className="text-muted-foreground text-sm">Discover inspiration for every taste and home type.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Palette className="size-4" />
              <h3 className="text-sm font-medium">Diverse Styles</h3>
            </div>
            <p className="text-muted-foreground text-sm">From warm wood tones to sleek glossy finishes.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />
              <h3 className="text-sm font-medium">Imagine Your Kitchen</h3>
            </div>
            <p className="text-muted-foreground text-sm">See how our designs can transform your space.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Star className="size-4" />
              <h3 className="text-sm font-medium">Quality Craftsmanship</h3>
            </div>
            <p className="text-muted-foreground text-sm">A testament to our precision and quality materials.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
