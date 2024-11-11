import { BulletPoint, BulletPointProps } from "../BulletPoint";
import { Slide } from "../Slide";
import styles from './styles.module.css';

interface AccomplishmentSlideProps {
  title: string;
  bulletPoints: BulletPointProps[];
  
}
export function AccomplishmentSlide(props: AccomplishmentSlideProps) {
  return (
    <Slide>
      <div className={styles.accomplishmentSlide}>
        <h1 className={styles.title}>{props.title}</h1>
        <div className={styles.bulletPoints}>
          {props.bulletPoints.map((b, i) => {
            return <BulletPoint key={i} {...b} />
          })}
        </div>
      </div>
    </Slide>
  );
}
