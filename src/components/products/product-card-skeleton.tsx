import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <Card
      aria-label="Loading product"
      className="relative h-[394px] gap-0 overflow-hidden rounded-lg border-slate-200 bg-white py-0 shadow-none"
    >
      <Skeleton className="mx-5 mt-5 flex-1 rounded-lg" />
      <CardContent className="flex flex-col gap-2 px-4 pb-4 pt-1">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="mt-1 h-5 w-4/5" />
        <Skeleton className="h-4 w-28" />
      </CardContent>
      <CardFooter className="justify-between px-4 pb-4 pt-0">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="size-10 rounded-full" />
      </CardFooter>
    </Card>
  );
}
