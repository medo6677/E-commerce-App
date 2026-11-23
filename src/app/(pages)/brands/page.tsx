import { Tags } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { getBrands } from "@/services/brands/brands.sevices";
import { BrandCard } from "@/components/brands/brand-card";

export default async function BrandsPage() {
  const topBrands = await getBrands();

  return (
    <main>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "brands" }]}
        icon={Tags}
        title="Top Brands"
        description="Shop from your favorite brands"
        background="bg-gradient-to-br from-violet-600 via-violet-500 to-purple-400 text-white"
      />

      <section
        aria-label="Top brands"
        className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6"
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
          {topBrands.map((brand) => (
            <BrandCard key={brand._id} brand={brand} />
          ))}
        </div>
      </section>
    </main>
  );
}
