import Link from "next/link";
import { ArrowRight, Flame, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const deals = [
  {
    label: "Deal of the Day",
    labelIcon: Flame,
    title: "Fresh Organic Fruits",
    description: "Get up to 40% off on selected organic fruits",
    discount: "40% OFF",
    code: "ORGANIC40",
    action: "Shop Now",
    className: "from-emerald-500 to-emerald-700",
    decorationClassName: "bg-emerald-300/15",
    actionClassName: "text-emerald-600 hover:bg-emerald-50",
  },
  {
    label: "New Arrivals",
    labelIcon: Sparkles,
    title: "Exotic Vegetables",
    description: "Discover our latest collection of premium vegetables",
    discount: "25% OFF",
    code: "FRESH25",
    action: "Explore Now",
    className: "from-orange-500 to-rose-500",
    decorationClassName: "bg-orange-200/20",
    actionClassName: "text-orange-600 hover:bg-orange-50",
  },
];

export function DealBanners() {
  return (
    <section
      aria-label="Special offers"
      className="mx-auto grid max-w-[1568px] grid-cols-1 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8"
    >
      {deals.map((deal) => {
        const LabelIcon = deal.labelIcon;

        return (
          <Card
            key={deal.title}
            className={`relative min-h-[300px] overflow-hidden rounded-2xl border-0 bg-linear-to-br ${deal.className} p-8 text-white shadow-none sm:p-8`}
          >
            <div
              aria-hidden="true"
              className={`absolute -right-10 -top-20 size-48 rounded-full ${deal.decorationClassName}`}
            />
            <div
              aria-hidden="true"
              className={`absolute -bottom-16 -left-12 size-28 rounded-full ${deal.decorationClassName}`}
            />

            <div className="relative z-10 flex h-full flex-col items-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
                <LabelIcon aria-hidden="true" className="size-4" />
                {deal.label}
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                {deal.title}
              </h2>
              <p className="mt-2 text-sm text-white/90 sm:text-base">
                {deal.description}
              </p>
              <div className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="text-2xl font-bold sm:text-3xl">
                  {deal.discount}
                </span>
                <span className="text-sm text-white/90">
                  Use code:{" "}
                  <strong className="font-bold text-white">{deal.code}</strong>
                </span>
              </div>
              <Button
                asChild
                className={`mt-5 h-12 rounded-full bg-white px-6 font-semibold ${deal.actionClassName}`}
              >
                <Link href="/products">
                  {deal.action}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
            </div>
          </Card>
        );
      })}
    </section>
  );
}
