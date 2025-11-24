import { Hero } from '@/components/island-kitchen/hero';
import { WhyChoose } from '@/components/island-kitchen/why-choose';
import { BestSuitedFor } from '@/components/island-kitchen/best-suited-for';
import { DesignOptions } from '@/components/island-kitchen/design-options';
import { Cta } from '@/components/home/cta';

export default function IslandKitchenPage() {
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
