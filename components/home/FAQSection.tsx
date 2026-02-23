"use client";

import { faqs } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionPrimitive,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import Image from "next/image";

const FAQ_ILLUSTRATION_URL =
  "https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/socialbrand.com/faq.png";

export default function FAQSection() {
  return (
    <section
      className="w-full py-16 md:py-24 bg-zinc-950/80 border-t border-zinc-800/50"
      id="faq"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl mb-12">
          Veelgestelde vragen
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-4 lg:max-w-[480px]" role="region" aria-label="Veelgestelde vragen">
            <Accordion type="single" collapsible className="w-full" defaultValue="0">
              {faqs.map((faq, index) => (
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
                  <AccordionContent className="pb-3 pt-0 ps-7 text-base text-foreground-muted">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="relative aspect-square w-full max-w-[320px] mx-auto lg:max-w-[400px] lg:mx-0 lg:ml-auto">
            <Image
              src={FAQ_ILLUSTRATION_URL}
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 320px, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
