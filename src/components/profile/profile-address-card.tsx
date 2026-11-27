import { MapPin, Pencil, Phone, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ProfileAddressCardProps {
  addressName: string
  fullAddress: string
  phone: string
  city: string
}

export function ProfileAddressCard({
  addressName,
  fullAddress,
  phone,
  city,
}: ProfileAddressCardProps) {
  return (
    <Card className="flex-row items-start gap-3 rounded-xl border-slate-200 bg-white p-3.5 shadow-none sm:p-4">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
        <MapPin className="size-4" />
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold text-slate-800">
          {addressName}
        </h3>
        <p className="mt-0.5 text-xs text-slate-500">{fullAddress}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-500">
          <span className="inline-flex items-center gap-1">
            <Phone className="size-3" />
            {phone}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-3" />
            {city}
          </span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-1">
        <Button
          type="button"
          variant="ghost"
          size="icon-xs"
          aria-label={`Edit ${addressName} address`}
          className="text-slate-500 hover:bg-slate-100 hover:text-slate-800"
        >
          <Pencil className="size-3.5" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon-xs"
          aria-label={`Delete ${addressName} address`}
          className="text-slate-500 hover:bg-rose-50 hover:text-rose-600"
        >
          <Trash2 className="size-3.5" />
        </Button>
      </div>
    </Card>
  )
}
