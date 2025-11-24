"use client";

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function BestSuitedFor() {
  const bestSuitedForImage = PlaceHolderImages.find(img => img.id === 'semi-modular-best-for-1');

  const items = [
    'Homes with existing civil kitchens',
    'Quick makeovers',
    'Budget renovations',
    'Rental property improvements',
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square">
            {bestSuitedForImage && (
              <Image
                src={bestSuitedForImage.imageUrl}
                alt={bestSuitedForImage.description}
                data-ai-hint={bestSuitedForImage.imageHint}
                fill
                className="object-cover rounded-3xl"
              />
            )}
          </div>
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Best Suited For</h2>
            <ul className="mt-8 space-y-4">
              {items.map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle className="size-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
