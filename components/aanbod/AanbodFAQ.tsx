"use client";

import { faqsAanbod } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionPrimitive,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

export default function AanbodFAQ() {
  return (
    <section
      id="faq"
      className="w-full py-16 md:py-24 bg-zinc-950/80"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2
          id="faq-heading"
          className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl mb-12"
        >
          Veelgestelde vragen
        </h2>
        <div className="max-w-3xl" role="region" aria-label="Veelgestelde vragen">
          <Accordion type="single" collapsible className="w-full" defaultValue="0">
            {faqsAanbod.map((faq, index) => (
              <AccordionItem value={String(index)} key={index} className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center gap-3 py-3 text-left text-base md:text-lg font-semibold leading-snug text-white transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&>svg]:-order-1 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180 focus:outline-none focus:ring-0">
                    {faq.question}
                    <Plus
                      size={18}
                      strokeWidth={2}
                      className="shrink-0 opacity-60 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="pb-3 pt-0 ps-7 text-base text-zinc-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
