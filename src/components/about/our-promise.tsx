"use client";

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function OurPromise() {
  const ourPromiseImage = PlaceHolderImages.find(img => img.id === 'our-promise-1');

  const promises = [
    'Kitchens built to last 10–15 years and beyond',
    'Premium hardware from trusted global brands',
    'A smooth, timeline-based execution',
    'Designs that elevate everyday living',
    'A team committed to quality and customer satisfaction',
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square">
            {ourPromiseImage && (
              <Image
                src={ourPromiseImage.imageUrl}
                alt={ourPromiseImage.description}
                data-ai-hint={ourPromiseImage.imageHint}
                fill
                className="object-cover rounded-3xl"
              />
            )}
          </div>
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">What You Can Expect from Us</h2>
            <p className="mt-4 text-muted-foreground">
              Our promise is simple: to deliver a kitchen that you will love for years to come. We stand behind our work with a commitment to excellence at every step.
            </p>
            <ul className="mt-8 space-y-4">
              {promises.map((promise) => (
                <li key={promise} className="flex items-start">
                  <CheckCircle className="size-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-foreground">{promise}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
