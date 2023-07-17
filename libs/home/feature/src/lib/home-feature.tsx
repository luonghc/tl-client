import styles from './home-feature.module.scss';

/* eslint-disable-next-line */
export interface HomeFeatureProps {}

export function HomeFeature(props: HomeFeatureProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HomeFeature!</h1>
    </div>
  );
}

export default HomeFeature;
