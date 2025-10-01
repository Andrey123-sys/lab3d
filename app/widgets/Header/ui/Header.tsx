import Image from "next/image";
import { Logo } from "../../../shared/ui/Logo";
import { UserProfile } from "../../../entities/user/ui/UserProfile";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Logo />
            <span className="text-xl font-bold text-gray-800">СЕВЕРЯНОЧКА</span>
          </div>

          <div className="flex items-center space-x-4 flex-1 max-w-2xl mx-8">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2">
              <span
                className="flex flex-col justify-center gap-0.5"
                aria-hidden
              >
                <span className="block w-4 h-0.5 bg-white rounded"></span>
                <span className="block w-4 h-0.5 bg-white rounded"></span>
                <span className="block w-4 h-0.5 bg-white rounded"></span>
              </span>
              <span>Каталог</span>
            </button>

            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Найти товар"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="flex flex-col items-center text-gray-600 hover:text-gray-800 transition-colors">
              <Image src="/heart.png" alt="Избранное" width={24} height={24} />
              <span className="text-xs">Избранное</span>
            </button>

            <button className="flex flex-col items-center text-gray-600 hover:text-gray-800 transition-colors">
              <Image src="/box.png" alt="Заказы" width={24} height={24} />
              <span className="text-xs">Заказы</span>
            </button>

            <button className="flex flex-col items-center text-gray-600 hover:text-gray-800 transition-colors relative">
              <Image src="/shop.png" alt="Корзина" width={24} height={24} />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                1
              </span>
              <span className="text-xs">Корзина</span>
            </button>

            <div className="flex items-center space-x-2">
              <UserProfile />
              <span className="text-sm text-gray-700">Алексей</span>
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
