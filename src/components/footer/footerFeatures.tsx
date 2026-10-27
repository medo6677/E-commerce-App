import { Headphones, RotateCcw, ShieldCheck, Truck } from "lucide-react";

export function FooterFeatures() {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over 500 EGP",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "14-day return policy",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payment",
      description: "100% secure checkout",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Contact us anytime",
    },
  ];

  return (
    <section
      aria-label="Service Features"
      className="border-y border-emerald-100 bg-[#E8F8F0] py-6 text-slate-800"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-center gap-3.5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#0AAD0A] shadow-xs">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
