import { CategoryGrid } from "@/components/categories/category-grid";
import { PageHeader } from "@/components/page-header";
import { getCategories } from "@/services/home/categories.services";
import { PackageSearch } from "lucide-react";
import React from "react";

export default async function page() {
  const categories = await getCategories();
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        icon={PackageSearch}
        title="All Products"
        description="Browse our wide range of products."
        background="bg-gradient-to-br from-[#16A34A] via-[#22C55E] to-[#4ADE80] text-white"
      />

      <CategoryGrid categories={categories} />
    </>
  );
}
