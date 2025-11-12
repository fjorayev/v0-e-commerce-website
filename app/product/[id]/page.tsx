"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"
import { LanguageProvider } from "@/lib/language-context"

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <LanguageProvider>
      <Header />
      <ProductDetail productId={params.id} />
      <Footer />
    </LanguageProvider>
  )
}
