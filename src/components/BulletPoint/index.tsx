import styles from "./styles.module.css";

export interface BulletPointProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

export function BulletPoint(props: BulletPointProps) {
  return <div className={styles.bulletPoint}>
   <div className={styles.iconContainer}>
      {props.icon}
    </div>
    <div>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
    </div>
  </div>
}
