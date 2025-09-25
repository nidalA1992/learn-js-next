'use client';

import { useMemo } from 'react';
import { useParams } from 'next/navigation';

import { NotFound } from '@/shared/ui/components/NotFound';
import { ProductImg } from '@/shared/ui/components/ProductImg';
import { ProductDetailsLayout } from '@/shared/ui/layouts/ProductDetailsLayout';

import { getRacketDetail } from '../../utils/getRacketDetail';
import { RacketInfo } from '../components/RacketInfo';
import { RacketDetails as Details } from '../components/RacketDetails';

export const RacketDetails = () => {
  const params = useParams<{ id: string }>();
  const racket = useMemo(() => getRacketDetail(params?.id), [params?.id]);

  if (!racket) {
    return <NotFound />;
  }

  return (
    <ProductDetailsLayout
      info={<RacketInfo racketData={racket} />}
      img={<ProductImg imgSrc={racket.imageUrl} />}
      details={<Details racket={racket} />}
    />
  );
};
