import type { ReactNode } from "react"

interface CheckoutSectionHeaderProps {
  icon: ReactNode
  title: string
  description: string
}

export function CheckoutSectionHeader({
  icon,
  title,
  description,
}: CheckoutSectionHeaderProps) {
  return (
    <div className="flex items-center gap-3 rounded-t-xl bg-primary px-4 py-3.5 text-primary-foreground sm:px-5">
      <span className="flex shrink-0 items-center justify-center">{icon}</span>
      <div>
        <h2 className="font-semibold">{title}</h2>
        <p className="mt-0.5 text-xs text-primary-foreground/80">
          {description}
        </p>
      </div>
    </div>
  )
}
