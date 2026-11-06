import { Apple, Play, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const appStores = [
  {
    name: "App Store",
    caption: "Download on",
    href: "https://www.apple.com/app-store/",
    icon: Apple,
  },
  {
    name: "Google Play",
    caption: "Get it on",
    href: "https://play.google.com/store",
    icon: Play,
  },
];

export function AppDownloadCard() {
  return (
    <Card className="relative overflow-hidden gap-0 rounded-3xl border-0 bg-slate-900 p-6 text-white shadow-none sm:p-8">
      <div
        aria-hidden="true"
        className="absolute -right-8 -top-12 size-40 rounded-full bg-emerald-500/15 blur-2xl"
      />
      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-400">
          <span aria-hidden="true"><Smartphone size={16} /></span>
          Mobile App
        </span>
        <h2 className="mt-5 text-2xl font-bold">Shop Faster on Our App</h2>
        <p className="mt-4 text-sm leading-6 text-slate-400">
          Get app-exclusive deals &amp; 15% off your first order.
        </p>

        <div className="mt-6 grid gap-3">
          {appStores.map(({ name, caption, href, icon: Icon }) => (
            <Button
              key={name}
              asChild
              variant="outline"
              className="h-14 justify-start gap-4 rounded-xl border-white/10 bg-white/10 px-4 text-white hover:bg-white/15 hover:text-white"
            >
              <a href={href} target="_blank" rel="noreferrer">
                <Icon
                  aria-hidden="true"
                  className={`size-5 ${name === "App Store" ? "fill-current" : ""}`}
                />
                <span className="flex flex-col items-start">
                  <span className="text-[10px] font-normal uppercase tracking-wide text-slate-400">
                    {caption}
                  </span>
                  <span className="text-sm font-medium">{name}</span>
                </span>
              </a>
            </Button>
          ))}
        </div>

        <p className="mt-6 flex items-center gap-2 text-sm text-slate-400">
          <span aria-label="5 out of 5 stars" className="text-amber-400">
            ★★★★★
          </span>
          <span>4.9 · 100K+ downloads</span>
        </p>
      </div>
    </Card>
  );
}
