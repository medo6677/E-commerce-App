import { Plus } from "lucide-react";

export function CartIncreaseQuantityButton({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-label="Increase quantity"
      className="size-7 rounded-md bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors shadow-2xs cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
    >
      <Plus className="size-3.5" />
    </button>
  );
}
