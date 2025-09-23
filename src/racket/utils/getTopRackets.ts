import { mock } from '@/mock';
import { TopRackets } from '@/shared/consts';

export const getTopRackets = () => {
  return mock.filter((racket) => racket.top10);
};
