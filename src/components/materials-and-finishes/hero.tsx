"use client";

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'materials-hero-1');

  return (
    <section className="py-16 md:py-32 pt-16">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        {heroImage && (
          <Image
            className="rounded-lg grayscale"
            src={heroImage.imageUrl}
            alt={heroImage.description || "A flat lay of various kitchen material samples including wood, marble, and fabric."}
            data-ai-hint={heroImage.imageHint}
            height={800}
            width={1200}
            loading="lazy"
          />
        )}

        <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
          <h2 className="text-4xl font-medium">
            Premium Materials & Stylish Finishes Made for Modern Indian Kitchens
          </h2>
          <div className="space-y-6">
            <p className="text-muted-foreground">
              A great modular kitchen begins with the right materials. At Vrikshakriti, we use carefully selected, high-quality boards, shutters, hardware, and finishes to ensure your kitchen looks beautiful and performs effortlessly for years.
            </p>

            <Button asChild size="sm" className="gap-1 pr-1.5">
              <Link href="#carcass-materials">
                <span>Explore Materials</span>
                <ChevronRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
