"use client"

interface ReviewCardProps {
  review: {
    name: string
    date: string
    text: string
    rating: number
  }
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-card p-6 rounded-lg border border-border">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">
          {review.name[0]}
        </div>
        <div>
          <p className="font-semibold text-sm">{review.name}</p>
          <p className="text-xs text-muted-foreground">{review.date}</p>
        </div>
      </div>
      <p className="text-foreground text-sm">{review.text}</p>
    </div>
  )
}
