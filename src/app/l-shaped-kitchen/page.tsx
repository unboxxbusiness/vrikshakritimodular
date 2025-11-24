import { Hero } from '@/components/l-shaped-kitchen/hero';
import { WhyChoose } from '@/components/l-shaped-kitchen/why-choose';
import { BestSuitedFor } from '@/components/l-shaped-kitchen/best-suited-for';
import { DesignOptions } from '@/components/l-shaped-kitchen/design-options';
import { Cta } from '@/components/home/cta';
import { Gallery } from '@/components/l-shaped-kitchen/gallery';

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
