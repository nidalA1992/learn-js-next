import { mock } from '@/mock';

export const useGetRacketDetail = (id?: string) => {
  const racket = mock.find((racket) => String(racket.id) === id);

  return { data: racket || null };
};
