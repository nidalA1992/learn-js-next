import { RacketCardProps } from './RacketCard.props';
import styles from './RacketCard.module.scss';
import { ProductImg } from '@/shared/ui/components/ProductImg';
import Link from 'next/link';
import { Routes } from '@/shared/consts';

export const RacketCard = ({ racket }: RacketCardProps) => {
  const url = `${Routes.racket}/${racket.id}`;
  return (
    <div className={styles.wrapper}>
      <ProductImg imgSrc={racket.imageUrl} />
      <h3 className={styles.name}>{racket.name}</h3>
      <Link className={styles.link} href={url} />
    </div>
  );
};
