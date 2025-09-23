'use client';

import { NotFound } from '@/shared/ui/components/NotFound';

import { useGetRacketList } from '../../hooks/useGetRacketList';
import { RacketListLayout } from '../layouts/RacketListLayout';
import { RacketCard } from '../components/RacketCard';

export const RacketList = () => {
  const { data: rackets } = useGetRacketList();

  if (!rackets || !rackets.length) {
    return <NotFound />;
  }

  return (
    <RacketListLayout title={'rackets'}>
      {rackets.map((racket) => (
        <RacketCard key={racket.id} racket={racket} />
      ))}
    </RacketListLayout>
  );
};
