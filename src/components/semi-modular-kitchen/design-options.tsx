"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, PanelTop, Grid3x3, RefreshCw, Layers } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export function DesignOptions() {
  const designOptionsImage = PlaceHolderImages.find(img => img.id === 'semi-modular-options-1');

  const options = [
    { text: 'New shutters on existing base', icon: <PanelTop className="size-5 mr-3 text-primary" /> },
    { text: 'Fresh overhead cabinets', icon: <Layers className="size-5 mr-3 text-primary" /> },
    { text: 'Modular drawers in old space', icon: <Grid3x3 className="size-5 mr-3 text-primary" /> },
    { text: 'Accessory upgrades (tandems, organizers)', icon: <RefreshCw className="size-5 mr-3 text-primary" /> },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Design Options</h2>
            <p className="mt-4 text-muted-foreground">
              Upgrade your existing kitchen with our flexible semi-modular solutions.
            </p>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {options.map((option) => (
                <li key={option.text} className="flex items-center text-foreground p-4 bg-muted/50 rounded-lg">
                  {option.icon}
                  <span>{option.text}</span>
                </li>
              ))}
            </ul>
             <div className="mt-10 flex items-center justify-start gap-x-6">
                <Button asChild>
                    <Link href="#">
                        Explore Semi-Modular Solutions <ArrowRight className="size-4 ml-2" />
                    </Link>
                </Button>
            </div>
          </div>
          <div className="relative aspect-square">
            {designOptionsImage && (
              <Image
                src={designOptionsImage.imageUrl}
                alt={designOptionsImage.description}
                data-ai-hint={designOptionsImage.imageHint}
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
