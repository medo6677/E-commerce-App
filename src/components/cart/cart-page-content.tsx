
"use client";
import React, { useContext, useEffect, useState } from "react";
import { CartItemsList } from "./cart-items-list";

import { CartTypeI } from "@/types/cart/cart.type";
import { getLoggedUserCart } from "@/app/actions/cart.actions";
import { OrderSummary } from "./order-summary";
import { EmptyCart } from './empty-cart';
import { CartContext } from "@/context/cartItemsContext";
import { StorePageHeader } from "./cart-header";
import { ShoppingCart } from "lucide-react";


export function CartPageContent() {
  const [userCart, setUserCart] = useState<CartTypeI | null>(null);
  const { numOfCartItems } = useContext(CartContext)!;
  async function getCart() {
    const response = await getLoggedUserCart();
    setUserCart(response);
    console.log(response);
  }


  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <StorePageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Shopping Cart" },
        ]}
        icon={ShoppingCart}
        title="Shopping Cart"
        count={numOfCartItems}
        countLabel="items in your cart"
      />


      {userCart?.data.products.length == 0 ? <EmptyCart /> : <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mt-6">
        {/* Left Column: Cart Items List */}
        {userCart?.data?.products && (
          <>

            <div className="lg:col-span-8">
              <CartItemsList products={userCart.data.products} setUserCart={setUserCart} />
            </div>
            {/* Right Column: Order Summary (Sticky on Desktop) */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <OrderSummary isCheckout={false} itemCount={numOfCartItems} subtotal={userCart?.data.totalCartPrice} shipping={0} />
            </div>

          </>
        )}



      </div>}
    </>
  );
}
