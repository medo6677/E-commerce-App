import { Brand } from "../productCard/brand"
import { Category } from "../productCard/category"
import { SubcategoryT } from "../productCard/subcategory"
import { ReviewT } from "./review"

export interface productDetailsT {
    sold: number
    images: string[]
    subcategory: SubcategoryT[]
    ratingsQuantity: number
    _id: string
    title: string
    slug: string
    description: string
    quantity: number
    price: number
    imageCover: string
    category: Category
    brand: Brand
    ratingsAverage: number
    createdAt: string
    updatedAt: string
    __v: number
    reviews: ReviewT[]
    id: string
}





