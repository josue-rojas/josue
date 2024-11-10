import { Slide } from "../Slide";
import styles from './styles.module.css';

interface HighlightSlideProps {
  title: string;
  description: string;
}
export function HighlightSlide(props: HighlightSlideProps) {
  return (
    <Slide>
      <div className={styles.highlightSlide}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </Slide>
  );
}
