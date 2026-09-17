"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import type { FAQItem } from "@/data/faq"

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <Accordion>
      {items.map((item, i) => (
        <AccordionItem key={i} className="border-border-light">
          <AccordionTrigger className="py-5 text-left text-base font-medium text-ink hover:text-brand-600">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-muted">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
