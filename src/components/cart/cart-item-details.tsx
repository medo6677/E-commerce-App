import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CartProductI } from "@/types/cart/cart.type";

export function CartItemDetails({ product }: { product: CartProductI }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <span>{product.product.category.name}</span>
        <span>·</span>
        <span className="font-mono">{product.product.slug}</span>
      </div>

      <h3 className="font-semibold text-sm sm:text-base text-foreground leading-snug line-clamp-1">
        <Link href="#" className="hover:text-primary transition-colors">
          {product.product.title}
        </Link>
      </h3>

      <p className="text-xs sm:text-sm font-semibold text-primary">
        {product.price.toFixed(1)}{" "}
        <span className="text-xs font-normal text-muted-foreground">
          EGP per unit
        </span>
      </p>

      {/* {product.product.quantity > 0 && (
        <div className="pt-0.5">
          <Badge
           
            className="rounded-full text-[11px] font-medium py-0 h-5"
          >
            <span className="size-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
            In Stock
          </Badge>
        </div>
      )} */}
    </div>
  );
}
