import { customFetch } from '@/shared/utils/customFetch';
import { Racket } from '@/racket/model/racket';

export const getTop10Rackets = () => {
  return customFetch<Racket[]>('/top-10');
};
