import { Headset, RotateCcw, Shield, Truck } from "lucide-react";

import { Card } from "@/components/ui/card";

const benefits = [
  {
    title: "Free Shipping",
    description: "On orders over 500 EGP",
    icon: Truck,
    iconClassName: "text-blue-500",
    backgroundClassName: "bg-rose-50",
  },
  {
    title: "Secure Payment",
    description: "100% secure transactions",
    icon: Shield,
    iconClassName: "text-emerald-500",
    backgroundClassName: "bg-emerald-50",
  },
  {
    title: "Easy Returns",
    description: "14-day return policy",
    icon: RotateCcw,
    iconClassName: "text-orange-500",
    backgroundClassName: "bg-gray-100",
  },
  {
    title: "24/7 Support",
    description: "Dedicated support team",
    icon: Headset,
    iconClassName: "text-purple-500",
    backgroundClassName: "bg-gray-50",
  },
];

export function BenefitsStrip() {
  return (
    <section
      aria-label="Shopping benefits"
      className="bg-slate-50 px-4 py-8"
    >
      <div className="mx-auto grid max-w-[1412px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <Card
              key={benefit.title}
              className="h-20 flex-row items-center gap-4 rounded-xl border-slate-100 bg-white px-4 py-3 shadow-sm"
            >
              <span
                aria-hidden="true"
                className={`flex size-12 shrink-0 items-center justify-center rounded-full ${benefit.backgroundClassName}`}
              >
                <Icon
                  className={`size-5 ${benefit.iconClassName}`}
                  strokeWidth={2.5}
                />
              </span>
              <div className="min-w-0">
                <h2 className="text-sm font-semibold leading-5 text-slate-800">
                  {benefit.title}
                </h2>
                <p className="text-xs leading-4 text-slate-500">
                  {benefit.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
