import { Slide } from "../Slide";
import styles from './styles.module.css';

interface ClosingSlideProps {
  title: string;
  description: string;
}
export function ClosingSlide(props: ClosingSlideProps) {
  return (
    <Slide>
      <div className={styles.closingSlide}>
        <h1 className={styles.title}>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </Slide>
  );
}
