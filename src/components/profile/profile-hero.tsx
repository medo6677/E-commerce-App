import Link from "next/link"
import { UserRound } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function ProfileHero() {
  return (
    <section className="bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-400 text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-7 sm:px-6 sm:py-9 lg:px-8">
        <Breadcrumb>
          <BreadcrumbList className="gap-1.5 text-xs text-white/75">
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="text-white/75 hover:text-white">
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="[&>svg]:size-3 [&>svg]:text-white/60" />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium text-white">
                My Account
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-4 flex items-center gap-3">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
            <UserRound className="size-5" />
          </span>
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              My Account
            </h1>
            <p className="mt-0.5 text-xs text-white/85 sm:text-sm">
              Manage your addresses and account settings
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
