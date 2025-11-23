import { Hero } from '@/components/home/hero';
import { KitchenStyles } from '@/components/home/kitchen-styles';
import { WhyVrikshakriti } from '@/components/home/why-vrikshakriti';
import { DesignProcess } from '@/components/home/design-process';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyVrikshakriti />
      <KitchenStyles />
      <DesignProcess />
    </>
  );
}
