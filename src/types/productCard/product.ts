import { Brand } from "./brand";
import { Category } from "./category";
import { SubcategoryT } from "./subcategory";

export interface ProductT {
  sold: number;
  images: string[];
  subcategory: SubcategoryT[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  id: string;
  priceAfterDiscount?: number;
  availableColors?: number[];
}
