import { ProductT } from "@/types/productCard/product";
import { productDetailsT } from "@/types/productDetails/productDetailsT";
import { cacheLife } from "next/cache";

const PRODUCTS_API_URL = "https://ecommerce.routemisr.com/api/v1/products";

export async function getProducts(): Promise<ProductT[]> {

  const response = await fetch(PRODUCTS_API_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  const { data } = await response.json();
  return data;
}

export async function getProductById(id: string): Promise<productDetailsT> {
  const response = await fetch(`${PRODUCTS_API_URL}/${encodeURIComponent(id)}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch product ${id}: ${response.status}`);
  }

  const { data } = await response.json();
  return data;
}
