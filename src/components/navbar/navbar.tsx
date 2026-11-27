"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { useSession } from "next-auth/react";
import {
  CreditCard,
  Headset,
  Heart,
  LogIn,
  Menu,
  ShoppingCart,
  UserPlus,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import { NavbarUtilityBar } from "./navbarUtilityBar";
import { NavbarSearch } from "./navbarSearch";
import { NavbarLinks } from "./navbarLinks";
import { NavbarAccountDropdown } from "./navbarAccountDropdown";
import { NavbarAuthLoading } from "./navbarAuthLoading";
import { Badge } from "../ui/badge";
import { CartContext } from "@/context/cartItemsContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { status } = useSession();
  const { numOfCartItems } = useContext(CartContext)!;
  return (
    <>

      <NavbarUtilityBar />
      <header className="w-full border-b border-slate-200 bg-white text-slate-700 sticky top-0 z-50">

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 ">
          <div className="flex min-h-[76px] items-center justify-between gap-4">
            <Link
              href="/"
              aria-label="FreshCart home"
              className="inline-flex shrink-0 items-center"
            >
              <Image src={logo} alt="FreshCart" priority className="h-auto w-36" />
            </Link>

            <NavbarSearch className="hidden max-w-[520px] flex-1 xl:flex" />

            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-6 xl:flex"
            >
              <NavbarLinks />
            </nav>

            <div className="hidden shrink-0 items-center gap-3 xl:flex">
              <a
                href="mailto:support@freshcart.com"
                className="flex items-center gap-2 border-r border-slate-200 pr-4 text-xs text-slate-500"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <Headset aria-hidden="true" className="size-4" />
                </span>
                <span>
                  <span className="block">Support</span>
                  <span className="font-medium text-slate-700">24/7 Help</span>
                </span>
              </a>
            </div>

            <div className="flex shrink-0 items-center gap-1">
              {/* Wishlist */}
              <Link
              
               href={"/wishlist"}
                aria-label="Wishlist"
                className="text-slate-600 hover:text-emerald-700"
              >
                <Heart aria-hidden="true" className="size-5" />
              </Link>

              {/* Shopping Cart */}
              <Link
                href="/cart"
                aria-label="Shopping cart"
                className="relative inline-flex items-center text-slate-600 hover:text-emerald-700"
              >
                <ShoppingCart aria-hidden="true" className="size-5" />
                { }   {numOfCartItems > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2.5 -end-2.5 flex size-4 items-center justify-center rounded-full p-2 text-[10px]"
                  >
                    {numOfCartItems}
                  </Badge>
                )}
              </Link>

              {status === "loading" ? (
                <NavbarAuthLoading />
              ) : status === "authenticated" ? (
                <NavbarAccountDropdown />
              ) : (
                <div className="hidden items-center gap-1 lg:flex">
                  <Link
                    href="/login"
                    className="inline-flex h-9 items-center gap-2 rounded-lg px-3 text-sm font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    <LogIn aria-hidden="true" className="size-4" />
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="inline-flex h-9 items-center gap-2 rounded-lg bg-[#0AAD0A] px-3 text-sm font-semibold text-white transition-colors hover:bg-[#099509]"
                  >
                    <UserPlus aria-hidden="true" className="size-4" />
                    Sign Up
                  </Link>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label={
                  isMenuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsMenuOpen((open) => !open)}
                className="xl:hidden"
              >
                {isMenuOpen ? (
                  <X aria-hidden="true" />
                ) : (
                  <Menu aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>

          <div className="pb-4 xl:hidden">
            <NavbarSearch />
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="flex flex-col border-t border-slate-100 py-3 xl:hidden"
            >
              <NavbarLinks onNavigate={() => setIsMenuOpen(false)} />
              <a
                href="mailto:support@freshcart.com"
                className="flex items-center gap-2 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700"
              >
                <Headset aria-hidden="true" className="size-4" />
                Support 24/7 Help
              </a>

              {status === "unauthenticated" && (
                <div className="mt-4 flex flex-col gap-2.5 border-t border-slate-100 pt-4">
                  <Button
                    asChild
                    variant="outline"
                    className="h-10 w-full justify-center rounded-xl border-slate-200 text-sm font-semibold text-slate-700 shadow-xs hover:border-slate-300 hover:bg-slate-50 hover:text-emerald-700"
                  >
                    <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                      <LogIn aria-hidden="true" className="size-4" />
                      Sign In
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="h-10 w-full justify-center rounded-xl bg-[#0AAD0A] text-sm font-semibold text-white shadow-xs hover:bg-[#099509] active:scale-[0.99]"
                  >
                    <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                      <UserPlus aria-hidden="true" className="size-4" />
                      Sign Up
                    </Link>
                  </Button>
                </div>
              )}
            </nav>
          )}
        </div>
      </header>   </>
  );
}
