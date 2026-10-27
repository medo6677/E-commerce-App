"use client";

import { Card } from "@/components/ui/card";

import { ProductCardDetails } from "./product-card-details";
import { ProductCardImage } from "./product-card-image";
import { ProductCardPrice } from "./product-card-price";
import { ProductT } from "@/types/productCard/product";

export function ProductCard({ product }: { product: ProductT }) {
  return (
    <Card className="group relative h-[394px] gap-0 overflow-hidden rounded-lg border-slate-200 bg-white py-0 shadow-none transition-shadow hover:shadow-md">
      <ProductCardImage product={product} />
      <ProductCardDetails product={product} />
      <ProductCardPrice product={product} />
    </Card>
  );
}
