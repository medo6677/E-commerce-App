import { Eye, Heart, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddToWishlistBtn from "./addToWishlistBtn";

type ProductCardActionsProps = {
  productId: string;
  isAddedToWishlist: boolean
};

export function ProductCardActions({
  productId, isAddedToWishlist
}: ProductCardActionsProps) {
  return (
    <div className="absolute end-3 top-3 flex flex-col gap-2">
      <AddToWishlistBtn productId={productId} isAddedToWishlist={isAddedToWishlist} />

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
