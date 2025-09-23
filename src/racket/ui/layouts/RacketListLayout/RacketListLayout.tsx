import { RacketListLayoutProps } from './RacketListLayout.props';
import styles from './RacketListLayout.module.scss';

export const RacketListLayout = ({ children, controls, title }: RacketListLayoutProps) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.controls}>{controls}</div>
        </div>
        <div className={styles.list}>{children}</div>
      </div>
    </section>
  );
};
