import { ProductT } from "@/types/productCard/product";
import { ProductDetailsActions } from "./product-details-actions";
import { ProductDetailsFeatures } from "./product-details-features";
import { ProductDetailsHeader } from "./product-details-header";
import { ProductDetailsPrice } from "./product-details-price";
import { ProductDetailsQuantity } from "./product-details-quantity";
import { ProductDetailsSpecs } from "./product-details-specs";
import { productDetailsT } from "@/types/productDetails/productDetailsT";

export function ProductDetails({ product }: { product: productDetailsT }) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-white p-6">
      <ProductDetailsHeader
        productCat={product.category.name}
        productBrand={product.brand.name}
        productTitle={product.title}
        rating={product.ratingsAverage}
        reviews={product.reviews.length}
      />
      <ProductDetailsPrice price={product.price} quantity={product.quantity} />
      <ProductDetailsSpecs  description={product.description}/>
      <ProductDetailsQuantity  quantity={product.quantity} price = {product.price}/>
      <ProductDetailsActions />
      <ProductDetailsFeatures />
    </div>
  );
}

export default ProductDetails;
