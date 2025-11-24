import { Hero } from '@/components/semi-modular-kitchen/hero';
import { WhyChoose } from '@/components/semi-modular-kitchen/why-choose';
import { BestSuitedFor } from '@/components/semi-modular-kitchen/best-suited-for';
import { DesignOptions } from '@/components/semi-modular-kitchen/design-options';
import { Cta } from '@/components/home/cta';
import { Breadcrumb } from '@/components/layout/breadcrumb';

export default function SemiModularKitchenPage() {
    const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Semi-Modular Kitchen', href: '/semi-modular-kitchen' },
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