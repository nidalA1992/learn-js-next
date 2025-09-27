import { RacketInfoProps } from './RacketInfo.props';
import styles from './RacketInfo.module.scss';

export const RacketInfo = ({ racketData }: RacketInfoProps) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.brand}>{racketData?.brand?.name}</p>
      <h2 className={styles.name}>{racketData?.name}</h2>
      <p className={styles.descr}>{racketData?.description}</p>
    </div>
  );
};
