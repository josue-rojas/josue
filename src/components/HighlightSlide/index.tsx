import { HighlightCard, HighlightCardProps } from "../HighlightCard";
import { Slide } from "../Slide";
import styles from './styles.module.css';

interface HighlightSlideProps {
  title: string;
  highlights: HighlightCardProps[];
}
export function HighlightSlide(props: HighlightSlideProps) {
  return (
    <Slide>
      <div className={styles.highlightSlide}>
        <h1 className={styles.title}>{props.title}</h1>
        <div className={styles.highlights}>
          {props.highlights.map((h) => {
            return <HighlightCard {...h} />
          })}
        </div>
      </div>
    </Slide>
  );
}
