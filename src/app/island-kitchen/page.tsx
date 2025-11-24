import { Hero } from '@/components/island-kitchen/hero';
import { WhyChoose } from '@/components/island-kitchen/why-choose';
import { BestSuitedFor } from '@/components/island-kitchen/best-suited-for';
import { DesignOptions } from '@/components/island-kitchen/design-options';
import { Cta } from '@/components/home/cta';
import { Gallery } from '@/components/island-kitchen/gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Island Modular Kitchens',
    description: 'Experience luxury with an island modular kitchen. A central counter serves as a workspace, dining area, or entertainment spot in upscale, open-concept homes.',
};

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
