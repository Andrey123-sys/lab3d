import Image from "next/image";

export const Banner = () => {
  return (
    <section className="relative overflow-hidden h-[180px] md:h-[220px] lg:h-[260px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner-background.png"
          alt="banner bg"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 h-full flex items-center relative z-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 flex justify-start">
            <div className="relative w-[260px] h-[150px] md:w-[320px] md:h-[190px] lg:w-[380px] lg:h-[220px]">
              <Image
                src="/banner-shop.png"
                alt="shop"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex-1 text-center px-2">
            <h1 className="whitespace-nowrap text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#414141] drop-shadow-xl">
              Доставка бесплатно от 1000 ₽
            </h1>
          </div>

          <div className="flex-1" />
        </div>
      </div>
    </section>
  );
};
