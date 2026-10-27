import { ProductGrid } from "@/components/products/product-grid";

export default async function ProductsPage() {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products`,
  );
  const { data: featuredProducts } = await response.json();

  return (
    <main className=" w-full   mx-auto max-w-[1440px] px-4 sm:px-6 my-6">
      <section aria-labelledby="featured-products-title">
        <h1
          id="featured-products-title"
          className="mb-6 border-s-4 border-emerald-600 ps-3 text-2xl font-bold text-slate-800"
        >
          Featured <span className="text-emerald-600">Products</span>
        </h1>
        <ProductGrid products={featuredProducts} />
      </section>
    </main>
  );
}
