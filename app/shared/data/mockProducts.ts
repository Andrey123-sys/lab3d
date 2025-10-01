export interface Product {
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

export const promotionProducts: Product[] = [
  {
    id: '1',
    name: 'ГЛ Блинчики с мясом вес. Россия',
    price: 44.50,
    oldPrice: 50.60,
    discount: '20%',
    rating: 4,
    reviewCount: 12,
    image: '/blini.png',
    isInCart: false,
    isFavorite: false,
  },
  {
    id: '2',
    name: 'Молоко ПРОСТОКВАШИНО пост. питьевое цельное отборное...',
    price: 44.50,
    oldPrice: 50.60,
    discount: '20%',
    rating: 5,
    reviewCount: 8,
    image: '/moloko.png',
    isInCart: false,
    isFavorite: false,
  },
  {
    id: '3',
    name: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Салями и Тоскан...',
    price: 44.50,
    oldPrice: 50.60,
    discount: '15%',
    rating: 4,
    reviewCount: 15,
    image: '/kolbasa.png',
    isInCart: false,
    isFavorite: false,
  },
  {
    id: '4',
    name: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и Особые...',
    price: 44.50,
    oldPrice: 50.60,
    discount: '25%',
    rating: 4,
    reviewCount: 7,
    image: '/sosiski.png',
    isInCart: false,
    isFavorite: false,
  },
];

export const newProducts: Product[] = [
  {
    id: '5',
    name: 'Колбаса КЗС-1018 «ВЕСНА-ПОЛЕВАЯ ОХОТА»',
    price: 599.99,
    rating: 4,
    reviewCount: 3,
    image: '/kombain.png',
    isInCart: false,
    isFavorite: false,
  },
  {
    id: '6',
    name: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Салями и Тоскан...',
    price: 44.50,
    rating: 5,
    reviewCount: 12,
    image: '/kolbasa.png',
    isInCart: false,
    isFavorite: false,
  },
  {
    id: '7',
    name: 'Колбаса КЗС-1018 «ВЕСНА-ПОЛЕВАЯ ОХОТА»',
    price: 159.99,
    rating: 4,
    reviewCount: 8,
    image: '/vetchina.png',
    isInCart: false,
    isFavorite: false,
  },
  {
    id: '8',
    name: 'Колбаса КЗС-1018 «ВЕСНА-ПОЛЕВАЯ ОХОТА»',
    price: 49.39,
    rating: 5,
    reviewCount: 15,
    image: '/moloko.png',
    isInCart: false,
    isFavorite: false,
  },
];

export const previouslyBoughtProducts: Product[] = [
  {
    id: '9',
    name: 'Колбаса КЗС-1018 «ВЕСНА-ПОЛЕВАЯ ОХОТА»',
    price: 77.99,
    rating: 4,
    reviewCount: 5,
    image: '/vetchina.png',
    isInCart: true,
    isFavorite: false,
  },
  {
    id: '10',
    name: 'Колбаса КЗС-1018 «ВЕСНА-ПОЛЕВАЯ ОХОТА»',
    price: 159.99,
    rating: 5,
    reviewCount: 22,
    image: '/kolbasa.png',
    isInCart: true,
    isFavorite: false,
  },
  {
    id: '11',
    name: 'Колбаса КЗС-1018 «ВЕСНА-ПОЛЕВАЯ ОХОТА»',
    price: 599.99,
    rating: 4,
    reviewCount: 18,
    image: '/kolbasa.png',
    isInCart: true,
    isFavorite: false,
  },
  {
    id: '12',
    name: 'Колбаса КЗС-1018 «ВЕСНА-ПОЛЕВАЯ ОХОТА»',
    price: 49.39,
    rating: 5,
    reviewCount: 9,
    image: '/moloko.png',
    isInCart: true,
    isFavorite: false,
  },
];
