import { GridLayoutProps } from './GridLayout.props';
import styles from './GridLayout.module.scss';

export const GridLayout = ({ children, controls, title }: GridLayoutProps) => {
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
