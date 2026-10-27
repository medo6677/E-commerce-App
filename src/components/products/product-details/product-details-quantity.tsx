"use client"
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export function ProductDetailsQuantity({ quantity, price }: { quantity: number, price: number }) {
  const [count, setCount] = useState(1);
  return (
    <div className="space-y-4">
      {/* Quantity Selector */}

      <div>
        <p className="mb-2 text-sm font-semibold text-gray-800">Quantity</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center rounded-lg border border-gray-200 bg-white">
            <button
              type="button"
              onClick={() => { if (count > 1) { setCount(count - 1) } }}
              className="flex size-9 items-center justify-center text-gray-500 transition hover:bg-gray-50 hover:text-gray-900"
              aria-label="Decrease quantity"
            >
              <Minus className="size-4" />
            </button>
            <input
              type="number"
              min={1}
              max={quantity}
              value={count}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (!isNaN(val)) {
                  if (val > quantity) {
                    setCount(quantity);
                  } else {
                    setCount(val);
                  }
                }
              }}
              onBlur={() => {
                if (count < 1) setCount(1);
              }}
              className="w-12 bg-transparent text-center text-sm font-semibold text-gray-900 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              aria-label="Quantity"
            />
            <button
              type="button"
              onClick={() => { if (count < quantity) { setCount(count + 1) } }}
              className="flex size-9 items-center justify-center text-gray-500 transition hover:bg-gray-50 hover:text-gray-900"
              aria-label="Increase quantity"
            >
              <Plus className="size-4" />
            </button>
          </div>
          {quantity > 0 ? <span className="text-sm text-gray-500">{quantity} available</span> : <span className="text-sm text-red-500">Out of stock</span>}
        </div>
      </div>

      {/* Total Price */}
      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
        <span className="text-sm font-medium text-gray-600">Total Price:</span>
        <span className="text-xl font-bold text-[#0AAD0A]">{price * count}EGP</span>
      </div>
    </div>
  );
}
