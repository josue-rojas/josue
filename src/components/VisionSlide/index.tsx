import { Slide } from "../Slide";
import styles from './styles.module.css';

interface VisionSlideProps {
  title: string;
  description: string;
}
export function VisionSlide(props: VisionSlideProps) {
  return (
    <Slide>
      <div className={styles.visionSlide}>
        <h1 className={styles.title}>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </Slide>
  );
}
