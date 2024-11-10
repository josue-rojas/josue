import { Slide } from "../Slide";
import styles from './styles.module.css';

interface AccomplishmentSlideProps {
  title: string;
  description: string;
}
export function AccomplishmentSlide(props: AccomplishmentSlideProps) {
  return (
    <Slide>
      <div className={styles.accomplishmentSlide}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </Slide>
  );
}
