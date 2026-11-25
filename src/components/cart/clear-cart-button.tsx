"use client";

import { useContext, useState } from "react";
import { Trash2 } from "lucide-react";
import { clearUserCart } from "@/app/actions/cart.actions";
import { CartTypeI } from "@/types/cart/cart.type";
import { sileo } from "sileo";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/cartItemsContext";
import { DeleteConfirmationDialog } from "./delete-confirmation-dialog";

export function ClearCartButton({
  disabled,
  setUserCart,
}: {
  disabled: boolean;
  setUserCart: React.Dispatch<React.SetStateAction<CartTypeI | null>>;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { handleCartItemsCount } = useContext(CartContext)!;
  async function handleClearCart(): Promise<boolean> {
    setIsLoading(true);

    try {
      const response = await clearUserCart();

      if (response.status === "fail") {
        sileo.error({
          title: "Cart Clear Failed",
          description: response.message,
        });
        return false;
      }

      setUserCart(response);
      await handleCartItemsCount();
      sileo.success({
        title: "Cart Cleared",
        description: "All items have been removed from your cart.",
      });
      return true;
    } catch (error) {
      console.error("Failed to clear cart:", error);
      sileo.error({
        title: "Cart Clear Failed",
        description: "Could not clear your cart. Please try again.",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <DeleteConfirmationDialog
      trigger={
        <Button
          type="button"
          variant="ghost"
          size="sm"
          disabled={disabled || isLoading}
          className="gap-1.5 text-muted-foreground hover:text-rose-600"
        >
          <Trash2 className="size-4" aria-hidden="true" />
          <span>Clear all items</span>
        </Button>
      }
      title="Clear your cart?"
      description="Are you sure you want to remove all items from your cart? This action cannot be undone."
      confirmLabel="Clear cart"
      loadingLabel="Clearing..."
      isLoading={isLoading}
      onConfirm={handleClearCart}
    />
  );
}
