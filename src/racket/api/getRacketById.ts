import { customFetch } from '@/shared/utils/customFetch';

import { Racket } from '../model/racket';

export const getRacketById = (id: string) => {
  return customFetch<{ product: Racket }>(`/product/${id}`);
};
