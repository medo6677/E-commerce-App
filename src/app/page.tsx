import { BenefitsStrip } from "@/components/home/benefits-strip";
import { DealBanners } from "@/components/home/deal-banners";
import { NewsletterAppPromo } from "@/components/home/newsletter-app-promo";
import { ShopByCategory } from "@/components/home/shop-by-category";
import { ProductGrid } from "@/components/products/product-grid";
import { HeroSlider } from "@/components/slider/hero-slider";
import { authOptions } from "@/lib/authOptions";
import { getUserToken } from "@/lib/getUserToken";
import { getProducts } from "@/services/products/products.services";
import { ProductCardResponseI } from "@/types/productCard/response";

export default async function Home() {
  const products: ProductCardResponseI = await getProducts();
  console.log(products);
  
  return (
    <>
      <HeroSlider />
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
        <ProductGrid products={products.data} />
      </section>
      <NewsletterAppPromo />
    </>
  );
}
