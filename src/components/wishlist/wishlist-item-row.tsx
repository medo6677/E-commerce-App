"use client"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProductT } from "@/types/productCard/product"
import { addProductToCart } from "@/app/actions/cart.actions"
import { useContext } from "react"
import { CartContext } from "@/context/cartItemsContext"
import { removeProductFromWishlist } from "@/app/actions/wishlist.actions"


interface WishlistItemRowProps {
  product: ProductT
}

export function WishlistItemRow({ product }: WishlistItemRowProps) {
  const { handleCartItemsCount } = useContext(CartContext)!;

  async function addToCard() {
    try {
      const response = await addProductToCart(product._id)
      console.log(response);
      handleCartItemsCount()
      const remove = await removeProductFromWishlist(product._id)
      console.log(remove, "aad");

    } catch (error) {
    }
  }

  async function deleteProductFromWishlist() {
    try {
      const response = await removeProductFromWishlist(product._id)
     

    } catch (error) {

    }
  }


  return (
    <tr className="border-t border-slate-100">
      <td className="py-3.5 pl-3 pr-4 sm:pl-4">
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href={`/products/${product.id}`}
            aria-label={`View ${product.title}`}
            className="relative size-14 shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-slate-50 p-1.5 sm:size-16"
          >
            <Image
              src={product.imageCover}
              alt=""
              fill
              sizes="64px"
              className="object-contain"
            />
          </Link>
          <div className="min-w-0">
            <Link
              href={`/products/${product.id}`}
              className="block line-clamp-2 text-xs font-medium text-slate-800 transition-colors hover:text-emerald-700 sm:text-sm"
            >
              {product.title}
            </Link>
            <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
              {product.category.name}
            </p>
          </div>
        </div>
      </td>

      <td className="whitespace-nowrap px-3 py-3.5 text-xs font-semibold text-slate-800 sm:text-sm">
        {product.priceAfterDiscount ? (
          <div className="flex flex-col gap-0.5">
            <span>
              {product.priceAfterDiscount.toLocaleString("en-EG")} EGP
            </span>
            <span className="text-[10px] font-normal text-slate-400 line-through">
              {product.price.toLocaleString("en-EG")} EGP
            </span>
          </div>
        ) : (
          `${product.price.toLocaleString("en-EG")} EGP`
        )}
      </td>

      <td className="px-3 py-3.5">








        {product.quantity > 10 ? <>        <Badge className="gap-1 border-0 bg-emerald-50 px-2 text-[10px] font-medium text-emerald-700 hover:bg-emerald-50">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          In Stock
        </Badge></> : product.quantity >= 1 && product.quantity <= 5 ? <><Badge className="gap-1 border-0 bg-amber-50 px-2 text-[10px] font-medium text-amber-700 hover:bg-amber-50">
          <span className="size-1.5 rounded-full bg-amber-500" />
          Low Stock
        </Badge></> : <Badge className="gap-1 border-0 bg-rose-50 px-2 text-[10px] font-medium text-rose-700 hover:bg-rose-50">
          <span className="size-1.5 rounded-full bg-rose-500" />
          Out of Stock
        </Badge>}
      </td>

      <td className="py-3.5 pl-3 pr-3 sm:pl-4 sm:pr-4">
        <div className="flex items-center justify-end gap-2">
          <Button
            onClick={() => addToCard()}
            type="button"
            size="sm"
            className="h-8 gap-1.5 rounded-md bg-primary px-2.5 text-[11px] font-semibold text-primary-foreground hover:bg-primary/90 sm:px-3 sm:text-xs"
          >
            <ShoppingCart className="size-3.5" />
            <span className="hidden sm:inline">Add to Cart</span>
            <span className="sm:hidden">Add</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => deleteProductFromWishlist()}
            size="icon-sm"
            aria-label={`Remove ${product.title} from wishlist`}
            className="size-8 border-slate-200 text-slate-500 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
          >
            <Trash2 className="size-3.5" />
          </Button>
        </div>
      </td>
    </tr>
  )
}
