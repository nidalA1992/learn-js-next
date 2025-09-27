import { Suspense } from 'react';

import { Loader } from '@/shared/ui/components/Loader';
import { RacketsTopSlider } from '@/racket/ui/containers/RacketsTopSlider';
import { RacketsPopularSlider } from '@/racket/ui/containers/RacketsPopularSlider';

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RacketsTopSlider />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <RacketsPopularSlider />
      </Suspense>
    </>
  );
}
