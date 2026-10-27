import Link from "next/link";
import { Gift, LogIn, Mail, Phone, Truck, UserRound } from "lucide-react";

export function NavbarUtilityBar() {
  return (
    <div className="hidden border-b border-slate-100 bg-slate-50/70 lg:block">
      <div className="mx-auto flex max-w-360 items-center justify-between gap-4 px-4 py-2 text-xs text-slate-500 sm:px-6">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2">
            <Truck aria-hidden="true" className="size-4 text-emerald-600" />
            Free Shipping on Orders 500 EGP
          </span>
          <span className="inline-flex items-center gap-2">
            <Gift aria-hidden="true" className="size-4 text-emerald-600" />
            New Arrivals Daily
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a className="inline-flex items-center gap-2 hover:text-emerald-700" href="tel:+18001234567">
            <Phone aria-hidden="true" className="size-3.5" />
            +1 (800) 123-4567
          </a>  
          <a
            className="inline-flex items-center gap-2 hover:text-emerald-700"
            href="mailto:support@freshcart.com"
          >
            <Mail aria-hidden="true" className="size-3.5" />
            support@freshcart.com
          </a>
          <span aria-hidden="true" className="h-4 border-l border-slate-200" />
          <Link className="inline-flex items-center gap-2 hover:text-emerald-700" href="/login">
            <LogIn aria-hidden="true" className="size-3.5" />
            Sign In
          </Link>
          <Link className="inline-flex items-center gap-2 hover:text-emerald-700" href="/register">
            <UserRound aria-hidden="true" className="size-3.5" />
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
