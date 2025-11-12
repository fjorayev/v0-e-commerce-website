"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const faqs = [
    {
      question: t.product.howToOrder,
      answer: t.product.howToOrderAnswer,
    },
    {
      question: language === "uz" ? "Yetkazish qancha vaqt oladi?" : "Как долго доставка?",
      answer: language === "uz" ? "O'zbekiston bo'ylab 2-3 kun." : "По Узбекистану 2-3 дня.",
    },
    {
      question: language === "uz" ? "Qaytarish mumkinmi?" : "Можно ли вернуть товар?",
      answer: language === "uz" ? "Ha, 14 kun ichida qaytarish mumkin." : "Да, возврат возможен в течение 14 дней.",
    },
  ]

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-8">{t.product.faq}</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="text-lg font-semibold hover:text-accent">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
