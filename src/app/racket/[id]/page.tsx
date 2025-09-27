import { RacketDetails } from '@/racket/ui/containers/RacketDetails';

export default async function RacketPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <RacketDetails id={id} />;
}
