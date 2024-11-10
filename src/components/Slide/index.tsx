import styles from './styles.module.css';

interface SlideProps {
  children: React.ReactNode;
}

export function Slide(props: SlideProps) {
  return <div className={styles.slide}>{ props.children }</div>
}
