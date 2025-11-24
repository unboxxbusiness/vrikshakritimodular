import { Hero } from '@/components/about/hero';
import { OurApproach } from '@/components/about/our-approach';
import { OurPromise } from '@/components/about/our-promise';
import { OurValues } from '@/components/about/our-values';
import { WhatWeDo } from '@/components/about/what-we-do';
import { ClosingStatement } from '@/components/about/closing-statement';
import { Cta } from '@/components/home/cta';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Vrikshakriti',
    description: 'Learn about Vrikshakriti\'s mission to craft kitchens that feel like home. Discover our values, our process, and our commitment to quality craftsmanship.',
};

export default function AboutPage() {
  return (
    <>
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
