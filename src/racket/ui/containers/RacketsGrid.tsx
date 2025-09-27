import { mock as rackets } from '@/mock';

import { GridLayout } from '@/shared/ui/layouts/GridLayout';

import { getRackets } from '../../api/getRackets';
import { RacketCard } from '../components/RacketCard';

export const RacketsGrid = async () => {
  const { data, ok } = await getRackets({ limit: '20' });

  if (!ok || !data) return null;

  return (
    <GridLayout title={'rackets'}>
      {rackets.map((racket) => (
        <RacketCard key={racket.id} racket={racket} />
      ))}
    </GridLayout>
  );
};
