"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  CreditCard,
  Headset,
  Heart,
  LogIn,
  Menu,
  ShoppingCart,
  UserPlus,
  UserRound,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import { NavbarUtilityBar } from "./navbarUtilityBar";
import { NavbarSearch } from "./navbarSearch";
import { NavbarLinks } from "./navbarLinks";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Wishlist"
                className="text-slate-600 hover:text-emerald-700"
              >
                <Heart aria-hidden="true" className="size-5" />
              </Button>

              {/* Shopping Cart */}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Shopping cart"
                className="text-slate-600 hover:text-emerald-700"
              >
                <ShoppingCart aria-hidden="true" className="size-5" />
              </Button>

              {/* Account Icon with Dropdown Menu */}
              <div className="relative" ref={userMenuRef}>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label="Account menu"
                  aria-expanded={isUserMenuOpen}
                  onClick={() => setIsUserMenuOpen((prev) => !prev)}
                  className={`text-slate-600 hover:text-emerald-700 ${isUserMenuOpen ? "bg-slate-100 text-emerald-700" : ""
                    }`}
                >
                  <UserRound aria-hidden="true" className="size-5" />
                </Button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 overflow-hidden rounded-xl border border-slate-100 bg-white p-1.5 shadow-lg z-50 animate-in fade-in-50 zoom-in-95">
                    <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Account
                    </div>
                    <Link
                      href="/login"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      <LogIn className="size-4 text-emerald-600" />
                      Sign In
                    </Link>
                    <Link
                      href="/register"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      <UserPlus className="size-4 text-emerald-600" />
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>

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
            </nav>
          )}
        </div>
      </header>   </>
  );
}
