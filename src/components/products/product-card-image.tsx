import Image from "next/image";
import Link from "next/link";

import { ProductCardActions } from "./product-card-actions";
import { ProductT } from "@/types/productCard/product";

export function ProductCardImage({ product }: { product: ProductT }) {
 

  return (
    <div className="relative flex flex-1 items-center justify-center bg-white p-5">
      <Link
        href={`/products/${product._id}`}
        aria-label={`View ${product.title}`}
        className="relative h-full w-full"
      >
        <Image
          src={product.imageCover}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      {product.priceAfterDiscount && (
        <span className="absolute start-3 top-3 rounded-sm bg-rose-500 px-2 py-1 text-xs font-semibold text-white">
          - {(
            ((product.price - product.priceAfterDiscount) / product.price) * 100
          ).toFixed(0)}%        </span>
      )}
      <ProductCardActions />
    </div>
  );
}
