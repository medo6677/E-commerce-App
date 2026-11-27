import type { Metadata } from "next"
import { WishlistPageContent } from "@/components/wishlist/wishlist-page-content"

export const metadata: Metadata = {
  title: "My Wishlist | FreshCart",
  description: "Your saved products on FreshCart.",
}

export default function WishlistPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] w-full bg-background">
      <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <WishlistPageContent />
      </div>
    </div>
  )
}
