"use client"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { WishlistPageHeader } from "./wishlist-page-header"
import { WishlistItemsTable } from "./wishlist-items-table"

import { GetLoggedUserWishlist } from "@/app/actions/wishlist.actions"
import { useEffect, useState } from "react"
import { WishlistI } from "@/types/wishlist/wishlist.type"

export function WishlistPageContent() {
  const [userWishlist, setUserWishlist] = useState<WishlistI | null>(null)
  async function getUserWishList() {
    try {
      const response: WishlistI = await GetLoggedUserWishlist()
      setUserWishlist(response)
      console.log(response,"all");



    } catch (error) {

    }
  } 
  useEffect(() => { getUserWishList() }, [])
  return (
    <div className="space-y-5">
      <WishlistPageHeader itemCount={userWishlist?.data?.length!} />
      <WishlistItemsTable products={userWishlist?.data!} />
      <Link
        href="/products"
        className="inline-flex items-center gap-1.5 pt-1 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-3.5" />
        Continue Shopping
      </Link>
    </div>
  )
}
