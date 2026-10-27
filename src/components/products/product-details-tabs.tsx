"use client";

import { Check, RotateCcw, Shield, ShoppingBag, Star, Truck } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { productDetailsT } from "@/types/productDetails/productDetailsT";

export function ProductDetailsTabs({ product }: { product: productDetailsT }) {
  const productInfo = [
    { label: "Category", value: product.category.name },
    { label: "Subcategory", value: product.subcategory[0].name },
    { label: "Brand", value: product.brand.name },
    { label: "Items Sold", value: ` ${product.sold} sold` },
  ];

  const keyFeatures = [
    "Premium Quality Product",
    "100% Authentic Guarantee",
    "Fast & Secure Packaging",
    "Quality Tested",
  ];

  return (
    <div className="mt-10 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <Tabs defaultValue="details" className="w-full">
        {/* Tabs Navigation Header */}
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="details">
            <ShoppingBag className="size-4" />
            Product Details
          </TabsTrigger>
          <TabsTrigger value="reviews">
            <Star className="size-4" />
            Reviews ({product.ratingsQuantity || product.reviews?.length || 46})
          </TabsTrigger>
          <TabsTrigger value="shipping">
            <Truck className="size-4" />
            Shipping &amp; Returns
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: Product Details */}
        <TabsContent value="details" className="space-y-6 pt-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              About this Product
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
             {product.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Product Information Card */}
            <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-5">
              <h3 className="mb-4 text-sm font-bold text-slate-900 sm:text-base">
                Product Information
              </h3>
              <dl className="divide-y divide-slate-200/60 text-sm">
                {productInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0"
                  >
                    <dt className="text-slate-500">{item.label}</dt>
                    <dd className="font-semibold text-slate-900">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Key Features Card */}
            <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-5">
              <h3 className="mb-4 text-sm font-bold text-slate-900 sm:text-base">
                Key Features
              </h3>
              <ul className="space-y-3 text-sm">
                {keyFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2.5 font-medium text-slate-700"
                  >
                    <Check className="size-4 shrink-0 text-[#0AAD0A]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Tab 2: Reviews */}
        <TabsContent value="reviews" className="space-y-12 pt-6">
          {/* Top Rating Summary & Breakdown */}
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
            {/* Left Score Card */}
            <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left md:min-w-36">
              <span className="text-5xl font-bold tracking-tight text-slate-900">
                {product?.ratingsAverage || "3.9"}
              </span>
              <div className="mt-2 flex items-center gap-1 text-amber-400">
                {[1, 2, 3].map((star) => (
                  <Star key={star} className="size-4 fill-amber-400 text-amber-400" />
                ))}
                <Star className="size-4 fill-amber-400/40 text-amber-400" />
                <Star className="size-4 text-amber-400" />
              </div>
              <span className="mt-2 text-xs text-slate-400">
                Based on {product?.ratingsQuantity || 46} reviews
              </span>
            </div>

            {/* Right Rating Breakdown Bars */}
            <div className="flex-1 space-y-3">
              {[
                { star: 5, pct: 25 },
                { star: 4, pct: 60 },
                { star: 3, pct: 25 },
                { star: 2, pct: 5 },
                { star: 1, pct: 5 },
              ].map((item) => (
                <div key={item.star} className="flex items-center gap-4">
                  <div className="w-8 shrink-0 text-center text-xs leading-none text-slate-400">
                    <span className="block font-medium text-slate-600">{item.star}</span>
                    <span className="text-[10px]">star</span>
                  </div>

                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200/80">
                    <div
                      className="h-full rounded-full bg-amber-400"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>

                  <span className="w-10 shrink-0 text-right text-xs font-medium text-slate-500">
                    {item.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Empty State: No Customer Reviews Yet */}
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="flex size-14 items-center justify-center text-slate-300">
              <Star className="size-10 fill-slate-200 text-slate-300" strokeWidth={1} />
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Customer reviews will be displayed here.
            </p>
            <button
              type="button"
              className="mt-2 text-sm font-semibold text-[#0AAD0A] transition hover:underline"
            >
              Write a Review
            </button>
          </div>
        </TabsContent>

        {/* Tab 3: Shipping & Returns */}
        <TabsContent value="shipping" className="space-y-6 pt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Shipping Information Card */}
            <div className="rounded-2xl bg-[#E8F8F0] p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#0AAD0A] text-white shadow-xs">
                  <Truck className="size-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                  Shipping Information
                </h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2.5 text-slate-700">
                  <Check className="size-4 shrink-0 text-[#0AAD0A]" />
                  <span>Free shipping on orders over $50</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-700">
                  <Check className="size-4 shrink-0 text-[#0AAD0A]" />
                  <span>Standard delivery: 3-5 business days</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-700">
                  <Check className="size-4 shrink-0 text-[#0AAD0A]" />
                  <span>Express delivery available (1-2 business days)</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-700">
                  <Check className="size-4 shrink-0 text-[#0AAD0A]" />
                  <span>Track your order in real-time</span>
                </li>
              </ul>
            </div>

            {/* Returns & Refunds Card */}
            <div className="rounded-2xl bg-[#E8F8F0] p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#0AAD0A] text-white shadow-xs">
                  <RotateCcw className="size-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                  Returns &amp; Refunds
                </h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2.5 text-slate-700">
                  <Check className="size-4 shrink-0 text-[#0AAD0A]" />
                  <span>30-day hassle-free returns</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-700">
                  <Check className="size-4 shrink-0 text-[#0AAD0A]" />
                  <span>Full refund or exchange available</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-700">
                  <Check className="size-4 shrink-0 text-[#0AAD0A]" />
                  <span>Free return shipping on defective items</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-700">
                  <Check className="size-4 shrink-0 text-[#0AAD0A]" />
                  <span>Easy online return process</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Card: Buyer Protection Guarantee */}
          <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-5 sm:p-6">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-slate-200/80 text-slate-700">
              <Shield className="size-5 fill-slate-700 text-slate-700" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 sm:text-base">
                Buyer Protection Guarantee
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Get a full refund if your order doesn&apos;t arrive or isn&apos;t as described. We ensure your shopping experience is safe and secure.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ProductDetailsTabs;
