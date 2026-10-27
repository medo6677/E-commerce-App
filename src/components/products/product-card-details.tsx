import Link from "next/link";
import { CardContent } from "@/components/ui/card";

import { ProductRating } from "./product-rating";
import { ProductT } from "@/types/productCard/product";

type ProductCardDetailsProps = {
  product: ProductT;
};

export function ProductCardDetails({ product }: ProductCardDetailsProps) {
  return (
    <CardContent className="flex flex-col px-4 pb-4 pt-1">
      <p className="text-xs text-slate-500">{product.category.name}</p>
      <Link
        href={`/products/${product._id}`}
        className="mt-1 truncate text-base font-medium text-slate-700 transition-colors hover:text-emerald-700"
      >
        {product.title}
      </Link>
      <ProductRating
        rating={product.ratingsAverage}
        reviewCount={product.ratingsQuantity}
      />
    </CardContent>
  );
}
