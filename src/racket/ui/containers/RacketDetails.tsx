'use client';

import { useParams } from 'next/navigation';

import { NotFound } from '@/shared/ui/components/NotFound';
import { ProductImg } from '@/shared/ui/components/ProductImg';
import { ProductDetailsLayout } from '@/shared/ui/layouts/ProductDetailsLayout';

import { useGetRacketDetail } from '../../hooks/useGetRacketDetail';
import { RacketInfo } from '../components/RacketInfo';
import { RacketDetails as Details } from '../components/RacketDetails';

export const RacketDetails = () => {
  const params = useParams();
  const { data: racket } = useGetRacketDetail(params?.id as string);

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
