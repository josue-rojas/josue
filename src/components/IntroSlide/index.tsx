import { Line } from "../Line";
import { Slide } from "../Slide";
import styles from './styles.module.css';

interface IntroSlideProps {
  title: string;
  attributes: string[];
}
export function IntroSlide(props: IntroSlideProps) {
  return (
    <Slide>
      <div className={styles.introSlide}>
        <h1 className={styles.title}>{props.title}</h1>
        <Line color="fourth" className={styles.line} />
        {props.attributes.map((a) => {
          return <p key={a} className={styles.attribute}>{a}</p>
        })}
      </div>
    </Slide>
  );
}
