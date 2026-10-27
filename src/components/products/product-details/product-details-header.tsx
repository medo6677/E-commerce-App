import { Star } from "lucide-react";

export function ProductDetailsHeader({ productCat, productBrand, productTitle, rating, reviews }: { productCat: string, productBrand: string, productTitle: string, rating: number, reviews: number }) {
  return (
    <div className="space-y-3">
      {/* Category & Brand Badges */}
      <div className="flex items-center gap-2">
        {productCat &&
          <span className="rounded-full bg-[#E8F8F0] px-3 py-1 text-xs font-semibold text-[#0AAD0A]">
            {productCat}
          </span>
        }
        {productBrand &&
          <span className="rounded-full bg-[#F0F3F2] px-3 py-1 text-xs font-semibold text-gray-700">
            {productBrand}
          </span>}
      </div>

      {/* Product Title */}
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        {productTitle}
      </h1>

      {/* Rating & Reviews */}
      <div className="flex items-center gap-2">
        <div
          className="flex items-center gap-0.5 text-amber-400"
          aria-hidden="true"
        >
          {rating ? [1, 2, 3, 4, 5].map((star) => {
            const fill = star <= rating ? "fill-current" : "";

            return (
              <Star key={star} className={`size-4 ${fill}`} strokeWidth={1.5} />
            );
          }) : <Star className={`size-4`} strokeWidth={1.5} />}
        </div>
        <span className="text-sm font-semibold text-gray-700">{rating || 0}</span>
        <span className="text-sm text-gray-500">({reviews || 0} reviews)</span>
      </div>
    </div>
  );
}
