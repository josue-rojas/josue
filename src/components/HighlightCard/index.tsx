import styles from './styles.module.css';

export interface HighlightCardProps {
  title: string;
  highlights: string[];
}

export function HighlightCard(props: HighlightCardProps) {
  return <div className={styles.highlightCard}>
    <div className={styles.titleWrapper}>
      <p>{props.title}</p>
    </div>
    <div className={styles.highlightsWrapper}>
      {props.highlights.map((h) => {
        return <p>{h}</p>
      })}
    </div>
  </div>
}
