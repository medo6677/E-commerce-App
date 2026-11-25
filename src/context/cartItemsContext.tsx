"use client";
import { getLoggedUserCart } from '@/app/actions/cart.actions';
import { CartTypeI } from '@/types/cart/cart.type';
import { useSession } from 'next-auth/react';
import React, { createContext, useEffect, useState } from 'react'

type CartItemsContextValue = {
    numOfCartItems: number;
    handleCartItemsCount: () => Promise<void>;
}

export const CartContext = createContext<CartItemsContextValue | null>(null)
export default function CartItemsContext({ children }: { children: React.ReactNode }) {
    const [numOfCartItems, setNumOfCartItems] = useState(0)
    const { status } = useSession()
    async function handleCartItemsCount() {
        try {
            const response: CartTypeI = await getLoggedUserCart()

            const cartCount = response?.data?.products?.reduce((acc, product) => acc + product.count, 0) || 0;
            setNumOfCartItems(cartCount)
        } catch (error) {

        }
    }
    useEffect(() => {
        if (status === "authenticated") {
            handleCartItemsCount()
        }

    }, [status])


    return (
        <>

            <CartContext.Provider value={{ numOfCartItems, handleCartItemsCount }}>
                {children}
            </CartContext.Provider>


        </>
    )
}
