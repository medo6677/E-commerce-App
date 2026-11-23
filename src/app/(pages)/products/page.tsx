import { PackageSearch } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { ProductGrid } from "@/components/products/product-grid";
import { PaginationComponent } from "./../../../components/utils/Pagination";
import { getProducts } from "@/services/products/products.services";
interface ProductsPageProps {
  searchParams: Promise<{
    page?: string;
    limit?: string;
  }>;
}
export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { page, limit } = await searchParams;

  const currentPage = Number(page) || 1;
  const currentLimit = Number(limit) || 40;

  const response = await getProducts(currentPage, currentLimit);
  console.log(response.metadata.numberOfPages);

  const products = response?.data;
  const totalPages = response?.metadata?.numberOfPages || 1;
 

  return (
    <main className="w-full">
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        icon={PackageSearch}
        title="All Products"
        description="Browse our wide range of products."
        background="bg-gradient-to-br from-[#16A34A] via-[#22C55E] to-[#4ADE80] text-white"
      />

      <section
        aria-label="Products"
        className="mx-auto max-w-[1440px] px-4 py-6  sm:px-6"
      >
        <p className="font-normal text-sm text-slate-400 py-4">
          Showing{" "}
          <span className="text-slate-600">{response?.data?.length || 0}</span>{" "}
          products
        </p>
        <ProductGrid products={products} />

        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          limit={currentLimit}
        />
      </section>
    </main>
  );
}
