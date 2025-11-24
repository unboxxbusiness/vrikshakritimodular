import { Hero } from '@/components/parallel-kitchen/hero';
import { WhyChoose } from '@/components/parallel-kitchen/why-choose';
import { BestSuitedFor } from '@/components/parallel-kitchen/best-suited-for';
import { DesignOptions } from '@/components/parallel-kitchen/design-options';
import { Cta } from '@/components/home/cta';
import { Breadcrumb } from '@/components/layout/breadcrumb';

export default function ParallelKitchenPage() {
    const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Parallel Kitchen', href: '/parallel-kitchen' },
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