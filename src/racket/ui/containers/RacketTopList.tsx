import Link from 'next/link';

import { Routes } from '@/shared/consts';
import { NotFound } from '@/shared/ui/components/NotFound';

import { getTopRackets } from '../../utils/getTopRackets';
import { RacketListLayout } from '../layouts/RacketListLayout';
import { RacketCard } from '../components/RacketCard';

export const RacketTopList = () => {
  const rackets = getTopRackets();

  if (!rackets || !rackets.length) {
    return <NotFound />;
  }

  return (
    //TODO: добавить слайдер
    <RacketListLayout title={'top rackets'} controls={<Link href={Routes.rackets}>all</Link>}>
      {rackets.map((racket) => (
        <RacketCard key={racket.id} racket={racket} />
      ))}
    </RacketListLayout>
  );
};
