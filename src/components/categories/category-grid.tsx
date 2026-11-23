import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/types/productCard/category";

export function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <section
      aria-label="Product categories"
      className="bg-slate-50 pt-6 pb-8  sm:py-8"
    >
      <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 xl:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/categories/${category._id}`}
              aria-label={`View subcategories for ${category.name}`}
              className="group flex min-h-[220px] flex-col items-center rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 sm:min-h-[240px] sm:p-4 xl:min-h-[260px]"
            >
              <div className="relative aspect-square w-full max-w-44 overflow-hidden rounded-lg bg-slate-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 639px) 40vw, (max-width: 1279px) 20vw, 176px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="mt-3 text-sm font-semibold leading-5 text-slate-800 transition-colors group-hover:text-emerald-700">
                {category.name}
              </span>
              <span className="mt-1 inline-flex min-h-4 items-center gap-1 text-[11px] font-medium text-emerald-600 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                View Subcategories
                <ArrowRight aria-hidden="true" className="size-3 rtl:rotate-180" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
