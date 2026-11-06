import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function CategoryCardSkeleton() {
  return (
    <Card
      aria-label="Loading category"
      className="h-[150px] items-center justify-center gap-3 rounded-xl border-slate-100 bg-white px-3 py-4 shadow-sm"
    >
      <Skeleton className="size-20 rounded-full" />
      <Skeleton className="h-5 w-24" />
    </Card>
  );
}
