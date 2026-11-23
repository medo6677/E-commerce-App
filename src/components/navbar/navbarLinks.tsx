import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type NavigationLinkItem = {
  name: string;
  href: string;
};

type NavigationLink = {
  label: string;
  href: string;
  items?: NavigationLinkItem[];
};

const navigationLinks: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  {
    label: "Categories",
    href: "/categories",

    items: [
      { name: "All Categories", href: "/categories" },
      { name: "Electronics", href: "/categories/6439d2d167d9aa4ca970649f" },
      { name: "Women's Fashion", href: "/categories/6439d58a0049ad0b52b9003f" },
      { name: "Men's Fashion", href: "/categories/6439d5b90049ad0b52b90048" },
      { name: "Beauty & Health", href: "/categories/6439d30b67d9aa4ca97064b1" },
    ],
  },
  { label: "Brands", href: "/brands" },
];

type NavbarLinksProps = {
  onNavigate?: () => void;
};

export function NavbarLinks({ onNavigate }: NavbarLinksProps) {
  return (
    <>
      {navigationLinks.map(({ label, href, items }) =>
        label !== "Categories" ? (
          <Link
            key={label}
            href={href}
            onClick={onNavigate}
            className="flex items-center gap-1 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-emerald-700"
          >
            {label}
          </Link>
        ) : (
          <NavigationMenu key={label} viewport={false} className="flex-none">
            <NavigationMenuList className="gap-0 p-0 justify-start">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto rounded-none  bg-transparent px-0 py-2 text-sm font-medium text-slate-700 shadow-none transition-colors hover:bg-transparent hover:text-emerald-700 focus:bg-transparent focus:text-emerald-700 data-open:bg-transparent data-open:text-emerald-700 data-popup-open:bg-transparent data-popup-open:text-emerald-700">
                {label}
                </NavigationMenuTrigger>

                <NavigationMenuContent className="min-w-48 rounded-xl border border-slate-100 bg-white p-2 shadow-lg">
                  {items?.map((item) => (
                    <NavigationMenuLink
                    key={item.href}
                    href={item.href}
                      onClick={onNavigate}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                    >
                    {item.name}
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ),
      )}
    </>
  );
}
