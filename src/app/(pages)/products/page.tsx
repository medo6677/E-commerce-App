import { ProductGrid } from "@/components/products/product-grid";
import { getProducts } from "@/services/products/products.services";

export default async function ProductsPage() {


  return (
    <main className=" w-full   mx-auto max-w-[1440px] px-4 sm:px-6 my-6">
      <section aria-labelledby="featured-products-title">
        <h1
          id="featured-products-title"
          className="mb-6 border-s-4 border-emerald-600 ps-3 text-2xl font-bold text-slate-800"
        >
          Featured <span className="text-emerald-600">Products</span>
        </h1>
        <ProductGrid  />
      </section>
    </main>
  );
}
