
"use client";

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function OurApproach() {
  const ourApproachImage = PlaceHolderImages.find(img => img.id === 'our-approach-1');

  const designPrinciples = [
    'Smart use of space',
    'Optimal storage',
    'Easy maintenance',
    'High durability',
    'Aesthetic harmony',
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Our Approach</h2>
            <p className="mt-4 text-muted-foreground">
              We follow a systematic, customer-friendly process to ensure that your kitchen project is smooth, transparent, and stress-free. From idea to installation, our team handles every detail with precision.
            </p>
            <p className="mt-4 text-muted-foreground">Our design philosophy revolves around:</p>
            <ul className="mt-8 space-y-4">
              {designPrinciples.map((principle) => (
                <li key={principle} className="flex items-start">
                  <CheckCircle className="size-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-foreground">{principle}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square">
            {ourApproachImage && (
              <Image
                src={ourApproachImage.imageUrl}
                alt={ourApproachImage.description}
                data-ai-hint={ourApproachImage.imageHint}
                fill
                className="object-cover rounded-3xl"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
