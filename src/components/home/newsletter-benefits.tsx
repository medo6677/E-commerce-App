import { Leaf, Tag, Truck } from "lucide-react";

const benefits = [
  { label: "Fresh Picks Weekly", icon: Leaf },
  { label: "Free Delivery Codes", icon: Truck },
  { label: "Members-Only Deals", icon: Tag },
];

export function NewsletterBenefits() {
  return (
    <ul className="mt-5 flex flex-wrap gap-2.5">
      {benefits.map(({ label, icon: Icon }) => (
        <li
          key={label}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm sm:text-sm"
        >
          <span className="flex size-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <Icon aria-hidden="true" className="size-3.5" />
          </span>
          {label}
        </li>
      ))}
    </ul>
  );
}
