import React from "react";
import { Star, Truck, ShieldCheck } from "lucide-react";

export function AuthFeatures() {
  return (
    <div className="lg:col-span-5 p-8 lg:p-10 bg-muted/15 border-b lg:border-b-0 lg:border-r border-border  flex flex-col justify-between gap-8">
      <div>
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Welcome to <span className="text-primary">FreshCart</span>
        </h1>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          Join thousands of happy customers who enjoy fresh groceries delivered
          right to their doorstep.
        </p>

        {/* Feature List */}
        <div className="mt-8 space-y-6">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 shrink-0">
              <Star className="size-5 fill-emerald-600 dark:fill-emerald-400" />
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-foreground">
                Premium Quality
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Premium quality products sourced from trusted suppliers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 shrink-0">
              <Truck className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-foreground">
                Fast Delivery
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Same-day delivery available in most areas
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 shrink-0">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-foreground">
                Secure Shopping
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Your data and payments are completely secure
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Box */}
      <div className="rounded-xl border border-border/80 bg-background/80 p-4 shadow-2xs backdrop-blur-xs">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 font-semibold text-xs flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800">
            SJ
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">
              Sarah Johnson
            </h4>
            <div className="flex items-center gap-0.5 mt-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-3.5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground italic mt-3 leading-relaxed">
          &ldquo;FreshCart has transformed my shopping experience. The quality
          of the products is outstanding, and the delivery is always on time.
          Highly recommend!&rdquo;
        </p>
      </div>
    </div>
  );
}

