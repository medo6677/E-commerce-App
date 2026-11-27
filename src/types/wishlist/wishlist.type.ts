import { Brand } from "../productCard/brand";
import { Category } from "../productCard/category";
import { ProductT } from "../productCard/product";

export interface WishlistI {
  status: string;
  count: number;
  data: ProductT[];
}
