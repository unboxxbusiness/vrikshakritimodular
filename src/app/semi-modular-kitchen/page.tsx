import { Hero } from '@/components/semi-modular-kitchen/hero';
import { WhyChoose } from '@/components/semi-modular-kitchen/why-choose';
import { BestSuitedFor } from '@/components/semi-modular-kitchen/best-suited-for';
import { DesignOptions } from '@/components/semi-modular-kitchen/design-options';
import { Cta } from '@/components/home/cta';
import { Gallery } from '@/components/semi-modular-kitchen/gallery';

export default function SemiModularKitchenPage() {
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
