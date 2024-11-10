import { Slide } from "../Slide";
import styles from './styles.module.css';

interface IntroSlideProps {
  title: string;
  description: string;
}
export function IntroSlide(props: IntroSlideProps) {
  return (
    <Slide>
      <div className={styles.introSlide}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </Slide>
  );
}
