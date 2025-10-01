import Image from "next/image";

export const SpecialOffers = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Специальные предложения
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg p-6 flex items-center justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <div className="w-full h-full bg-orange-300 rounded-full transform translate-x-8 -translate-y-8"></div>
          </div>

          <div className="flex-1 z-10">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Оформите карту
              <br />
              «Северяночка»
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              И получайте бонусы при покупке
              <br />в магазинах и на сайте
            </p>
          </div>

          <div className="flex-shrink-0 ml-4 z-10">
            <div className="relative w-28 h-18 md:w-36 md:h-20">
              <Image
                src="/karta.png"
                alt="Карта Северяночка"
                width={160}
                height={96}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-lg p-6 flex items-center justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <div className="w-full h-full bg-green-300 rounded-full transform translate-x-8 -translate-y-8"></div>
          </div>

          <div className="flex-1 z-10">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Покупайте
              <br />
              акционные товары
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              И получайте скидки больше
              <br />
              обычных
            </p>
          </div>

          <div className="flex-shrink-0 ml-4 z-10">
            <div className="relative w-28 h-18 md:w-36 md:h-20">
              <Image
                src="/tovari.png"
                alt="Акционные товары"
                width={160}
                height={96}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
