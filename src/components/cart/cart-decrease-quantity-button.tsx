import { Minus } from "lucide-react";

export function CartDecreaseQuantityButton({
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
      aria-label="Decrease quantity"
      className="size-7 rounded-md border border-input bg-background flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-colors disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
    >
      <Minus className="size-3.5" />
    </button>
  );
}
