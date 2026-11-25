import { CartRemoveButton } from "./cart-remove-button";
import { CartTypeI } from "@/types/cart/cart.type";

export function CartItemActions({
  productId,
  title,
  total,
  isLoading,
  setUserCart,
  setIsLoading,
}: {
  productId: string;
  title: string;
  total: number;
  isLoading: boolean;
  setUserCart: React.Dispatch<React.SetStateAction<CartTypeI | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto self-end sm:self-stretch pt-2 sm:pt-0 border-t sm:border-t-0 border-border/60">
      <CartRemoveButton
        productId={productId}
        title={title}
        isLoading={isLoading}
        setUserCart={setUserCart}
        setIsLoading={setIsLoading}
      />

      <div className="text-right">
        <span className="text-[11px] text-muted-foreground block font-medium">
          Total:
        </span>
        <span className="text-base sm:text-lg font-bold text-foreground">
          {total.toFixed(1)}{" "}
          <span className="text-xs font-normal text-muted-foreground">EGP</span>
        </span>
      </div>
    </div>
  );
}
