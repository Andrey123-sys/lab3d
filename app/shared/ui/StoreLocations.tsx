import Image from "next/image";

export const StoreLocations = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Наши магазины</h2>

      <div className="flex flex-wrap gap-3 mb-6">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md font-medium">
          Магазины
        </button>
        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors">
          г.Санкт
        </button>
        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors">
          г.Петербург
        </button>
        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors">
          область
        </button>
      </div>

      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-sm border">
        <Image
          src="/map.png"
          alt="Карта магазинов"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};
