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
        <div className={styles.introContent}>
          <div className={styles.titleWrapper}>
            {props.title.split(' ').map(w => (<><h1 className={styles.title}>{w}</h1></>))
            }</div>
          <Line color="first" type="vertical" />
          <div className={styles.attributes}>
            {props.attributes.map((a) => {
              return <p key={a} className={styles.attribute}>{a}</p>
            })}
          </div>
        </div>
      </div>
    </Slide>
  );
}
