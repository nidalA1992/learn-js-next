import Link from 'next/link';

import { Routes } from '@/shared/consts';

import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <h1 className={styles.logo}>
      ra<span>ck</span>ets
      <Link href={Routes.home} />
    </h1>
  );
};
