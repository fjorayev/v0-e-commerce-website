"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { WhyUsSection } from "@/components/why-us-section"
import { AboutSection } from "@/components/about-section"
import { WarrantySection } from "@/components/warranty-section"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/lib/language-context"

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <WhyUsSection />
        <AboutSection />
        <WarrantySection />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
