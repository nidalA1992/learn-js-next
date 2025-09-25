import Image from 'next/image';

import { ProductImgProps } from './ProductImg.props';
import styles from './ProductImg.module.scss';

export const ProductImg = ({ imgSrc }: ProductImgProps) => {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.img}
        alt={'Изображение товара'}
        src={imgSrc}
        sizes='100vw'
        width={500}
        height={300}
        quality={75}
        priority
      />
    </div>
  );
};
