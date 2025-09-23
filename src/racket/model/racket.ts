export interface Brand {
  id: number;
  name: string;
}

export interface Racket {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  type: string; // строковый литерал — согласно твоему примеру
  model: string;
  year: number;
  top10: boolean;
  description: string;
  brandId: number;
  brand: Brand;
}
