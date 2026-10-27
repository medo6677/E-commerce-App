import { Package, ShieldCheck, Star } from "lucide-react";

export function ProductDetailsTabs() {
  return (
    <div className="mt-8 border-t border-gray-100 pt-6">
      {/* Tabs Header */}
      <div className="flex flex-wrap items-center gap-4 border-b border-gray-200">
        <button
          type="button"
          className="flex items-center gap-2 border-b-2 border-[#0AAD0A] pb-3 text-sm font-semibold text-[#0AAD0A]"
        >
          <Package className="size-4" />
          Product Details
        </button>

        <button
          type="button"
          className="flex items-center gap-2 border-b-2 border-transparent pb-3 text-sm font-medium text-gray-500 hover:text-gray-900"
        >
          <Star className="size-4" />
          Reviews (18)
        </button>

        <button
          type="button"
          className="flex items-center gap-2 border-b-2 border-transparent pb-3 text-sm font-medium text-gray-500 hover:text-gray-900"
        >
          <ShieldCheck className="size-4" />
          Shipping &amp; Returns
        </button>
      </div>

      {/* Tab Content - Product Details */}
      <div className="py-6">
        <h3 className="mb-3 text-lg font-bold text-gray-900">
          About this Product
        </h3>
        <p className="leading-relaxed text-gray-600">
          Elevate your everyday wardrobe with this elegant and vibrant multicolor
          shawl. Crafted from a premium soft-touch polyester blend, it offers
          versatile styling options for any occasion while ensuring lightweight
          warmth and comfort.
        </p>
      </div>
    </div>
  );
}
