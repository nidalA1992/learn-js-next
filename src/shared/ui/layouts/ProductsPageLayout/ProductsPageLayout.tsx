import { ProductsPageLayoutProps } from './ProductsPageLayout.props';
import styles from './ProductsPageLayout.module.scss';

export const ProductsPageLayout = ({ children, filter }: ProductsPageLayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filter}>{filter}</div>
      <div className={styles.mainWrapper}>{children}</div>
    </div>
  );
};
