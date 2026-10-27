import { Star } from "lucide-react";

type ProductRatingProps = {
  rating: number;
  reviewCount: number;
};

export function ProductRating({ rating, reviewCount }: ProductRatingProps) {
  return (
    <div
      className="mt-2 flex items-center gap-2"
      aria-label={`${rating} out of 5 stars, ${reviewCount} reviews`}
    >
      <span
        className="flex items-center gap-0.5 text-amber-400"
        aria-hidden="true"
      >
        {[1, 2, 3, 4, 5].map((star) => {
          const fill = star <= rating ? "fill-current" : "";

          return (
            <Star key={star} className={`size-4 ${fill}`} strokeWidth={1.5} />
          );
        })}
      </span>
      <span className="text-xs text-slate-500"> {rating} </span>
      <span className="text-xs text-slate-500"> ({reviewCount})</span>
    </div>
  );
}
