"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function AboutSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{t.about.title}</h2>
        <p className="text-lg text-muted-foreground text-center text-balance">{t.about.description}</p>
      </div>
    </section>
  )
}
