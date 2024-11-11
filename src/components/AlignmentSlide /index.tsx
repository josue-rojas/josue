import { Feature, FeatureProps } from "../Feature";
import { Slide } from "../Slide";
import styles from './styles.module.css';

interface AlignmentSlideProps {
  title: string;
  features: FeatureProps[];
}
export function AlignmentSlide(props: AlignmentSlideProps) {
  return (
    <Slide>
      <div className={styles.alignmentSlide}>
        <h1 className={styles.title}>{props.title}</h1>
        <div className={styles.features}>
          {props.features.map((f) => {
            return <Feature {...f} />
          })}
        </div>
      </div>
    </Slide>
  );
}
