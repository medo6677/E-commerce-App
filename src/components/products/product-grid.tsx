import { ProductT } from "@/types/productCard/product";
import { ProductCard } from "./product-card";
import { getProducts } from "@/services/products/products.services";
import { cacheLife } from "next/cache";

type ProductGridProps = {
  products: ProductT[];
};

export async function ProductGrid() {
   "use cache";

  cacheLife({
    stale: 3600,
    revalidate: 172800,
    expire: 172800,
  });
  const products = await getProducts();
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 w-full   ">
      {products.map((product) => (
        <ProductCard key={product._id || product.id} product={product} />
      ))}
    </div>
  );
}
