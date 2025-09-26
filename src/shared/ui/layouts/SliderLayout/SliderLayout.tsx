import { SliderLayoutProps } from './SliderLayout.props';
import styles from './SliderLayout.module.scss';

export const SliderLayout = ({ title, controls, children }: SliderLayoutProps) => {
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
