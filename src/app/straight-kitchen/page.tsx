import { Hero } from '@/components/straight-kitchen/hero';
import { WhyChoose } from '@/components/straight-kitchen/why-choose';
import { BestSuitedFor } from '@/components/straight-kitchen/best-suited-for';
import { DesignOptions } from '@/components/straight-kitchen/design-options';
import { Cta } from '@/components/home/cta';
import { Gallery } from '@/components/straight-kitchen/gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Straight Modular Kitchens',
    description: 'Explore our clean, modern, and minimal straight modular kitchens. This single-wall layout is perfect for compact homes and studio apartments.',
};

export default function StraightKitchenPage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <BestSuitedFor />
      <DesignOptions />
      <div id="gallery">
        <Gallery />
      </div>
      <Cta />
    </>
  );
}
