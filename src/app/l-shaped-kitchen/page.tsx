import { Hero } from '@/components/l-shaped-kitchen/hero';
import { WhyChoose } from '@/components/l-shaped-kitchen/why-choose';
import { BestSuitedFor } from '@/components/l-shaped-kitchen/best-suited-for';
import { DesignOptions } from '@/components/l-shaped-kitchen/design-options';
import { Cta } from '@/components/home/cta';
import { Breadcrumb } from '@/components/layout/breadcrumb';

export default function LShapedKitchenPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'L-Shaped Kitchen', href: '/l-shaped-kitchen' },
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
