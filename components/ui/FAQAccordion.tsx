"use client";

import React, { useState } from "react";
import type { FAQ } from "@/lib/content";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  items: FAQ[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-2" role="region" aria-label="Veelgestelde vragen">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        const id = `faq-${index}`;
        const answerId = `faq-answer-${index}`;

        return (
          <div
            key={index}
            className="rounded-lg border border-zinc-800 bg-zinc-900/40 overflow-hidden"
          >
            <h3>
              <button
                type="button"
                id={id}
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-base font-medium text-white hover:bg-zinc-800/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-inset md:px-6 md:py-5"
              >
                {faq.question}
                <span
                  className={cn(
                    "shrink-0 text-zinc-400 transition-transform",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={answerId}
              role="region"
              aria-labelledby={id}
              className={cn("overflow-hidden transition-all", isOpen ? "block" : "hidden")}
            >
              <div className="border-t border-zinc-800 px-4 py-4 text-zinc-400 md:px-6 md:py-5">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
