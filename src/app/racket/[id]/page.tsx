import type { Metadata } from 'next';

import { RacketDetails } from '@/racket/ui/containers/RacketDetails';
import { Racket } from '@/racket/model/racket';
import { BASE_URL } from '@/shared/consts';

type Props = {
  params: Promise<{ id: string }>;
};

type RacketMetadata = {
  product: Racket;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params)?.id;

  const racketMeta: RacketMetadata = await fetch(`${BASE_URL}/meta/product/${id}`).then((res) => res.json());

  return {
    title: racketMeta.product.name,
    description: racketMeta.product.description,
  };
}

export default async function RacketPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <RacketDetails id={id} />;
}
