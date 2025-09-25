import { ProductDetailsLayoutProps } from './ProductDetailsLayout.props';
import styles from './ProductDetailsLayout.module.scss';

export const ProductDetailsLayout = ({ details, img, info }: ProductDetailsLayoutProps) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.info}>{info}</div>
        <div className={styles.img}>{img}</div>
        <div className={styles.details}>{details}</div>
      </div>
    </section>
  );
};
