import { Hero } from '@/components/parallel-kitchen/hero';
import { WhyChoose } from '@/components/parallel-kitchen/why-choose';
import { BestSuitedFor } from '@/components/parallel-kitchen/best-suited-for';
import { DesignOptions } from '@/components/parallel-kitchen/design-options';
import { Cta } from '@/components/home/cta';
import { Gallery } from '@/components/parallel-kitchen/gallery';

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
