import Link from "next/link";
import { ProductCard } from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  rating: number;
  reviewCount: number;
  image: string;
  isInCart?: boolean;
  isFavorite?: boolean;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewAllText?: string;
  viewAllHref?: string;
}

export const ProductSection = ({
  title,
  products,
  viewAllText = "Все товары",
  viewAllHref = "#",
}: ProductSectionProps) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <Link
          href={viewAllHref}
          className="text-orange-500 hover:text-orange-600 font-medium flex items-center space-x-1 transition-colors"
        >
          <span>{viewAllText}</span>
          <span aria-hidden className="text-orange-500">
            →
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};
