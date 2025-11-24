import { Hero } from '@/components/straight-kitchen/hero';
import { WhyChoose } from '@/components/straight-kitchen/why-choose';
import { BestSuitedFor } from '@/components/straight-kitchen/best-suited-for';
import { DesignOptions } from '@/components/straight-kitchen/design-options';
import { Cta } from '@/components/home/cta';
import { Breadcrumb } from '@/components/layout/breadcrumb';

export default function StraightKitchenPage() {
    const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Straight Kitchen', href: '/straight-kitchen' },
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