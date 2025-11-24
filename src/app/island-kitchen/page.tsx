import { Hero } from '@/components/island-kitchen/hero';
import { WhyChoose } from '@/components/island-kitchen/why-choose';
import { BestSuitedFor } from '@/components/island-kitchen/best-suited-for';
import { DesignOptions } from '@/components/island-kitchen/design-options';
import { Cta } from '@/components/home/cta';
import { Breadcrumb } from '@/components/layout/breadcrumb';

export default function IslandKitchenPage() {
    const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Island Kitchen', href: '/island-kitchen' },
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