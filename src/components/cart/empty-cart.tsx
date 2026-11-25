import Link from "next/link";
import { ArrowRight, PackageOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmptyCart() {
  return (
    <section
      aria-labelledby="empty-cart-title"
      className="flex min-h-[420px] flex-col items-center justify-center px-4 py-16 text-center"
    >
      <div className="mb-8 flex size-32 items-center justify-center rounded-full bg-muted">
        <PackageOpen
          aria-hidden="true"
          className="size-12 text-muted-foreground/40"
        />
      </div>

      <h2
        id="empty-cart-title"
        className="text-xl font-bold text-foreground sm:text-2xl"
      >
        Your cart is empty
      </h2>
      <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
        Looks like you haven&apos;t added anything to your cart yet.
        <br />
        Start exploring our products!
      </p>

      <Button
        asChild
        size="lg"
        className="mt-8 h-13 min-w-48 gap-2 rounded-xl px-8 font-semibold shadow-md"
      >
        <Link href="/products">
          Start Shopping
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </Button>
    </section>
  );
}
