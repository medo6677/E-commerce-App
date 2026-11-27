"use client"

import React, { useContext, useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, SquareText } from "lucide-react"
import { StorePageHeader } from "../common/store-page-header"
import { CartContext } from "@/context/cartItemsContext"
import { OrderSummary } from "../cart/order-summary"
import { getLoggedUserCart } from "@/app/actions/cart.actions"
import type { CartTypeI } from "@/types/cart/cart.type"
import { PaymentMethodSection } from "./payment-method-section"
import { ShippingAddressSection } from "./shipping-address-section"
import type { PaymentMethod } from "./payment-option"
import { useForm } from "react-hook-form"
import {
    shippingAddressSchema,
    type ShippingAddressValues,
} from "@/lib/schemas/checkout.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { cashPayment, onlinePayment } from "@/app/actions/checkout.action"
import { redirect, useRouter } from "next/navigation"
import { sileo } from "sileo"

export default function CheckoutPageContent() {
    const { numOfCartItems } = useContext(CartContext)!
    const [userCart, setUserCart] = useState<CartTypeI | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [paymentMethod, setPaymentMethod] =
        useState<PaymentMethod>("cash-on-delivery")
    const { handleCartItemsCount } = useContext(CartContext)!;
    const router = useRouter()

    const { control, handleSubmit } = useForm<ShippingAddressValues>({
        defaultValues: {
            details: "",
            city: "",
            phone: ""

        }, resolver: zodResolver(shippingAddressSchema),
        mode: "onChange"
    })
    async function getUserCartData() {
        try {
            setIsLoading(true)
            const response = await getLoggedUserCart()
            if (response) {
                setUserCart(response)
            }
        } catch (error) {
            console.error("Failed to load checkout cart", error)
        }
        finally {
            setIsLoading(false)
        }
    }



    useEffect(() => { getUserCartData() }, [])




    if (isLoading || !userCart) {
        return (
            <div className="flex items-center justify-center h-96">
                <p>Loading...</p>
            </div>
        )
    }




    async function handelUserCheckout(values: ShippingAddressValues) {
        if (paymentMethod == "pay-online") {
            try {
                const response = await onlinePayment(userCart?.cartId as string, values)
                console.log(response);
                sileo.success({
                    title: response.status,
                    description: response.message,
                });
                window.location.href = response.session.url
            } catch (error) {
                console.log(error);

            }
        } else {
            try {
                const response = await cashPayment(userCart?.cartId as string, values)
                console.log(response);
                router.push("/allorders")
                handleCartItemsCount()
                sileo.success({
                    title: response.status,
                    description: response.message,
                });

            } catch (error) {
                console.log(error);

            }
        }

    }
    return (
        <>
            <StorePageHeader
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Cart", href: "/cart" },
                    { label: "Checkout" },
                ]}
                icon={SquareText}
                title="Complete Your Order"
                count={numOfCartItems}
                description="Review your items and complete your purchase"
            />

            <div className="mt-5 flex justify-end">
                <Link
                    href="/cart"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                    <ArrowLeft className="size-4" />
                    Back to Cart
                </Link>
            </div>

            <div className="mt-4 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
                <form id="checkout-form" className="space-y-6 lg:col-span-8" onSubmit={handleSubmit(handelUserCheckout)}>
                    <ShippingAddressSection control={control} />
                    <PaymentMethodSection
                        paymentMethod={paymentMethod}
                        onPaymentMethodChange={setPaymentMethod}
                    />
                </form>


                <div className="lg:sticky lg:top-24 lg:col-span-4">
                    <OrderSummary
                        itemCount={numOfCartItems}
                        subtotal={userCart.data.totalCartPrice}
                        shipping={0}
                        isCheckout={true}
                        userCart={userCart}
                    />
                </div>

            </div>
        </>
    )
}
