import { Cta } from '@/components/faq/cta';
import { FaqSection, faqSections } from '@/components/faq/faq-section';
import { Hero } from '@/components/faq/hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ - Modular Kitchens',
    description: 'Find answers to frequently asked questions about modular kitchens, including design, materials, pricing, and the process at Vrikshakriti.',
};

const generateFaqSchema = () => {
  const mainEntity = faqSections.flatMap(section => 
    section.items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  );

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mainEntity
  };
};

export default function FaqPage() {
  const faqSchema = generateFaqSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <FaqSection />
      <Cta />
    </>
  );
}
