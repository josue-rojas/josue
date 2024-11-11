import styles from './styles.module.css';

export interface FeatureProps {
  image: React.ReactNode;
  title: string;
  description: string;
}

export function Feature(props: FeatureProps) {
  return <div className={styles.feature}>
    {props.image}
    <h3 className={styles.title}>{props.title}</h3>
    <p className={styles.description}>{props.description}</p>
</div>
}
