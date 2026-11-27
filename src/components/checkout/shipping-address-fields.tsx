import { Building2, MapPin, Phone } from "lucide-react"
import { Controller, type Control } from "react-hook-form"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import type { ShippingAddressValues } from "@/lib/schemas/checkout.schema"

export interface ShippingAddressFieldsProps {
  control: Control<ShippingAddressValues>
}

export function ShippingAddressFields({
  control,
}: ShippingAddressFieldsProps) {
  return (
    <>
      <div className="flex items-start gap-3 rounded-lg bg-sky-50 px-3.5 py-3 text-sky-700">
        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
          <MapPin className="size-3" />
        </span>
        <span>
          <span className="block text-xs font-semibold">
            Delivery Information
          </span>
          <span className="mt-0.5 block text-xs text-sky-600">
            Please ensure your address is accurate for smooth delivery
          </span>
        </span>
      </div>

      <FieldGroup className="gap-4">
        <Controller
          control={control}
          name="city"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                City <span className="text-destructive">*</span>
              </FieldLabel>
              <div className="relative">
                <Building2 className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="e.g. Cairo, Alexandria, Giza"
                  className="h-11 pl-10"
                />
              </div>
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        <Controller
          control={control}
          name="details"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                Street Address <span className="text-destructive">*</span>
              </FieldLabel>
              <div className="relative">
                <MapPin className="pointer-events-none absolute left-3 top-3.5 size-4 text-muted-foreground" />
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Street name, building number, floor, apartment..."
                  className="h-12 pl-10"
                />
              </div>
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        <Controller
          control={control}
          name="phone"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                Phone Number <span className="text-destructive">*</span>
              </FieldLabel>
              <div className="relative">
                <Phone className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  {...field}
                  id={field.name}
                  type="tel"
                  aria-invalid={fieldState.invalid}
                  placeholder="01xxxxxxxxx"
                  className="h-11 pl-10 pr-36"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground">
                  Egyptian numbers only
                </span>
              </div>
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
      </FieldGroup>
    </>
  )
}
