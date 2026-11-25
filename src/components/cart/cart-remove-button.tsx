"use client"

import { useContext } from "react";
import { Trash2 } from "lucide-react";
import { removeProductFromCart } from "@/app/actions/cart.actions";
import { CartTypeI } from "@/types/cart/cart.type";
import { sileo } from "sileo";
import { CartContext } from "@/context/cartItemsContext";
import { DeleteConfirmationDialog } from "./delete-confirmation-dialog";

export function CartRemoveButton({
  productId,
  title,
  isLoading,
  setUserCart,
  setIsLoading,
}: {
  productId: string;
  title: string;
  isLoading: boolean;
  setUserCart: React.Dispatch<React.SetStateAction<CartTypeI | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { handleCartItemsCount } = useContext(CartContext)!;

  async function deleteProduct(): Promise<boolean> {
    setIsLoading(true);
    try {
      const response = await removeProductFromCart(productId);

      if (response.status === "fail") {
        sileo.error({
          title: "Item Removal Failed",
          fill: "black",
          styles: {
            title: "text-white!",
            description: "text-white/75!",
          },
          description: response.message,
        });
        return false;
      }

      setUserCart(response);
      await handleCartItemsCount();
      sileo.success({
        title: "Item Removed",
        fill: "black",
        styles: {
          title: "text-white!",
          description: "text-white/75!",
        },
        description: `${title} has been removed from your cart.`,
      });
      return true;
    } catch (error) {
      console.error(error);
      sileo.error({
        title: "Item Removal Failed",
        fill: "black",
        styles: {
          title: "text-white!",
          description: "text-white/75!",
        },
        description: "Could not remove this item. Please try again.",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <DeleteConfirmationDialog
      trigger={
          <button
            type="button"
            disabled={isLoading}
            aria-label={`Remove ${title} from cart`}
            className="size-8 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900/50 flex items-center justify-center transition-colors cursor-pointer"
          >
            <Trash2 className="size-4" />
          </button>
      }
      title="Remove item from cart?"
      description={
          <>
            Are you sure you want to remove &quot;{title}&quot; from your cart?
            This action cannot be undone.
          </>
      }
      confirmLabel="Remove item"
      loadingLabel="Removing..."
      isLoading={isLoading}
      onConfirm={deleteProduct}
    />
  );
}
