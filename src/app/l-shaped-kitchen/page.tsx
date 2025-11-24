import { Hero } from '@/components/l-shaped-kitchen/hero';
import { WhyChoose } from '@/components/l-shaped-kitchen/why-choose';
import { BestSuitedFor } from '@/components/l-shaped-kitchen/best-suited-for';
import { DesignOptions } from '@/components/l-shaped-kitchen/design-options';
import { Cta } from '@/components/home/cta';
import { Gallery } from '@/components/l-shaped-kitchen/gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'L-Shaped Modular Kitchens',
    description: 'Explore our stylish and space-saving L-shaped modular kitchens. Ideal for small to mid-sized homes, this layout offers a perfect blend of efficiency and elegance.',
};

export default function LShapedKitchenPage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <BestSuitedFor />
      <DesignOptions />
      <Gallery />
      <Cta />
    </>
  );
}
