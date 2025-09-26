import { notFound } from 'next/navigation';

import { ProductImg } from '@/shared/ui/components/ProductImg';
import { ProductDetailsLayout } from '@/shared/ui/layouts/ProductDetailsLayout';

import { getRacketById } from '../../api/getRacketById';
import { RacketInfo } from '../components/RacketInfo';
import { RacketDetails as Details } from '../components/RacketDetails';

export const RacketDetails = async ({ id }: { id: string }) => {
  const { data, ok } = await getRacketById(id);

  if (!ok || !data?.product) notFound();

  return (
    <ProductDetailsLayout
      info={<RacketInfo racketData={data?.product} />}
      img={<ProductImg imgSrc={data?.product.imageUrl} />}
      details={<Details racket={data?.product} />}
    />
  );
};
