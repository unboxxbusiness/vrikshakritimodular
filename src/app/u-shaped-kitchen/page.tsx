import { Hero } from '@/components/u-shaped-kitchen/hero';
import { WhyChoose } from '@/components/u-shaped-kitchen/why-choose';
import { BestSuitedFor } from '@/components/u-shaped-kitchen/best-suited-for';
import { DesignOptions } from '@/components/u-shaped-kitchen/design-options';
import { Cta } from '@/components/home/cta';
import { Gallery } from '@/components/u-shaped-kitchen/gallery';

export default function UShapedKitchenPage() {
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
