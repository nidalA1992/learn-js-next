import { mock } from '@/mock';

export const getTopRackets = () => {
  return mock.filter((racket) => racket.top10);
};
