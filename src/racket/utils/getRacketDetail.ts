import { mock } from '@/mock';
import { Racket } from '@/racket/model/racket';

export const getRacketDetail = (id?: string): Racket | null => {
  const racket = mock.find((racket) => String(racket.id) === id);
  return racket || null;
};
