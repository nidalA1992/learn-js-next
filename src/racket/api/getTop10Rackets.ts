import { customFetch } from '@/shared/utils/customFetch';
import { NextServerRevalidateTags } from '@/shared/consts';
import { Racket } from '@/racket/model/racket';

export const getTop10Rackets = () => {
  return customFetch<Racket[]>('/top-10', { next: { tags: [NextServerRevalidateTags.Top10Rackets] } });
};
