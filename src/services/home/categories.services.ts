import type { Category } from "@/types/productCard/category";

const CATEGORIES_API_URL = "https://ecommerce.routemisr.com/api/v1/categories";

type CategoriesResponse = {
  data: Category[];
};

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(CATEGORIES_API_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.status}`);
  }

  const { data }: CategoriesResponse = await response.json();
  return data;
}
