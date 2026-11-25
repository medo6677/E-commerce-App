"use client"
import React, { Fragment } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface StorePageHeaderBreadcrumb {
  label: string;
  href?: string;
}

export interface StorePageHeaderProps {
  breadcrumbs: StorePageHeaderBreadcrumb[];
  title: string;
  icon: LucideIcon;
  count?: number;
  countLabel?: string;
  description?: React.ReactNode;
}

export function StorePageHeader({
  breadcrumbs,
  title,
  icon: Icon,
  count,
  countLabel = "items in your cart",
  description,
}: StorePageHeaderProps) {
  return (
    <div className="w-full space-y-3 pb-2">
      {/* Breadcrumb Navigation */}
      <Breadcrumb>
        <BreadcrumbList className="text-xs text-muted-foreground gap-1.5">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <Fragment key={`${crumb.label}-${index}`}>
                {index > 0 && <BreadcrumbSeparator className="[&>svg]:size-3" />}
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="font-medium text-foreground">
                      {crumb.label}
                    </BreadcrumbPage>
                  ) : crumb.href ? (
                    <BreadcrumbLink asChild className="hover:text-foreground transition-colors">
                      <Link href={crumb.href}>{crumb.label}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                </BreadcrumbItem>
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>

      {/* Main Header Content */}
      <div className="flex items-center gap-3.5 pt-1">
        <div className="size-11 sm:size-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-xs">
          <Icon className="size-6" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h1>
          {description ? (
            <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              {description}
            </div>
          ) : count !== undefined ? (
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
              You have{" "}
              <span className="text-primary font-semibold">
                {count} {count === 1 ? countLabel.replace("items", "item") : countLabel}
              </span>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
