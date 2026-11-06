import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { getCategories } from "@/services/home/categories.services";
import { cacheLife } from "next/cache";

export async function ShopByCategory() {
  "use cache";
  cacheLife({
    stale: 3600,
    revalidate: 172800,
    expire: 172800,
  }); 
  const categories = await getCategories();

  return (
    <section
      aria-labelledby="shop-by-category-title"
      className="mx-auto max-w-[1568px] px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="flex items-center justify-between gap-4">
        <h2
          id="shop-by-category-title"
          className="border-s-4 border-emerald-500 ps-3 text-2xl font-bold text-slate-800 sm:text-3xl"
        >
          Shop By <span className="text-emerald-600">Category</span>
        </h2>
        <Link
          href="/categories"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
        >
          View All Categories
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6">
        {categories.map((category) => (
          <Card
            key={category._id}
            className="h-[150px] items-center justify-center gap-3 rounded-xl border-slate-100 bg-white px-3 py-4 shadow-sm transition-all duration-300 hover:scale-105  cursor-pointer hover:shadow-md "
          >
            <Link
              href={`categories/${category._id}`}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative size-20 shrink-0 overflow-hidden rounded-full bg-slate-50">
                <Image
                  src={category.image}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-center text-sm font-medium leading-5 text-slate-700 sm:text-base pt-3">
                {category.name}
              </h3>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
