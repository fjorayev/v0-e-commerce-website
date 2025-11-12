"use client"

import Link from "next/link"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Header() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-accent">
          ShopLand
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-foreground hover:text-accent transition">
            {t.nav.home}
          </Link>
          <Link href="/" className="text-foreground hover:text-accent transition">
            {t.nav.products}
          </Link>
          <Link href="/" className="text-foreground hover:text-accent transition">
            {t.nav.about}
          </Link>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  )
}
