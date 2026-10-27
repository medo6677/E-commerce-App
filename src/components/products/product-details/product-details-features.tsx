import { RotateCcw, ShieldCheck, Truck } from "lucide-react";

export function ProductDetailsFeatures() {
  const features = [
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Orders over $50",
    },
    {
      icon: RotateCcw,
      title: "30 Days Return",
      description: "Money back",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payment",
      description: "100% Protected",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 rounded-xl border border-gray-100 bg-gray-50/60 p-4 sm:grid-cols-3">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div key={index} className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#E8F8F0] text-[#0AAD0A]">
              <Icon className="size-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-900 sm:text-sm">
                {feature.title}
              </p>
              <p className="text-[11px] text-gray-500 sm:text-xs">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
