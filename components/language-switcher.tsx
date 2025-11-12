"use client"

import { useLanguage } from "@/lib/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLanguage("uz")}
        className={`px-3 py-1 rounded text-sm font-medium transition ${
          language === "uz" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        UZ
      </button>
      <button
        onClick={() => setLanguage("ru")}
        className={`px-3 py-1 rounded text-sm font-medium transition ${
          language === "ru" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        РУ
      </button>
    </div>
  )
}
