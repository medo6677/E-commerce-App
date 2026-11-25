"use client"
import { updateCartProductQuantity } from "@/app/actions/cart.actions";
import { CartTypeI } from "@/types/cart/cart.type";
import { sileo } from "sileo";
import { CartDecreaseQuantityButton } from "./cart-decrease-quantity-button";
import { CartIncreaseQuantityButton } from "./cart-increase-quantity-button";
import { useContext } from "react";
import { CartContext } from "@/context/cartItemsContext";

export function CartItemQuantityControls({
  quantity,
  maxQuantity,
  isLoading,
  productId,
  productTitle,
  setQuantity,
  setUserCart,
  setIsLoading,
}: {
  quantity: number;
  maxQuantity: number;
  isLoading: boolean;
  productId: string;
  productTitle: string;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  setUserCart: React.Dispatch<React.SetStateAction<CartTypeI | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { handleCartItemsCount } = useContext(CartContext)!;

  async function updateQuantity(newQuantity: number) {
    if (newQuantity < 1 || newQuantity > maxQuantity) {
      return;
    }

    const previousQuantity = quantity;
    setIsLoading(true);
    setQuantity(newQuantity);

    try {
      const response = await updateCartProductQuantity(productId, newQuantity);

      if (response.status === "fail") {
        setQuantity(previousQuantity);
        console.log(response.message);
        sileo.error({
          title: "Cart Update Failed",
          fill: "black",
          styles: {
            title: "text-white!",
            description: "text-white/75!",
          },
          description: response.message,
        });
      } else {
        sileo.success({
          title: "Cart Updated",
          fill: "black",
          styles: {
            title: "text-white!",
            description: "text-white/75!",
          },
          description: `Quantity updated to ${newQuantity} for ${productTitle}.`,
        });
        setUserCart(response);
        await handleCartItemsCount();
        console.log(response, "ssssssssssssss");
      }
    } catch (error) {
      setQuantity(previousQuantity);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex items-center gap-2 pt-2">
      <CartDecreaseQuantityButton
        onClick={() => updateQuantity(quantity - 1)}
        disabled={quantity <= 1 || isLoading}
      />

      <span className="w-6 text-center text-sm font-semibold text-foreground select-none">
        {quantity}
      </span>

      <CartIncreaseQuantityButton
        onClick={() => updateQuantity(quantity + 1)}
        disabled={quantity >= maxQuantity || isLoading}
      />
    </div>
  );
}
