import { Hero } from '@/components/island-kitchen/hero';
import { WhyChoose } from '@/components/island-kitchen/why-choose';
import { BestSuitedFor } from '@/components/island-kitchen/best-suited-for';
import { DesignOptions } from '@/components/island-kitchen/design-options';
import { Cta } from '@/components/home/cta';
import { Gallery } from '@/components/island-kitchen/gallery';

export default function IslandKitchenPage() {
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
