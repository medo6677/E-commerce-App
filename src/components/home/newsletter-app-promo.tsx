import { AppDownloadCard } from "@/components/home/app-download-card";
import { NewsletterSignup } from "@/components/home/newsletter-signup";

export function NewsletterAppPromo() {
  return (
    <section
      aria-label="Newsletter and mobile app"
      className="px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-[1412px] gap-8 rounded-[32px] border border-emerald-100 bg-gradient-to-br from-slate-50 via-white to-rose-50 p-6 shadow-sm sm:p-10 lg:grid-cols-[1.65fr_1fr] lg:items-center lg:gap-8 lg:p-12">
        <NewsletterSignup />
        <AppDownloadCard />
      </div>
    </section>
  );
}
