"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function PaginationComponent({
  currentPage,
  totalPages,
  limit,
}: {
  currentPage: number;
  totalPages: number;
  limit: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createPageUrl = (newPage: number, newLimit: number = limit) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(newPage));
    params.set("limit", String(newLimit));
    return `${pathname}?${params.toString()}`;
  };
  const handleLimitChange = (value: string) => {
    router.push(createPageUrl(1, Number(value)));
  };
  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;
  return (
    <>
      {" "}
      <div className="flex items-center justify-center  py-10">
        <div className="w-fit flex items-center justify-between gap-4">
          <Field orientation="horizontal" className="w-fit">
            <FieldLabel htmlFor="select-rows-per-page">
              Rows per page
            </FieldLabel>
            <Select
              defaultValue="25"
              value={String(limit)}
              onValueChange={handleLimitChange}
            >
              <SelectTrigger className="w-20" id="select-rows-per-page">
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="start">
                <SelectGroup>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="30">30</SelectItem>
                  <SelectItem value="40">40</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Pagination className="mx-0 w-auto">
            <PaginationContent>
              <PaginationItem
                className={isFirstPage ? "pointer-events-none opacity-50" : ""}
              >
                <PaginationPrevious
                  href={createPageUrl(currentPage - 1)}
                  aria-disabled={isFirstPage}
                  tabIndex={isFirstPage ? -1 : undefined}
                />
              </PaginationItem>

              <PaginationItem
                className={isLastPage ? "pointer-events-none opacity-50" : ""}
              >
                <PaginationNext
                  href={createPageUrl(currentPage + 1)}
                  aria-disabled={isLastPage}
                  tabIndex={isLastPage ? -1 : undefined}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
}
