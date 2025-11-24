import { Hero } from '@/components/l-shaped-kitchen/hero';
import { WhyChoose } from '@/components/l-shaped-kitchen/why-choose';
import { BestSuitedFor } from '@/components/l-shaped-kitchen/best-suited-for';
import { DesignOptions } from '@/components/l-shaped-kitchen/design-options';
import { Cta } from '@/components/home/cta';

export default function LShapedKitchenPage() {
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
