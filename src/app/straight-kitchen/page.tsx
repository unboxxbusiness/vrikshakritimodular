import { Hero } from '@/components/straight-kitchen/hero';
import { WhyChoose } from '@/components/straight-kitchen/why-choose';
import { BestSuitedFor } from '@/components/straight-kitchen/best-suited-for';
import { DesignOptions } from '@/components/straight-kitchen/design-options';
import { Cta } from '@/components/home/cta';

export default function StraightKitchenPage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <BestSuitedFor />
      <DesignOptions />
      <Cta />
    </>
  );
}
