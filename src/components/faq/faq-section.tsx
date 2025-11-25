
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqSections } from "@/lib/faq-data";

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        {faqSections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2>{section.title}</h2>
            <Accordion type="single" collapsible className="w-full mt-6">
              {section.items.map((item, itemIndex) => (
                <AccordionItem key={itemIndex} value={`item-${index}-${itemIndex}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  )
}
