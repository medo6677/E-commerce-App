import Image from "next/image";
import Link from "next/link";
import {

  Mail,
  MapPin,
  Phone,

} from "lucide-react";
import logo from "@/assets/logo.svg";

export function FooterContact() {
  const socialLinks = [
    { icon: Phone, label: "Facebook", href: "/" },
    { icon: Phone, label: "Twitter", href: "/" },
    { icon: Phone, label: "Instagram", href: "/" },
    { icon: Phone, label: "YouTube", href: "/" },
  ];

  return (
    <div className="space-y-6">
      {/* Brand Logo in white box */}
      <Link
        href="/"
        className="inline-flex items-center rounded-xl bg-white px-4 py-2.5 shadow-sm transition hover:opacity-95"
      >
        <Image src={logo} alt="FreshCart" className="h-7 w-auto" />
      </Link>

      {/* Description */}
      <p className="max-w-sm text-sm leading-relaxed text-gray-400">
        FreshCart is your one-stop destination for quality products. From fashion
        to electronics, we bring you the best brands at competitive prices with
        a seamless shopping experience.
      </p>

      {/* Contact Info */}
      <ul className="space-y-3 text-sm text-gray-300">
        <li>
          <Link
            href="/"
            className="flex items-center gap-3 transition hover:text-[#0AAD0A]"
          >
            <Phone className="size-4 shrink-0 text-[#0AAD0A]" />
            <span>+1 (800) 123-4567</span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center gap-3 transition hover:text-[#0AAD0A]"
          >
            <Mail className="size-4 shrink-0 text-[#0AAD0A]" />
            <span>support@freshcart.com</span>
          </Link>
        </li>
        <li>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-4 shrink-0 text-[#0AAD0A]" />
            <span>123 Commerce Street, New York, NY 10001</span>
          </div>
        </li>
      </ul>

      {/* Social Media Links */}
      <div className="flex items-center gap-2.5 pt-1">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link
              key={index}
              href={social.href}
              aria-label={social.label}
              className="flex size-9 items-center justify-center rounded-full bg-slate-800/80 text-gray-400 transition hover:bg-[#0AAD0A] hover:text-white"
            >
              <Icon className="size-4" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
