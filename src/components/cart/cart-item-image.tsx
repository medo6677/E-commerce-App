import Image from "next/image";
import { Package } from "lucide-react";

export function CartItemImage({
  src,
  title,
  hasError,
  onError,
}: {
  src: string;
  title: string;
  hasError: boolean;
  onError: () => void;
}) {
  return (
    <div className="relative size-20 sm:size-24 rounded-lg bg-muted/40 p-2 flex items-center justify-center shrink-0 border border-border/50 overflow-hidden">
      {!hasError ? (
        <Image
          src={src}
          alt={title}
          fill
          sizes="96px"
          className="object-contain p-1"
          onError={onError}
        />
      ) : (
        <Package className="size-8 text-muted-foreground/60" />
      )}
    </div>
  );
}
