"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { language } = useLanguage()

  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>
          &copy; {year} ShopLand. {language === "uz" ? "Barcha huquqlar himoyalangan." : "Все права защищены."}
        </p>
      </div>
    </footer>
  )
}
