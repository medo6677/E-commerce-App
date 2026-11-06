import { ShoppingCart } from "lucide-react";

export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading FreshCart"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-5 px-4 py-16"
    >
      <div className="loading-cart-track" aria-hidden="true">
        <ShoppingCart className="loading-cart-icon" strokeWidth={2.25} />
      </div>

      <div className="flex flex-col items-center gap-3">
        <p className="text-sm font-medium text-slate-600">
          Loading your store...
        </p>
      </div>
    </div>
  );
}
