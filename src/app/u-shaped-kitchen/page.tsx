import { Hero } from '@/components/u-shaped-kitchen/hero';
import { WhyChoose } from '@/components/u-shaped-kitchen/why-choose';
import { BestSuitedFor } from '@/components/u-shaped-kitchen/best-suited-for';
import { DesignOptions } from '@/components/u-shaped-kitchen/design-options';
import { Cta } from '@/components/home/cta';
import { Gallery } from '@/components/u-shaped-kitchen/gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'U-Shaped Modular Kitchens',
    description: 'Discover U-shaped modular kitchens that offer maximum storage and efficiency. Perfect for larger homes and families who love to cook together.',
};

export default function UShapedKitchenPage() {
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
