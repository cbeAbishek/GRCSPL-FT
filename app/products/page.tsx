"use client";
import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Products | Business Opportunities in Tamil Nadu",
  description: "Browse our range of products available in Tamil Nadu",
}


export default function ProductsPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://cloud.umami.is/script.js";
    script.setAttribute("data-website-id", "6576a669-1fa5-4845-ab29-70071ad0da8b");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
     <ProductGrid />
    </div>
  );
}
