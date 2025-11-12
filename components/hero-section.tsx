"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="bg-gradient-to-b from-card to-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t.hero.title}</h1>
        <p className="text-lg text-muted-foreground mb-8 text-balance">{t.hero.features}</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              {t.hero.telegram}
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              {t.hero.instagram}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
