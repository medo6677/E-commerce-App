import { ReviewUserT } from "./reviewUset"

export interface ReviewT {
    _id: string
    review: string
    rating: number
    product: string
    user: ReviewUserT
    createdAt: string
    updatedAt: string
    __v: number
}
