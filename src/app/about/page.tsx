import { Hero } from '@/components/about/hero';
import { OurApproach } from '@/components/about/our-approach';
import { OurPromise } from '@/components/about/our-promise';
import { OurValues } from '@/components/about/our-values';
import { WhatWeDo } from '@/components/about/what-we-do';
import { ClosingStatement } from '@/components/about/closing-statement';
import { Cta } from '@/components/home/cta';
import { Breadcrumb } from '@/components/layout/breadcrumb';

export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <Hero />
      <OurValues />
      <WhatWeDo />
      <OurApproach />
      <OurPromise />
      <ClosingStatement />
      <Cta />
    </>
  );
}