"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"

export function WarrantySection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="bg-gradient-to-b from-background to-card py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">{t.warranty.title}</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Bizning texnik yordam jamasi har doim sizga yordam berishga tayyor.
        </p>
        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <a href="https://t.me" target="_blank" rel="noopener noreferrer">
            {t.warranty.contact}
          </a>
        </Button>
      </div>
    </section>
  )
}
