import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";

import { ProductT } from "@/types/productCard/product";

type ProductCardPriceProps = {
  product: ProductT;
};

export function ProductCardPrice({ product }: ProductCardPriceProps) {
  const hasDiscount = Boolean(product.priceAfterDiscount);

  return (
    <CardFooter className="justify-between px-4 pb-4 pt-0">
      <div className="flex flex-col">
        {hasDiscount && (
          <span className="text-xs text-slate-400 line-through">
            {product.priceAfterDiscount} EGP
          </span>
        )}
        <span className="font-bold text-slate-800">{product.price} EGP</span>
      </div>
      <Button
        type="button"
        size="icon"
        aria-label={`Add ${product.title} to cart`}
        // onClick={() => onAddToCart?.(product.id)}
        className="size-10 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
      >
        <Plus aria-hidden="true" className="size-5" />
      </Button>
    </CardFooter>
  );
}
