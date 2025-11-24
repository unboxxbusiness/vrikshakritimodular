import { Cta } from '@/components/faq/cta';
import { FaqSection } from '@/components/faq/faq-section';
import { Hero } from '@/components/faq/hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ - Modular Kitchens',
    description: 'Find answers to frequently asked questions about modular kitchens, including design, materials, pricing, and the process at Vrikshakriti.',
};

export default function FaqPage() {
  return (
    <>
      <Hero />
      <FaqSection />
      <Cta />
    </>
  );
}
