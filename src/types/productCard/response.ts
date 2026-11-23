import { ProductT } from "./product";

export interface ProductCardResponseI {
  results: number;
  metadata: Metadata;
  data: ProductT[];
}
export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
}
