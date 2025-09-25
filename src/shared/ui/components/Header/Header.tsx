import { HeaderProps } from './Header.props';
import styles from './Header.module.scss';

export const Header = ({ nav, logo }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoSlot}>{logo}</div>
        <div className={styles.navSlot}>{nav}</div>
      </div>
    </header>
  );
};
