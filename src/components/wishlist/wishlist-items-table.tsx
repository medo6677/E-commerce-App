import { Card } from "@/components/ui/card"

import { WishlistItemRow } from "./wishlist-item-row"
import { ProductT } from "@/types/productCard/product"

interface WishlistItemsTableProps {
  products: ProductT[]
}

export function WishlistItemsTable({ products }: WishlistItemsTableProps) {
  return (
    <Card className="gap-0 overflow-hidden rounded-xl border-slate-200 bg-white p-0 shadow-none">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] table-fixed text-left">
          <colgroup>
            <col className="w-[49%]" />
            <col className="w-[16%]" />
            <col className="w-[14%]" />
            <col className="w-[21%]" />
          </colgroup>
          <thead className="bg-slate-50/80">
            <tr>
              <th className="py-3 pl-3 pr-4 text-xs font-medium text-slate-500 sm:pl-4">
                Product
              </th>
              <th className="px-3 py-3 text-xs font-medium text-slate-500">
                Price
              </th>
              <th className="px-3 py-3 text-xs font-medium text-slate-500">
                Status
              </th>
              <th className="py-3 pl-3 pr-3 text-right text-xs font-medium text-slate-500 sm:pl-4 sm:pr-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <WishlistItemRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
