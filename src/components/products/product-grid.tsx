import { ProductT } from "@/types/productCard/product";
import { ProductCard } from "./product-card";
import { getProducts } from "@/services/products/products.services";
import { GetLoggedUserWishlist } from "@/app/actions/wishlist.actions";
import { WishlistI } from "@/types/wishlist/wishlist.type";

type ProductGridProps = {
  products: ProductT[];
};



export async function ProductGrid({ products }: ProductGridProps) {

  const response: WishlistI = await GetLoggedUserWishlist()
  console.log(response);

  const wishlistIds = response.data.map((item) => item._id);
  console.log(wishlistIds);


  if (!products || products.length === 0) {
    return (
      <div className="flex items-center justify-center py-10">
        <p className="text-slate-500">No products found.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 w-full   ">
      {products.map((product) => (
        <ProductCard key={product._id || product.id} product={product} isAddedToWishlist={wishlistIds.includes(product._id)} />
      ))}
    </div>
  );
}
