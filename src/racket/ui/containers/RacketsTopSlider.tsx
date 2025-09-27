import { SliderLayout } from '@/shared/ui/layouts/SliderLayout';

import { getTop10Rackets } from '../../api/getTop10Rackets';
import { RacketCard } from '../components/RacketCard';

export const RacketsTopSlider = async () => {
  const { data, ok } = await getTop10Rackets();

  if (!ok || !data) return null;

  return (
    <SliderLayout title={'TOP rackets'}>
      {data.map((racket) => (
        <RacketCard key={racket.id} racket={racket} />
      ))}
    </SliderLayout>
  );
};
