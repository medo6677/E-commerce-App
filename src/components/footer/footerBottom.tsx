import { CreditCard, Landmark, Wallet } from "lucide-react";

export function FooterBottom() {
  const paymentMethods = [
    { name: "Visa", icon: CreditCard },
    { name: "Mastercard", icon: Landmark },
    { name: "PayPal", icon: Wallet },
  ];

  return (
    <div className="mt-12 border-t border-slate-800/80 pt-8">
      <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-400 sm:flex-row">
        {/* Copyright text */}
        <p>© 2026 FreshCart. All rights reserved.</p>

        {/* Payment Methods */}
        <div className="flex items-center gap-3">
          {paymentMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div
                key={method.name}
                className="flex items-center gap-1.5 rounded-md border border-slate-700/60 bg-slate-800/40 px-2.5 py-1 text-gray-300 transition hover:border-slate-600 hover:text-white"
              >
                <Icon className="size-3.5 text-gray-400" />
                <span className="font-medium text-[11px]">{method.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
