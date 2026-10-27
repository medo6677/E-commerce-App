import Slider from "@/components/slider/slider";
import { ProductDetails } from "@/components/products/product-details";
import { ProductDetailsTabs } from "@/components/products/product-details-tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products/${id}`,
  );
  const { data } = await response.json();
 
  return (
    <div className="mx-auto max-w-[1440px] px-4 sm:px-6 my-6">
      <div className="bredCrumb">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{data.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="product">
        <div className="grid grid-cols-12 gap-6 py-5 relative">
          <div className="md:order-1 col-span-12 md:col-span-4 order-2 overflow-hidden rounded-2xl p-3 shadow-sm self-start bg-white sticky md:top-34 lg:top-20">
            <Slider imgs={data.images} />
          </div>
          <div className="col-span-12 md:col-span-8 order-1 rounded-2xl p-3 shadow-sm bg-white">
            <ProductDetails product={data} />
          </div>
        </div>
      </div>
      <ProductDetailsTabs product={data} />
    </div>
  );
}
