export interface IStorageData {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  curInCart?: number;
  indexInCart?: number;
}

export enum FiletsCategory {
  Brand = 'brand',
  Category = 'category',
}

export enum FiletsCategoryRange {
  Stock = 'stock',
  Price = 'price',
}

export interface ILocalStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export interface IPromos {
  RS: boolean;
  EPM: boolean;
  invalidPromo: boolean;
}

interface IObject {
  [key: string]: string;
}

export interface IOrderData extends IObject {
  name: string;
  surname: string;
  country: string;
  city: string;
  state: string;
  address: string;
  post: string;
}

export interface ICardData {
  cardNumber: string;
  cardDate: string;
  cardCvv: string;
}
