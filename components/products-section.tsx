"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"

const PRODUCTS = [
  {
    id: 1,
    name: "Premium Earbuds",
    price: "148 800 so'm",
    image: "/premium-earbuds.jpg",
    oldPrice: "1 600 000 сум",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: "120 000 so'm",
    image: "/wireless-headphones.png",
    oldPrice: "500 000 сум",
  },
]

export function ProductsSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{t.products.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer">
                <div className="h-64 bg-muted flex items-center justify-center">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex gap-2 mb-4">
                    <span className="text-accent font-bold text-lg">{product.price}</span>
                    <span className="text-muted-foreground line-through text-sm">{product.oldPrice}</span>
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    {t.product.buyNow}
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
