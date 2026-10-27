import Link from "next/link";

interface LinkGroup {
  title: string;
  links: string[];
}

export function FooterLinks() {
  const linkGroups: LinkGroup[] = [
    {
      title: "Shop",
      links: [
        "All Products",
        "Categories",
        "Brands",
        "Electronics",
        "Men's Fashion",
        "Women's Fashion",
      ],
    },
    {
      title: "Account",
      links: [
        "My Account",
        "Order History",
        "Wishlist",
        "Shopping Cart",
        "Sign In",
        "Create Account",
      ],
    },
    {
      title: "Support",
      links: [
        "Contact Us",
        "Help Center",
        "Shipping Info",
        "Returns & Refunds",
        "Track Order",
      ],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-8">
      {linkGroups.map((group) => (
        <div key={group.title} className="space-y-4">
          <h3 className="text-base font-bold text-white tracking-wide">
            {group.title}
          </h3>
          <ul className="space-y-2.5">
            {group.links.map((link) => (
              <li key={link}>
                <Link
                  href="/"
                  className="text-sm text-gray-400 transition hover:text-[#0AAD0A]"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
