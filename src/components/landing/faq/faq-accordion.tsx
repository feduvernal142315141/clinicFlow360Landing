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
        <AccordionItem key={i} className="border-white/[0.08]">
          <AccordionTrigger className="py-5 text-left text-base font-medium text-slate-200 hover:text-brand-400">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-400">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
