import Image from "next/image";
import { Header } from "./widgets/Header";
import { Banner } from "./shared/ui/Banner";
import { ProductSection } from "./shared/ui/ProductSection";
import { SpecialOffers } from "./shared/ui/SpecialOffers";
import { StoreLocations } from "./shared/ui/StoreLocations";
import { Articles } from "./shared/ui/Articles";
import { Footer } from "./widgets/footer";
import {
  promotionProducts,
  newProducts,
  previouslyBoughtProducts,
} from "./shared/data/mockProducts";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Banner />

      {/* Product Sections */}
      <div className="bg-white">
        <ProductSection
          title="Акции"
          products={promotionProducts}
          viewAllText="Все акции"
          viewAllHref="#"
        />

        <ProductSection
          title="Новинки"
          products={newProducts}
          viewAllText="Все новинки"
          viewAllHref="#"
        />

        <ProductSection
          title="Покупали раньше"
          products={previouslyBoughtProducts}
          viewAllText="Все покупки"
          viewAllHref="#"
        />
      </div>

      <div className="bg-gray-50">
        <SpecialOffers />
      </div>

      <div className="bg-white">
        <StoreLocations />
      </div>

      <div className="bg-gray-50">
        <Articles />
      </div>

      <Footer />
    </div>
  );
}
