"use client"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Star, Check } from "lucide-react"
import { ReviewCard } from "./review-card"
import { FAQSection } from "./faq-section"

const REVIEWS = [
  {
    name: "Farrux",
    date: "12 августа",
    text: "Агар 10 та юлдуз қўйиш мумкин бўса албатта қўярдим ❤️",
    rating: 5,
  },
  {
    name: "Татьяна",
    date: "11 августа",
    text: "Наушники просто бомба!! Звук чистый, микрофон хорошо ловит. Чехол в подарок 😍",
    rating: 5,
  },
  {
    name: "Нодир",
    date: "23 июня",
    text: "haqiqiy apple ni ekan oʻlaveringlar 👍 Olishni tavsiya qilaman.",
    rating: 5,
  },
]

const RELATED_PRODUCTS = [
  {
    id: 1,
    name: "Premium Earbuds",
    price: "148 800 so'm",
    image: "/premium-earbuds.jpg",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: "120 000 so'm",
    image: "/wireless-headphones.png",
  },
]

export function ProductDetail({ productId }: { productId: string }) {
  const { language } = useLanguage()
  const t = translations[language]

  const benefits = [
    { icon: "✓", title: t.product.originalQuality },
    { icon: "✓", title: t.product.payAfterReceiving },
    { icon: "✓", title: t.product.freeShipping },
    { icon: "✓", title: t.product.caseGift },
    { icon: "✓", title: t.product.warranty },
  ]

  const features = [
    {
      title: t.product.closeToOriginal,
      description: "Tashqi ko'rinishi, materiali va yig'ilishi bilan original darajasiga juda yaqin.",
    },
    {
      title: t.product.strongMicrophone,
      description: "Ovoz sifatli va tiniq, shovqinli joylarda ham suhbatlar qulay va yaxshi eshitiladi.",
    },
    {
      title: t.product.premiumChip,
      description: "Ichidagi hi-fi premium chip tufayli basslari kuchli, musiqa tiniq, baland va jonli yangraydi.",
    },
    {
      title: t.product.warranty,
      description: "Biz mahsulot sifatiga ishonamiz. Muammo chiqsa, almashtiramiz yoki pulingizni qaytaramiz.",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Product Header */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Image Section */}
            <div className="flex items-center justify-center bg-card rounded-lg p-8">
              <img src="/premium-earbuds-product.jpg" alt="Product" className="w-full h-auto max-w-sm" />
            </div>

            {/* Details Section */}
            <div>
              <h1 className="text-4xl font-bold mb-4">Premium Earbuds Pro Max</h1>

              {/* Prices */}
              <div className="mb-6 space-y-2">
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-accent">148 800 so`m</span>
                  <span className="text-2xl text-muted-foreground line-through">1 600 000 сум</span>
                </div>
                <p className="text-muted-foreground">Uzum kartasiz 155 000 so`m</p>
                <div className="flex items-center gap-2 text-accent font-semibold">
                  <span>Tejamkorlik 91%</span>
                </div>
              </div>

              {/* Benefits List */}
              <div className="mb-8 space-y-3">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit.title}</span>
                  </div>
                ))}
              </div>

              {/* Buy Button - Fixed at bottom on mobile */}
              <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold rounded-lg">
                {t.product.buyNow}
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 py-12 border-t border-border">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-card p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Customer Choice Section */}
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-8 mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">{t.product.chosenBy}</h3>
          </div>

          {/* Reviews Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{t.product.reviews}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {REVIEWS.map((review, idx) => (
                <ReviewCard key={idx} review={review} />
              ))}
            </div>
            <Button variant="outline" className="w-full bg-transparent">
              {t.product.allReviews} (3 000+)
            </Button>
          </div>

          {/* Similar Products */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{t.product.similarProducts}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {RELATED_PRODUCTS.map((product) => (
                <div key={product.id} className="bg-card rounded-lg overflow-hidden">
                  <div className="h-48 bg-muted flex items-center justify-center">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-accent font-bold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <FAQSection />
        </div>
      </section>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 md:hidden">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg font-semibold">
          {t.product.buyNow}
        </Button>
      </div>
    </main>
  )
}
