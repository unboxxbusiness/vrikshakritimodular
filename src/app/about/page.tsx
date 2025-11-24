import { OurApproach } from '@/components/about/our-approach';
import { OurPromise } from '@/components/about/our-promise';
import { OurValues } from '@/components/about/our-values';
import { WhatWeDo } from '@/components/about/what-we-do';
import { ClosingStatement } from '@/components/about/closing-statement';
import { Cta } from '@/components/home/cta';

export default function AboutPage() {
  return (
    <>
      <OurValues />
      <WhatWeDo />
      <OurApproach />
      <OurPromise />
      <ClosingStatement />
      <Cta />
    </>
  );
}
