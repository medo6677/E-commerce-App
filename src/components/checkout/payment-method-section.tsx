import { Banknote, CreditCard, ShieldCheck } from "lucide-react"
import { CheckoutSectionHeader } from "./checkout-section-header"
import { PaymentOption, type PaymentMethod } from "./payment-option"

interface PaymentMethodSectionProps {
  paymentMethod: PaymentMethod
  onPaymentMethodChange: (paymentMethod: PaymentMethod) => void
}

export function PaymentMethodSection({
  paymentMethod,
  onPaymentMethodChange,
}: PaymentMethodSectionProps) {
  return (
    <section className="overflow-hidden rounded-xl border border-border bg-card shadow-xs">
      <CheckoutSectionHeader
        icon={<CreditCard className="size-4" />}
        title="Payment Method"
        description="Choose how you'd like to pay"
      />

      <div className="space-y-3 p-4 sm:p-5">
        <PaymentOption
          value="cash-on-delivery"
          title="Cash on Delivery"
          description="Pay when your order arrives at your doorstep"
          icon={<Banknote className="size-5" />}
          selected={paymentMethod === "cash-on-delivery"}
          onSelect={onPaymentMethodChange}
        />
        <PaymentOption
          value="pay-online"
          title="Pay Online"
          description="Secure payment with Credit/Debit Card via Stripe"
          icon={<CreditCard className="size-5" />}
          selected={paymentMethod === "pay-online"}
          onSelect={onPaymentMethodChange}
        >
          <span className="mt-2 flex items-center gap-1.5 text-[10px] font-semibold text-muted-foreground">
            <span className="rounded border border-border bg-background px-1.5 py-0.5 text-blue-700">
              VISA
            </span>
            <span className="rounded border border-border bg-background px-1.5 py-0.5 text-red-600">
              MC
            </span>
            <span className="rounded border border-border bg-background px-1.5 py-0.5 text-blue-600">
              AMEX
            </span>
          </span>
        </PaymentOption>

        <div className="flex items-center gap-3 rounded-lg bg-emerald-50 px-3.5 py-3 text-primary">
          <ShieldCheck className="size-5 shrink-0" />
          <span>
            <span className="block text-xs font-semibold">
              Secure &amp; Encrypted
            </span>
            <span className="mt-0.5 block text-xs text-emerald-700">
              Your payment info is protected with 256-bit SSL encryption
            </span>
          </span>
        </div>
      </div>
    </section>
  )
}
