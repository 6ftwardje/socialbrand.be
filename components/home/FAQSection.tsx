"use client";

import { faqs } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionPrimitive,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

export default function FAQSection() {
  return (
    <section
      className="w-full border-t border-[var(--border-subtle)] bg-[var(--surface)] py-16 md:py-24"
      id="faq"
      aria-labelledby="homepage-faq-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-6 lg:grid-cols-[minmax(16rem,0.42fr)_minmax(0,0.58fr)] lg:gap-20 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Praktisch</p>
          <h2 id="homepage-faq-heading" className="mt-4 max-w-md text-[clamp(2rem,8vw,2.35rem)] font-bold leading-[1.08] tracking-tight text-[var(--foreground)] md:text-4xl lg:text-5xl">
            Goed beginnen met heldere verwachtingen.
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-[var(--foreground-muted)]">
            De belangrijkste vragen over scope, timing, feedback en samenwerking.
          </p>
        </div>

        <div className="border-t border-[var(--border-subtle)]" role="region" aria-label="Veelgestelde vragen">
          <Accordion type="single" collapsible className="w-full" defaultValue="0">
            {faqs.map((faq, index) => (
              <AccordionItem value={String(index)} key={faq.question} className="border-b border-[var(--border-subtle)]">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between gap-5 py-5 text-left text-base font-semibold leading-snug text-[var(--foreground)] transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent)]/35 md:text-lg [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                    {faq.question}
                    <Plus
                      size={18}
                      strokeWidth={2}
                      className="shrink-0 text-[var(--accent)] transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="max-w-2xl pb-5 pr-10 pt-0 text-sm leading-relaxed text-[var(--foreground-muted)] md:text-base">
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
