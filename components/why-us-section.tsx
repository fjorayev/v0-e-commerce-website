"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { Shield, Truck, MessageCircle } from "lucide-react"

export function WhyUsSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    { icon: Shield, title: t.whyUs.quality },
    { icon: Truck, title: t.whyUs.shipping },
    { icon: MessageCircle, title: t.whyUs.support },
  ]

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{t.whyUs.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
