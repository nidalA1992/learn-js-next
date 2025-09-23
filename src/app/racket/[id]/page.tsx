import { RacketDetails } from '@/racket/ui/containers/RacketDetails';
import { getTopRackets } from '@/racket/utils/getTopRackets';

export const generateStaticParams = async () => {
  return getTopRackets().map((racket) => ({
    id: String(racket.id),
  }));
};

export default function RacketPage() {
  return <RacketDetails />;
}
