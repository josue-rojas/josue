import { Slide } from "../Slide";
import styles from './styles.module.css';

interface AlignmentSlideProps {
  title: string;
  description: string;
}
export function AlignmentSlide(props: AlignmentSlideProps) {
  return (
    <Slide>
      <div className={styles.alignmentSlide}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </Slide>
  );
}
