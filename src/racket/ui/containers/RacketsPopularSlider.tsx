import Link from 'next/link';

import { Routes } from '@/shared/consts';
import { SliderLayout } from '@/shared/ui/layouts/SliderLayout';

import { getRackets } from '../../api/getRackets';
import { RacketCard } from '../components/RacketCard';

export const RacketsPopularSlider = async () => {
  const { data, ok } = await getRackets({ limit: '10' });

  if (!ok || !data) return null;

  return (
    <SliderLayout title={'popular rackets'} controls={<Link href={Routes.rackets}>all</Link>}>
      {data.map((racket) => (
        <RacketCard key={racket.id} racket={racket} />
      ))}
    </SliderLayout>
  );
};
