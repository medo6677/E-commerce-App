import { BenefitsStrip } from "@/components/home/benefits-strip";
import { DealBanners } from "@/components/home/deal-banners";
import { NewsletterAppPromo } from "@/components/home/newsletter-app-promo";
import { ShopByCategory } from "@/components/home/shop-by-category";
import { ProductCardSkeleton } from "@/components/products/product-card-skeleton";
import { ProductGrid } from "@/components/products/product-grid";
import { HeroSlider } from "@/components/slider/hero-slider";
import { HeroSliderSkeleton } from "@/components/slider/hero-slider-skeleton";

import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<HeroSliderSkeleton />}>
        <HeroSlider />
      </Suspense>
      <BenefitsStrip />
      <ShopByCategory />
      <DealBanners />

      <section
        aria-labelledby="featured-products-title "
        className="w-full   mx-auto max-w-[1568px] px-4 py-10 sm:px-6 lg:px-8"
      >
        <h1
          id="featured-products-title"
          className="mb-6 border-s-4 border-emerald-600 ps-3 text-2xl font-bold text-slate-800 w-full  "
        >
          Featured <span className="text-emerald-600">Products</span>
        </h1>
        <Suspense
          fallback={
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 w-full">
              {[1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 8, 8, 8, 8].map((i, index) => {
                return <ProductCardSkeleton key={index} />;
              })}
            </div>
          }
        >
          <ProductGrid />
        </Suspense>
      </section>
      <NewsletterAppPromo />
    </>
  );
}
