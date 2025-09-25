import { FooterProps } from './Footer.props';
import styles from './Footer.module.scss';

export const Footer = ({ logo }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSlot}>{logo}</div>
        <p className={styles.copy}>© rackets. all rights reserved</p>
      </div>
    </footer>
  );
};
