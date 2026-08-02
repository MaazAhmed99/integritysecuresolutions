"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import type { Faq } from "@/lib/content";

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink-900/10 overflow-hidden rounded-card border border-ink-900/10 bg-white">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-trigger-${index}`}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-sand-50"
              >
                <span className="font-display text-base font-semibold text-ink-900">
                  {item.question}
                </span>
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 border-brand-500 bg-brand-500 text-white"
                      : "border-ink-900/15 text-ink-900/50"
                  }`}
                >
                  <Icon name="plus" className="size-4" strokeWidth={2.2} />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
              hidden={!isOpen}
              className="px-6 pb-6 pr-16"
            >
              <p className="text-sm leading-relaxed text-ink-900/70">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
