import { MapPin, Phone, Plus } from "lucide-react"

export type AddressChoice = "saved" | "new"

interface ShippingAddressOptionsProps {
  addressChoice: AddressChoice
  onAddressChoiceChange: (choice: AddressChoice) => void
}

export function ShippingAddressOptions({
  addressChoice,
  onAddressChoiceChange,
}: ShippingAddressOptionsProps) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-sm font-semibold">
        <MapPin className="size-4 text-primary" />
        Saved Addresses
      </h3>
      <p className="mt-1 text-xs text-muted-foreground">
        Select a saved address or enter a new one below
      </p>

      <label className="mt-3 flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3.5 transition-colors has-[:checked]:border-primary">
        <input
          className="sr-only"
          type="radio"
          name="address-choice"
          value="saved"
          checked={addressChoice === "saved"}
          onChange={() => onAddressChoiceChange("saved")}
        />
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
          <MapPin className="size-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold">Sadat City</p>
          <p className="mt-0.5 text-xs text-muted-foreground">Sadat City</p>
          <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Phone className="size-3" />
              01097514862
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="size-3" />
              Sadat City
            </span>
          </p>
        </div>
      </label>

      <label
        className={`mt-2.5 flex w-full cursor-pointer items-center gap-3 rounded-lg border border-dashed p-3 text-left transition-colors ${
          addressChoice === "new"
            ? "border-primary bg-emerald-50"
            : "border-primary/60 bg-emerald-50/50 hover:bg-emerald-50"
        }`}
      >
        <input
          className="sr-only"
          type="radio"
          name="address-choice"
          value="new"
          checked={addressChoice === "new"}
          onChange={() => onAddressChoiceChange("new")}
        />
        <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <Plus className="size-4" />
        </span>
        <span>
          <span className="block text-sm font-medium text-primary">
            Use a different address
          </span>
          <span className="mt-0.5 block text-xs text-muted-foreground">
            Enter a new shipping address manually
          </span>
        </span>
      </label>
    </div>
  )
}
