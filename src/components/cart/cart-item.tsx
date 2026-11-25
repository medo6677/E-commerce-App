  "use client";

import React, { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { CartProductI, CartTypeI } from "@/types/cart/cart.type";
import { CartItemActions } from "./cart-item-actions";
import { CartItemDetails } from "./cart-item-details";
import { CartItemImage } from "./cart-item-image";
import { CartItemQuantityControls } from "./cart-item-quantity-controls";

export function CartItem({
  product,
  setUserCart,
}: {
  product: CartProductI;
  setUserCart: React.Dispatch<React.SetStateAction<CartTypeI | null>>;
}) {
  const [quantity, setQuantity] = useState(product.count);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card p-4 sm:p-5 shadow-xs transition-shadow hover:shadow-sm">
      {isLoading && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center rounded-[inherit] bg-card/65 backdrop-blur-[1px]"
          role="status"
          aria-label="Updating cart"
        >
          <LoaderCircle
            aria-hidden="true"
            className="size-8 animate-spin text-emerald-600"
          />
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <CartItemImage
            src={product.product.imageCover}
            title={product.product.title}
            hasError={imageError}
            onError={() => setImageError(true)}
          />

          <div>
            <CartItemDetails product={product} />
            <CartItemQuantityControls
              quantity={quantity}
              maxQuantity={product.product.quantity}
              isLoading={isLoading}
              productId={product.product._id}
              productTitle={product.product.title}
              setQuantity={setQuantity}
              setUserCart={setUserCart}
              setIsLoading={setIsLoading}
            />
          </div>
        </div>

        <CartItemActions
          productId={product.product._id}
          title={product.product.title}
          total={product.price * quantity}
          isLoading={isLoading}
          setUserCart={setUserCart}
          setIsLoading={setIsLoading}
        />
      </div>
    </div>
  );
}
