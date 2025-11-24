import { Hero } from '@/components/u-shaped-kitchen/hero';
import { WhyChoose } from '@/components/u-shaped-kitchen/why-choose';
import { BestSuitedFor } from '@/components/u-shaped-kitchen/best-suited-for';
import { DesignOptions } from '@/components/u-shaped-kitchen/design-options';
import { Cta } from '@/components/home/cta';
import { Breadcrumb } from '@/components/layout/breadcrumb';

export default function UShapedKitchenPage() {
    const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'U-Shaped Kitchen', href: '/u-shaped-kitchen' },
  ];
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <Hero />
      <WhyChoose />
      <BestSuitedFor />
      <DesignOptions />
      <Cta />
    </>
  );
}