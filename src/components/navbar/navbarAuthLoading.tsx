import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NavbarAuthLoading() {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      disabled
      aria-label="Loading account"
      className="text-emerald-600"
    >
      <Loader2 aria-hidden="true" className="size-4 animate-spin" />
    </Button>
  );
}
