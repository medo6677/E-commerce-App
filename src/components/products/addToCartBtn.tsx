import React, { useContext } from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { addProductToCart } from "@/app/actions/cart.actions";
import { sileo } from "sileo";
import { CartContext } from "@/context/cartItemsContext";

export default function AddToCartBtn({
  productId,
  productTitle,
}: {
  productId: string;
  productTitle: string;
}) {
  const {handleCartItemsCount}= useContext(CartContext)!;
  async function addToCart() {
    try {
      const response = await addProductToCart(productId);
      if (response.status == "fail") {
        sileo.error({
          title: response.status,
          description: response.message,
        });
      } else {
        handleCartItemsCount();
        sileo.success({
          title: response.status,
          description: response.message,
        });
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <>
      <Button
        type="button"
        size="icon"
        aria-label={`Add ${productTitle} to cart`}
        onClick={() => addToCart()}
        className="size-10 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
      >
        <Plus aria-hidden="true" className="size-5" />
      </Button>
    </>
  );
}
