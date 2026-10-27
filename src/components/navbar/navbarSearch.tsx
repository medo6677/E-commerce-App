import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

type NavbarSearchProps = {
  className?: string;
};

export function NavbarSearch({ className = "" }: NavbarSearchProps) {
  return (
    <form
 
      className={`flex h-11 w-full items-center rounded-full border border-slate-200 bg-slate-50 pl-4 pr-1.5 focus-within:border-emerald-600 ${className}`}
    >
      <Input type="search"
        name="q"
        aria-label="Search products, brands and more"
        placeholder="Search for products, brands and more..."
        className="min-w-0 flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 border-0 shadow-none focus-visible:border-0 focus-visible:ring-0" />
 
      <Button
        type="submit"
        size="icon"
        aria-label="Search"
        className="size-8 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
      >
        <Search className="size-4" />
      </Button>
    </form>
  );
}
