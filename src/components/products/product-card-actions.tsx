import { Eye, Heart, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProductCardActionsProps = {
  productId: string;
};

export function ProductCardActions() {
  return (
    <div className="absolute end-3 top-3 flex flex-col gap-2">
      <Button
        type="button"
        variant="outline"
        size="icon-sm"
        // aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
        aria-label={"Remove from wishlist"}
        // aria-pressed={isFavorite}

        // onClick={() => onToggleFavorite?.(productId)}
        className="rounded-full border-slate-200 bg-white text-slate-600 shadow-sm hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
      >
        <Heart
          aria-hidden="true"
          // className={isFavorite ? "fill-rose-500 text-rose-500" : ""}
          className={""}
        />
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon-sm"
        aria-label="Compare product"
        // onClick={() => onCompare?.(productId)}
        className="rounded-full border-slate-200 bg-white text-slate-600 shadow-sm hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
      >
        <RefreshCw aria-hidden="true" />
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon-sm"
        aria-label="Quick view product"
        // onClick={() => onQuickView?.(productId)}
        className="rounded-full border-slate-200 bg-white text-slate-600 shadow-sm hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
      >
        <Eye aria-hidden="true" />
      </Button>
    </div>
  );
}
