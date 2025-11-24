"use client";

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function WhatWeDo() {
  const whatWeDoImage = PlaceHolderImages.find(img => img.id === 'what-we-do-1');

  const services = [
    'Personalized design consultation',
    'Space measurement & layout planning',
    'Custom 3D kitchen designs',
    'Material & finish selection guidance',
    'Factory manufacturing',
    'Professional installation',
    'After-sales support & warranty',
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square">
            {whatWeDoImage && (
              <Image
                src={whatWeDoImage.imageUrl}
                alt={whatWeDoImage.description}
                data-ai-hint={whatWeDoImage.imageHint}
                fill
                className="object-cover rounded-3xl"
              />
            )}
          </div>
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">End-to-End Modular Kitchen Solutions</h2>
            <p className="mt-4 text-muted-foreground">
              We specialize exclusively in modular kitchens—allowing us to perfect our craft and stay dedicated to the space that matters most. Our services are designed to offer a complete, hassle-free experience:
            </p>
            <ul className="mt-8 space-y-4">
              {services.map((service) => (
                <li key={service} className="flex items-start">
                  <CheckCircle className="size-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-foreground">{service}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-muted-foreground">
              Whether it's a compact apartment kitchen or a spacious island layout, we design with creativity, practicality, and long-term value in mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
