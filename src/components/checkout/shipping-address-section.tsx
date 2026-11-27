"use client"

import { useState } from "react"
import { Home } from "lucide-react"
import { CheckoutSectionHeader } from "./checkout-section-header"
import {
  ShippingAddressOptions,
  type AddressChoice,
} from "./shipping-address-options"
import {
  ShippingAddressFields,
  type ShippingAddressFieldsProps,
} from "./shipping-address-fields"

export function ShippingAddressSection({
  control,
}: ShippingAddressFieldsProps) {
  const [addressChoice, setAddressChoice] = useState<AddressChoice>("saved")

  return (
    <section className="overflow-hidden rounded-xl border border-border bg-card shadow-xs">
      <CheckoutSectionHeader
        icon={<Home className="size-4" />}
        title="Shipping Address"
        description="Where should we deliver your order?"
      />

      <div className="space-y-5 p-4 sm:p-5">
        <ShippingAddressOptions
          addressChoice={addressChoice}
          onAddressChoiceChange={setAddressChoice}
        />
        {addressChoice === "new" && (
          <ShippingAddressFields control={control} />
        )}
      </div>
    </section>
  )
}
