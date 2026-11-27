"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Truck,
  Tag,
  Lock,
  ShieldCheck,
  Zap,
  PackageCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { CartTypeI } from "@/types/cart/cart.type";

interface OrderSummaryProps {
  itemCount?: number;
  subtotal?: number;
  shipping?: number;
  isCheckout?: boolean;
  userCart?: CartTypeI | null
}

export function OrderSummary({
  itemCount = 4,
  subtotal = 1994,
  shipping = 0,
  isCheckout,
  userCart
}: OrderSummaryProps) {
  const [promoOpen, setPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  const total = subtotal + shipping;

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-xs">
      {/* Header with Solid Green Background */}
      <div className="bg-primary text-primary-foreground p-4 sm:p-5 rounded-t-xl">
        <div className="flex items-center gap-2 font-bold text-base sm:text-lg">
          <ShoppingBag className="size-5 shrink-0" />
          <span>Order Summary</span>
        </div>
        <p className="text-xs text-primary-foreground/85 mt-1">
          {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
        </p>
      </div>

      {/* Body Card */}
      <div className="border border-border border-t-0 rounded-b-xl p-4 sm:p-5 bg-card space-y-4">
        {/* Free Shipping Highlight Box */}
        {isCheckout ?
          <>

            <div className="max-h-50 overflow-x-auto flex flex-col gap-2 ">
              {userCart?.data?.products?.map((product) => (
                <div key={product.product._id} className="rounded-md bg-slate-50 p-3 hover:bg-slate-100 duration-300 flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Image className="w-[12% ]" width={45} height={45} src={product.product.imageCover} alt={product.product.title} />
                    <div>
                      <h2 title={product.product.title} className="text-sm font-medium text-gray-900 truncate mb-1">{product.product.title.split(" ").slice(0, 3).join(" ")}</h2>
                      <p className="text-xs text-gray-500 mt-0.5">{product.count} x {product.price} EGP</p>
                    </div>
                  </div>
                  <div><span className="text-md font-semibold text-foreground">{product.count * product.price} </span></div>
                </div>
              ))}
            </div>

          </> :

          <>
            <div className="rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 p-3 flex items-start gap-3">
              <div className="p-1.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300 shrink-0">
                <Truck className="size-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-emerald-900 dark:text-emerald-200">
                  Free Shipping!
                </h4>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-400 mt-0.5">
                  You qualify for free delivery
                </p>
              </div>
            </div></>}
        <Separator className="my-2" />
        {/* Pricing Rows */}
        <div className="space-y-2.5 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium text-foreground">
              {subtotal.toLocaleString()} EGP
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Shipping</span>
            <span className="font-semibold text-primary">
              {shipping === 0 ? "FREE" : `${shipping.toLocaleString()} EGP`}
            </span>
          </div>

          <Separator className="my-2" />

          <div className="flex items-center justify-between text-base">
            <span className="font-bold text-foreground">Total</span>
            <span className="font-bold text-lg text-foreground">
              {total.toLocaleString()}{" "}
              <span className="text-xs font-normal text-muted-foreground">EGP</span>
            </span>
          </div>
        </div>

        {/* Promo Code Section */}
        {isCheckout === false && <div className="pt-1">
          {!promoOpen ? (
            <button
              type="button"
              onClick={() => setPromoOpen(true)}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-muted-foreground hover:text-foreground border border-dashed border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer"
            >
              <Tag className="size-3.5" />
              <span>Apply Promo Code</span>
            </button>
          ) : (
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="h-9 text-xs"
              />
              <Button size="sm" variant="outline" className="h-9 text-xs px-3">
                Apply
              </Button>
            </div>
          )}
        </div>}



        {isCheckout ? <>
          <Button className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm rounded-lg flex items-center justify-center gap-2 shadow-xs cursor-pointer" type="submit" form="checkout-form">


            <PackageCheck className="size-4" />

            <span>Place Order</span>



          </Button>
        </> : <>
          <Button className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm rounded-lg flex items-center justify-center gap-2 shadow-xs cursor-pointer">
            <Link href="/checkout" className="flex items-center gap-3">
              <Lock className="size-4" />
              <span>Secure Checkout</span>


            </Link>
          </Button></>}

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-4 pt-1 text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="size-3.5 text-primary" />
            <span>Secure Payment</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <Zap className="size-3.5 text-primary" />
            <span>Fast Delivery</span>
          </span>
        </div>



      </div>
    </div >
  );
}
