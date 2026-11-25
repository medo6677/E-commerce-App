"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CartItem } from "./cart-item";
import { ClearCartButton } from "./clear-cart-button";

import { CartProductI, CartTypeI } from "@/types/cart/cart.type";

export function CartItemsList({
  products,
  setUserCart,
}: {
  products: CartProductI[];
  setUserCart: React.Dispatch<React.SetStateAction<CartTypeI | null>>;
}) {



  return (
    <div className="space-y-4">
      {/* Items List */}
      <div className="space-y-3">
        {products.map((product) => (
          <CartItem key={product._id} product={product} setUserCart={setUserCart} />
        ))}
      </div>

      {/* Bottom Actions Bar */}
      <div className="flex items-center justify-between pt-2">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="size-4" />
          <span>Continue Shopping</span>
        </Link>

        <ClearCartButton
          disabled={products.length === 0}
          setUserCart={setUserCart}
        />
      </div>
    </div>
  );
}
