import { ArrowRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NewsletterBenefits } from "@/components/home/newsletter-benefits";

export function NewsletterSignup() {
  return (
    <div className="lg:border-e lg:border-emerald-100 lg:pe-8">
      <div className="flex items-center gap-4">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/25">
          <Mail aria-hidden="true" className="size-6" />
        </span>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
            Newsletter
          </p>
          <p className="text-xs text-slate-500">50,000+ subscribers</p>
        </div>
      </div>

      <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
        Get the Freshest Updates{" "}
        <span className="text-emerald-600">Delivered Free</span>
      </h2>
      <p className="mt-3 text-base text-slate-500 sm:text-lg">
        Weekly recipes, seasonal offers &amp; exclusive member perks.
      </p>

      <NewsletterBenefits />

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          aria-label="Email address"
          placeholder="you@example.com"
          className="h-14 rounded-xl border-slate-200 bg-white px-5 shadow-sm sm:flex-1"
        />
        <Button
          type="button"
          className="h-14 rounded-xl bg-emerald-500 px-7 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600"
        >
          Subscribe
          <ArrowRight aria-hidden="true" className="size-4" />
        </Button>
      </div>
      <p className="mt-2 pl-1 text-xs text-slate-400">
        <span aria-hidden="true" className="text-amber-400">
          ✦
        </span>{" "}
        Unsubscribe anytime. No spam, ever.
      </p>
    </div>
  );
}
