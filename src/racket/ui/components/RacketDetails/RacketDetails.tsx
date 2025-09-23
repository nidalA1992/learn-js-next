import { RacketDetailsProps } from './RacketDetails.props';
import styles from './RacketDetails.module.scss';

export const RacketDetails = ({ racket }: RacketDetailsProps) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.price}>{racket.price} $</p>
    </div>
  );
};
