
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqSections = [
  {
    title: "General Questions",
    items: [
      {
        question: "What is a modular kitchen?",
        answer: "A modular kitchen is a modern kitchen system made using pre-made cabinets, drawers, and units that fit together perfectly. It offers better storage, efficiency, and maintenance compared to traditional carpenter-made kitchens."
      },
      {
        question: "Why should I choose Vrikshakriti for my modular kitchen?",
        answer: "We offer high-quality materials, premium finishes, transparent pricing, and end-to-end execution—from design to installation—ensuring a smooth and reliable experience."
      },
      {
        question: "Do you provide a free consultation?",
        answer: "Yes. We offer a free design consultation, which includes requirement discussion, layout guidance, and material suggestions."
      }
    ]
  },
  {
    title: "Design & Planning",
    items: [
      {
        question: "How does the kitchen design process work?",
        answer: "Our process includes: Consultation, Measurement, 3D design, Material finalization, Manufacturing, Installation."
      },
      {
        question: "Can I see my kitchen in 3D before manufacturing begins?",
        answer: "Absolutely. We provide detailed 3D renders so you can visualize the final look and make changes before production."
      },
      {
        question: "What if I want a custom design?",
        answer: "Every kitchen we create is fully customized based on your layout, preferences, and budget."
      }
    ]
  },
  {
    title: "Materials & Durability",
    items: [
      {
        question: "Which materials do you use for modular kitchens?",
        answer: "We primarily use: Plywood (BWR & Marine Grade), HDHMR, MDF & particle board (optional). Shutters are available in laminate, acrylic, PU, membrane, and veneer finishes."
      },
      {
        question: "Are your materials water-resistant and termite-proof?",
        answer: "Yes. Our plywood and HDHMR boards are moisture-resistant, termite-proof, and ideal for Indian cooking conditions."
      },
      {
        question: "Which hardware brands do you use?",
        answer: "We use premium hardware from Blum, Hettich, and Hafele for smooth function and long life."
      }
    ]
  },
  {
    title: "Pricing & Budget",
    items: [
      {
        question: "How much does a modular kitchen cost?",
        answer: "The cost depends on layout, material, finish, and accessories. We provide transparent estimates and customized pricing based on your needs."
      },
      {
        question: "What factors affect the price?",
        answer: "Major factors include: Kitchen layout, Material & shutter finish, Accessories (tandems, tall units, organizers), Countertop selection, Appliance integration."
      },
      {
        question: "Do you offer EMI or payment flexibility?",
        answer: "Yes. Flexible payment options are available depending on the project value."
      }
    ]
  },
  {
    title: "Manufacturing & Installation",
    items: [
      {
        question: "How long does it take to complete a modular kitchen?",
        answer: "Typically: Design phase: 3–5 days, Manufacturing: 2–4 weeks, Installation: 3–7 days. Timelines vary based on materials and project scope."
      },
      {
        question: "Do you handle plumbing, electrical, and civil work?",
        answer: "Yes. Upon request, our team can coordinate basic plumbing, electrical, and civil modifications."
      },
      {
        question: "What if I only want to renovate my existing kitchen?",
        answer: "We offer semi-modular solutions, where we keep the civil structure and upgrade shutters, drawers, and accessories."
      }
    ]
  },
  {
    title: "After-Sales & Warranty",
    items: [
      {
        question: "What warranty do you provide?",
        answer: "We offer: 10–15 years warranty on structure (depending on material), Manufacturer warranty on hardware and accessories."
      },
      {
        question: "Do you provide after-sales service?",
        answer: "Yes. Our support team offers prompt assistance for repairs, adjustments, or concerns even after project completion."
      }
    ]
  },
  {
    title: "Maintenance & Care",
    items: [
      {
        question: "Are modular kitchens easy to maintain?",
        answer: "Yes. Our materials and finishes are designed for easy cleaning and resistance to daily wear."
      },
      {
        question: "How do I clean and care for my kitchen?",
        answer: "Use a soft cloth with mild soap, avoid abrasive cleaners, keep surfaces dry, especially near the sink, and use organizers to prevent clutter."
      }
    ]
  },
  {
    title: "Other Questions",
    items: [
      {
        question: "Do you provide services outside your city?",
        answer: "Yes, depending on project size and location. Contact us to check availability."
      },
      {
        question: "Can I choose appliances through you?",
        answer: "Yes. We assist in selecting chimneys, hobs, ovens, microwaves, dishwashers, and other built-in appliances."
      },
      {
        question: "What documents or details do I need to start?",
        answer: "Just share your floor plan or kitchen measurements. Our team will guide you through the rest."
      }
    ]
  }
];

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
