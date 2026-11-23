import Link from "next/link";
import { Fragment, type CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type PageHeaderBreadcrumb = {
  label: string;
  href?: string;
};

type PageHeaderProps = {
  breadcrumbs: PageHeaderBreadcrumb[];
  title: string;
  description: string;
  icon: LucideIcon;
  background?: CSSProperties["background"];
};

export function PageHeader({
  breadcrumbs,
  title,
  description,
  icon: Icon,
  background ,
  
}: PageHeaderProps) {
  return (
    <header
      className={`${background} flex min-h-[180px] items-center text-white `}
    
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6">
        <Breadcrumb>
          <BreadcrumbList className="gap-2 text-xs text-white/75">
            {breadcrumbs.map((breadcrumb, index) => (
              <Fragment key={`${breadcrumb.label}-${index}`}>
                {index > 0 && (
                  <BreadcrumbSeparator className="text-white/70 [&>svg]:size-3" />
                )}
                <BreadcrumbItem>
                  {index === breadcrumbs.length - 1 ? (
                    <BreadcrumbPage className="font-medium text-white">
                      {breadcrumb.label}
                    </BreadcrumbPage>
                  ) : breadcrumb.href ? (
                    <BreadcrumbLink
                      asChild
                      className="text-white/75 hover:text-white"
                    >
                      <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <span>{breadcrumb.label}</span>
                  )}
                </BreadcrumbItem>
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-3 flex items-center gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/15">
            <Icon aria-hidden="true" className="size-6" />
          </span>
          <div>
            <h1 className="text-2xl font-bold leading-tight">{title}</h1>
            <p className="mt-1 text-sm text-white/80">{description}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
