import { FooterBottom } from "./footerBottom";
import { FooterContact } from "./footerContact";
import { FooterFeatures } from "./footerFeatures";
import { FooterLinks } from "./footerLinks";

export function Footer() {
  return (
    <footer className="w-full">
      {/* Top Promotional Features Banner */}
      <FooterFeatures />

      {/* Main Dark Footer */}
      <div className="bg-[#0B1527] py-14 text-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Brand & Contact Info */}
            <div className="lg:col-span-5">
              <FooterContact />
            </div>

            {/* Right Columns: Navigation Links */}
            <div className="lg:col-span-7">
              <FooterLinks />
            </div>
          </div>

          {/* Bottom Bar: Copyright & Payment Methods */}
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
