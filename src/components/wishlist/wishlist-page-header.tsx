import Link from "next/link"
import { Heart } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface WishlistPageHeaderProps {
  itemCount: number
}

export function WishlistPageHeader({ itemCount }: WishlistPageHeaderProps) {
  return (
    <header className="space-y-3 pb-2">
      <Breadcrumb>
        <BreadcrumbList className="gap-1.5 text-xs text-muted-foreground">
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="transition-colors hover:text-foreground">
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="[&>svg]:size-3" />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-medium text-foreground">
              Wishlist
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center gap-3.5 pt-1">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-500 shadow-xs sm:size-12">
          <Heart className="size-5 fill-current" aria-hidden="true" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            My Wishlist
          </h1>
          <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
            {itemCount} items saved
          </p>
        </div>
      </div>
    </header>
  )
}
