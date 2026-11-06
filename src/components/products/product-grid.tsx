import { ProductT } from "@/types/productCard/product";
import { ProductCard } from "./product-card";
import { getProducts } from "@/services/products/products.services";

type ProductGridProps = {
  products: ProductT[];
};

export async function ProductGrid() {
  
  const products = await getProducts();
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 w-full   ">
      {products.map((product) => (
        <ProductCard key={product._id || product.id} product={product} />
      ))}
    </div>
  );
}
