import { GridLayout } from '@/shared/ui/layouts/GridLayout';

import { getTop10Rackets } from '../../api/getTop10Rackets';
import { RacketCard } from '../components/RacketCard';

export const RacketsTopGrid = async () => {
  const { data, ok } = await getTop10Rackets();

  if (!ok || !data) return null;

  return (
    <GridLayout title={'TOP rackets'}>
      {data.map((racket) => (
        <RacketCard key={racket.id} racket={racket} />
      ))}
    </GridLayout>
  );
};
