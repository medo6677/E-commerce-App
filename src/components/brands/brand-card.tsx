import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import type { Brand } from "@/types/productCard/brand";

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link
      href={`/brands/${brand._id}`}
      aria-label={`View products from ${brand.name}`}
      className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
    >
      <Card className="group h-[280px] items-center gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_8px_24px_rgba(124,58,237,0.14)]">
        <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-xl bg-slate-50">
          <div className="absolute inset-0 flex items-center justify-center bg-white/70">
            <Image
              src={brand.image}
              alt={brand.name}
              width={192}
              height={192}
              sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 15vw"
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
        <h2 className="text-center text-sm font-medium leading-5 text-slate-700 transition-colors group-hover:text-violet-600">
          {brand.name}
        </h2>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View Products
          <ArrowRight aria-hidden="true" className="size-4" />
        </span>
      </Card>
    </Link>
  );
}
