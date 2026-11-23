import { Brand } from "@/types/productCard/brand";

const BRANDS_API_URL = "https://ecommerce.routemisr.com/api/v1/brands?limit=30";

type BRANDSResponse = {
  data: Brand[];
};

export async function getBrands(): Promise<Brand[]> {
  const response = await fetch(BRANDS_API_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch brands: ${response.status}`);
  }

  const { data }: BRANDSResponse = await response.json();
  return data;
}
