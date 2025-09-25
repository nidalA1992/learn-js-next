import { ProductsPageLayout } from '@/shared/ui/layouts/ProductsPageLayout';
import { RacketFilter } from '@/racket/ui/components/RacketFilter';

export default function RacketsLayout({ children }: React.PropsWithChildren) {
  return <ProductsPageLayout filter={<RacketFilter />}>{children}</ProductsPageLayout>;
}
