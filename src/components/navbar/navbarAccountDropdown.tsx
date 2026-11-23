"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { LogOut, Loader2, ShoppingBag, UserRound } from "lucide-react";
import { sileo } from "sileo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavbarAccountDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  async function handleLogout() {
    if (isLoggingOut) return;

    setIsLoggingOut(true);
    try {
      await signOut({ callbackUrl: "/login" ,redirect: true });
      sileo.success({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
    } catch (error) {
      setIsLoggingOut(false);
      sileo.error({
        title: "Logout failed",
        description:
          error instanceof Error ? error.message : "Please try again.",
      });
    }
  }

  return (
    <DropdownMenu
      open={isOpen}
      onOpenChange={(open) => {
        if (!isLoggingOut) setIsOpen(open);
      }}
    >
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          disabled={isLoggingOut}
          aria-label={isLoggingOut ? "Logging out" : "Account menu"}
          aria-busy={isLoggingOut}
          className="text-slate-600 hover:text-emerald-700"
        >
          {isLoggingOut ? (
            <Loader2 aria-hidden="true" className="size-4 animate-spin" />
          ) : (
            <UserRound aria-hidden="true" className="size-5" />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        aria-busy={isLoggingOut}
        className="w-48 rounded-xl border border-slate-100 bg-white p-1.5 shadow-lg"
      >
        <DropdownMenuItem
          asChild
          disabled={isLoggingOut}
          className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
        >
          <Link href="/orders">
            <ShoppingBag aria-hidden="true" className="size-4 text-emerald-600" />
            Orders
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={isLoggingOut}
          onSelect={(event) => {
            event.preventDefault();
            void handleLogout();
          }}
          className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-rose-700 hover:bg-rose-50 hover:text-rose-700"
        >
          {isLoggingOut ? (
            <Loader2
              aria-hidden="true"
              className="size-4 animate-spin text-rose-600"
            />
          ) : (
            <LogOut aria-hidden="true" className="size-4 text-rose-600" />
          )}
          {isLoggingOut ? "Logging out..." : "Logout"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
