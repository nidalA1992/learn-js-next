import { customFetch } from '@/shared/utils/customFetch';
import { Racket } from '../model/racket';

type Filter = {
  page?: string;
  limit?: string;
  brand?: string;
};

export const getRackets = (filter?: Filter) => {
  const searchParams = new URLSearchParams(filter);
  return customFetch<Racket[]>(`/products?${searchParams.toString()}`);
};
