import { Hero } from '@/components/home/hero';
import { KitchenStyles } from '@/components/home/kitchen-styles';
import { WhyVrikshakriti } from '@/components/home/why-vrikshakriti';
import { DesignProcess } from '@/components/home/design-process';
import { MaterialsFinishes } from '@/components/home/materials-finishes';
import { KitchenCosting } from '@/components/home/kitchen-costing';
import { PortfolioGallery } from '@/components/home/portfolio-gallery';
import { Cta } from '@/components/home/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyVrikshakriti />
      <KitchenStyles />
      <DesignProcess />
      <MaterialsFinishes />
      <KitchenCosting />
      <PortfolioGallery />
      <Cta />
    </>
  );
}
