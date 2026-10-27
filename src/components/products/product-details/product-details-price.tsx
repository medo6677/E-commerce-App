export function ProductDetailsPrice({ price, quantity }: { price: number, quantity: number }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <span className="text-3xl font-bold tracking-tight text-gray-900">
          {price} EGP
        </span>
      </div>

      <div>
        <span className={`inline-flex items-center gap-1.5 rounded-full ${quantity > 0 ? "bg-[#E8F8F0]" : "bg-[#ffe8e8]"} px-3 py-1 text-xs font-semibold ${quantity > 0 ? "text-[#0AAD0A]" : "text-[#FF2B2B]"}`}>
          <span className={`size-1.5 rounded-full ${quantity > 0 ? "bg-[#0AAD0A]" : "bg-[#FF2B2B]"}`} />
          {quantity > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </div>
    </div>
  );
}
