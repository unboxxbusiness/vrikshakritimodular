import { Hero } from '@/components/parallel-kitchen/hero';
import { WhyChoose } from '@/components/parallel-kitchen/why-choose';
import { BestSuitedFor } from '@/components/parallel-kitchen/best-suited-for';
import { DesignOptions } from '@/components/parallel-kitchen/design-options';
import { Cta } from '@/components/home/cta';
import { Gallery } from '@/components/parallel-kitchen/gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Parallel (Galley) Modular Kitchens',
    description: 'Discover the professional-grade functionality of our parallel modular kitchens. This efficient layout provides maximum workspace, ideal for passionate home cooks.',
};

export default function ParallelKitchenPage() {
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
