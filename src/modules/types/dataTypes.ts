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
}

export enum FiletsCategory {
  Brand = 'brand',
  Category = 'category',
}

export enum FiletsCategoryRange {
  Stock = 'stock',
  Price = 'price',
}
