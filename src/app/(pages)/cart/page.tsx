
import React, { useContext } from "react";
import { ShoppingCart } from "lucide-react";
import { StorePageHeader } from "@/components/common/store-page-header";
import { CartPageContent } from "@/components/cart/cart-page-content";
import { getLoggedUserCart } from "@/app/actions/cart.actions";
import { CartContext } from "@/context/cartItemsContext";


export const metadata = {
  title: "Shopping Cart | FreshCart",
  description: "View and manage items in your FreshCart shopping cart.",
};

export default async function CartPage() {
 

  return (
    <div className="w-full bg-background min-h-[calc(100vh-200px)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Reusable Header: easily re-used for Wishlist */}
    

        {/* Modular Cart Page Layout & Items */}
        <CartPageContent />
      </div>
    </div>
  );
}
