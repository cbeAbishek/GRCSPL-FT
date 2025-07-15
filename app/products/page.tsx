import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";
import { Helmet } from "react-helmet-async";
import { products } from "@/lib/prop";

export const metadata: Metadata = {
  title: "Products | Business Opportunities in Tamil Nadu",
  description: "Browse our range of products available in Tamil Nadu",
}


export default function ProductsPage() {
 
  return (
    <div>

     <ProductGrid />
    </div>
  );
}
