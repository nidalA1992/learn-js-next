'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

import { Routes } from '@/shared/consts';
import styles from './Nav.module.scss';

const excludeRoutes = [Routes.racket];

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {Object.entries(Routes).map(([name, route]) =>
          !excludeRoutes.includes(route) ?
            <li key={name} className={styles.navItem}>
              <Link href={route} className={clsx(styles.navLink, pathname === route && styles.navLinkActive)}>
                {name}
              </Link>
            </li>
          : null,
        )}
      </ul>
    </nav>
  );
};
