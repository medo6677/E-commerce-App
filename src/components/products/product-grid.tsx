import { ProductT } from "@/types/productCard/product";
import { ProductCard } from "./product-card";


type ProductGridProps = {
  products: ProductT[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
