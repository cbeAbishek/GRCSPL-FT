import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Mock product data
const products = [
  {
    id: 1,
    name: "GR Vechicle Care",
    description: "Premium Vehicle care products for a spotless shine.",
    price: 145,
    image: "/ACthum.png",
  },
  {
    id: 2,
    name: "GR Beauty Product",
    description: "Advanced skincare solution for all skin types.",
    price: 60,
    image: "/PCthum.png",
  },
  {
    id: 3,
    name: "GR Home Care",
    description: "Eco-friendly home cleaning solution.",
    price: 68,
    image: "/HCthum.png",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="mt-2 text-lg text-gray-600">High-quality products that your customers will love</p>
          </div>
          <Link href="/products" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-[#39b54b] text-[#39b54b]">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">starting from ₹{product.price}</span>
                  <Link href={`/products`}>
                    <Button className="bg-[#39b54b] hover:bg-[#2da03e]">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
