import { Skeleton } from "@/components/ui/skeleton";

export function HeroSliderSkeleton() {
  return (
    <section
      aria-label="Loading offers"
      aria-busy="true"
      className="relative h-[360px] overflow-hidden bg-[linear-gradient(90deg,rgba(0,201,80,0.9)_0%,rgba(5,223,114,0.5)_100%)] sm:h-[400px]"
    >
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center px-16 sm:px-12 lg:px-30 2xl:px-0">
        <div className="w-full max-w-md text-left">
          <Skeleton className="h-7 w-4/5 bg-white/40 sm:h-8" />
          <Skeleton className="mt-1 h-7 w-3/5 bg-white/40 sm:h-8" />
          <Skeleton className="mt-4 h-5 w-3/5 bg-white/35" />
          <div className="mt-6 flex flex-wrap gap-2">
            <Skeleton className="h-11 w-[122px] rounded-lg bg-white/80" />
            <Skeleton className="h-11 w-[136px] rounded-lg border border-white/60 bg-white/15" />
          </div>
        </div>
      </div>

      <Skeleton className="absolute start-4 top-1/2 hidden size-11 -translate-y-1/2 rounded-full bg-white/80 shadow-sm sm:start-14 lg:block" />
      <Skeleton className="absolute end-4 top-1/2 hidden size-11 -translate-y-1/2 rounded-full bg-white/80 shadow-sm sm:end-14 lg:block" />

      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        <Skeleton className="h-3 w-8 rounded-full bg-white/90" />
        <Skeleton className="size-3 rounded-full bg-white/60" />
        <Skeleton className="size-3 rounded-full bg-white/60" />
      </div>
    </section>
  );
}
