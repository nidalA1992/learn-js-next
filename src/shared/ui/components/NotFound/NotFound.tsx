import styles from './NotFound.module.scss';

export const NotFound = ({ title = 'Not Found' }: { title?: string }) => {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
    </div>
  );
};
