import { mock as rackets } from '@/mock';
import { NotFound } from '@/shared/ui/components/NotFound';

import { RacketListLayout } from '../layouts/RacketListLayout';
import { RacketCard } from '../components/RacketCard';

export const RacketList = () => {
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
