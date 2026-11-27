"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Heart } from 'lucide-react'
import { addProductToWishlist, removeProductFromWishlist } from '@/app/actions/wishlist.actions'
import { sileo } from 'sileo'
import { cn } from '@/lib/utils'

export default function AddToWishlistBtn({
    productId,
    isAddedToWishlist,
}: {
    productId: string
    isAddedToWishlist: boolean
}) {
    const [isInWishlist, setIsInWishlist] = useState(isAddedToWishlist)
    const [isLoading, setIsLoading] = useState(false)

    async function handleWishlistToggle() {
        if (isLoading) return
        setIsLoading(true)


        if (isInWishlist) {
            try {
                const response = await removeProductFromWishlist(productId)


                if (response.status === "success") {
                    setIsInWishlist(!isInWishlist)
                    sileo.success({
                        title: response.status,
                        description: response.message,
                    })
                }
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        else {
            try {
                const response = await addProductToWishlist(productId)


                if (response.status === "success") {
                    setIsInWishlist(!isInWishlist)
                    sileo.success({
                        title: response.status,
                        description: response.message,
                    })
                }
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }









        // const method = isInWishlist ? "DELETE" : "POST"

        // try {
        //     const response = await addProductToWishlist(productId, method)
        //     console.log(response)

        //     if (response.status === "success") {
        //         setIsInWishlist(!isInWishlist)
        //         sileo.success({
        //             title: response.status,
        //             description: response.message,
        //         })
        //     }
        // } catch (error) {
        //     console.log(error)
        // } finally {
        //     setIsLoading(false)
        // }
    }

    return (
        <Button
            onClick={handleWishlistToggle}
            disabled={isLoading}
            type="button"
            variant="outline"
            size="icon-sm"
            aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
            className={cn(
                "rounded-full border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700",
                isInWishlist &&
                "border-emerald-200 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 hover:text-emerald-700"
            )}
        >
            <Heart
                aria-hidden="true"
                className={cn(
                    "transition-colors",
                    isInWishlist && "fill-emerald-600 text-emerald-600"
                )}
            />
        </Button>
    )
}