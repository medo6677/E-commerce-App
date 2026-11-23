import { ProductCardResponseI } from "@/types/productCard/response";
import { productDetailsT } from "@/types/productDetails/productDetailsT";

const PRODUCTS_API_URL = "https://ecommerce.routemisr.com/api/v1/products";

export async function getProducts(page = 1, limit = 40): Promise<ProductCardResponseI> {
  const response = await fetch(
    `${PRODUCTS_API_URL}?page=${page}&limit=${limit}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  const data = await response.json();
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
