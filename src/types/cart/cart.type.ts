import { ProductT } from "../productCard/product";


export interface CartTypeI {
  status: string;
  message: string;
  numOfCartItems: number;
  cartId: string;
  data: Data;
}

export interface Data {
  _id: string;
  cartOwner: string;
  products: CartProductI[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

export interface CartProductI {
  count: number;
  _id: string;
  product: ProductT;
  price: number;
}




