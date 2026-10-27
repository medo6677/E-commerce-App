import { Heart, Share2, ShoppingCart, Zap } from "lucide-react";

export function ProductDetailsActions() {
  return (
    <div className="space-y-3">
      {/* Primary Actions: Add to Cart & Buy Now */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0AAD0A] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#099509] active:scale-[0.99]"
        >
          <ShoppingCart className="size-4" />
          Add to Cart
        </button>

        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-black active:scale-[0.99]"
        >
          <Zap className="size-4 fill-white" />
          Buy Now
        </button>
      </div>

      {/* Secondary Actions: Wishlist & Share */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
        >
          <Heart className="size-4" />
          Add to Wishlist
        </button>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
          aria-label="Share product"
        >
          <Share2 className="size-4" />
        </button>
      </div>
    </div>
  );
}
