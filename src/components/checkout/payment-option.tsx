import type { ReactNode } from "react"
import { Check } from "lucide-react"

export type PaymentMethod = "cash-on-delivery" | "pay-online"

interface PaymentOptionProps {
  value: PaymentMethod
  title: string
  description: string
  icon: ReactNode
  selected: boolean
  onSelect: (value: PaymentMethod) => void
  children?: ReactNode
}

export function PaymentOption({
  value,
  title,
  description,
  icon,
  selected,
  onSelect,
  children,
}: PaymentOptionProps) {
  return (
    <label className="group flex cursor-pointer items-center gap-3 rounded-lg border border-border p-3.5 transition-colors has-[:checked]:border-primary has-[:checked]:bg-emerald-50/60 sm:p-4">
      <input
        className="peer sr-only"
        type="radio"
        name="payment-method"
        value={value}
        checked={selected}
        onChange={() => onSelect(value)}
      />
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-has-[:checked]:bg-primary group-has-[:checked]:text-primary-foreground">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-foreground">
          {title}
        </span>
        <span className="mt-0.5 block text-xs text-muted-foreground">
          {description}
        </span>
        {children}
      </span>
      <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-border text-transparent peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground">
        <Check className="size-3.5" />
      </span>
    </label>
  )
}
