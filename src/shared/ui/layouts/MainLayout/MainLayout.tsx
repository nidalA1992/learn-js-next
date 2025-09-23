import { MainLayoutProps } from './MainLayout.props';
import styles from './MainLayout.module.scss';

export const MainLayout = ({ header, footer, children }: MainLayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{header}</div>
      <main className={styles.main}>{children}</main>
      <div className={styles.footer}>{footer}</div>
    </div>
  );
};
