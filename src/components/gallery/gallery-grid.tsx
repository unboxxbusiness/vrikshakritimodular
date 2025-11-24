"use client";

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export function GalleryGrid() {
  const portfolioImages = PlaceHolderImages.filter(img => img.id.startsWith('portfolio-'));

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {portfolioImages.map((image, index) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div className="relative overflow-hidden rounded-lg cursor-pointer group">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                   <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
