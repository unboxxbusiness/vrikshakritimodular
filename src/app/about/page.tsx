import { Hero } from '@/components/about/hero';
import { OurApproach } from '@/components/about/our-approach';
import { OurValues } from '@/components/about/our-values';
import { WhatWeDo } from '@/components/about/what-we-do';

export default function AboutPage() {
  return (
    <>
      <Hero />
      <OurValues />
      <WhatWeDo />
      <OurApproach />
    </>
  );
}
