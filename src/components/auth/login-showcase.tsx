import Image from "next/image";
import { Clock3, ShieldCheck, Truck } from "lucide-react";
import loginImage from "@/assets/loginImg.png";

const benefits = [
  { icon: Truck, label: "Free Delivery" },
  { icon: ShieldCheck, label: "Secure Payment" },
  { icon: Clock3, label: "24/7 Support" },
];

export function LoginShowcase() {
  return (
    <section className="hidden  lg:flex flex-col justify-center border-b border-slate-100 bg-[#fbfdfb] px-6 py-8 sm:px-10 lg:border-b-0 lg:border-r lg:px-12 lg:py-10">
      <div className="relative mx-auto aspect-[1.2] w-full max-w-md overflow-hidden rounded-2xl bg-[#f1f8ee]">
        <Image
          src={loginImage}
          alt="A shopping cart filled with fresh vegetables"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 42vw"
          className="object-contain"
        />
      </div>

      <div className="mx-auto mt-6 max-w-md text-center">
        <h2 className="text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
          FreshCart - Your One-Stop Shop for Fresh Products
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          Join thousands of happy customers who trust FreshCart for their daily
          grocery needs.
        </p>
        <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2">
          {benefits.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600"
            >
              <Icon aria-hidden="true" className="size-3.5 text-[#0AAD0A]" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
