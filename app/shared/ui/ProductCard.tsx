import Image from "next/image";

interface ProductCardProps {
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

export const ProductCard = ({
  id,
  name,
  price,
  oldPrice,
  discount,
  rating,
  reviewCount,
  image,
  isInCart = false,
  isFavorite = false,
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48 md:h-52 bg-gray-50 p-4">
        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discount}
          </div>
        )}

        <button className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors">
          <svg
            className={`w-5 h-5 ${
              isFavorite ? "text-red-500 fill-current" : "text-gray-400"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        <div className="absolute inset-4">
          <div className="relative w-full h-full">
            <Image src={image} alt={name} fill className="object-contain" />
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-lg font-bold text-gray-900">
            {price.toFixed(2)} ₽
          </span>
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through">
              {oldPrice.toFixed(2)} ₽
            </span>
          )}
        </div>

        <h3 className="text-sm text-gray-700 mb-3 line-clamp-2 leading-tight">
          {name}
        </h3>

        <div className="flex items-center space-x-1 mb-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-4 h-4 ${
                  star <= rating
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500">({reviewCount})</span>
        </div>

        <button
          className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
            isInCart
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-orange-500 hover:bg-orange-600 text-white"
          }`}
        >
          {isInCart ? "В корзине" : "В корзину"}
        </button>
      </div>
    </div>
  );
};
