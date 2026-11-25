import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";

import { ProductT } from "@/types/productCard/product";
import AddToCartBtn from "./addToCartBtn";

type ProductCardPriceProps = {
  product: ProductT;
};

export function ProductCardPrice({ product }: ProductCardPriceProps) {
  const hasDiscount = Boolean(product.priceAfterDiscount);

  return (
    <CardFooter className="justify-between px-4 pb-4 pt-0">
      <div className="flex flex-col">
        {hasDiscount ? (
          <>
            <span className="text-xs text-slate-400 line-through">
              {product.price} EGP
            </span>
            <span className="font-bold text-slate-800">
              {product.priceAfterDiscount} EGP
            </span>
          </>
        ) : (
          <span className="font-bold text-slate-800">{product.price} EGP</span>
        )}
      </div>
    <AddToCartBtn productTitle={product.title} productId={product._id}/>
    </CardFooter>
  );
}
