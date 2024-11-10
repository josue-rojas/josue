import styles from './styles.module.css';
import classNames from 'classnames';

interface LineProps {
  color: 'first' | 'second' | 'third' | 'fourth' | 'fifth';
  className?: string;
}

export function Line(props: LineProps) {
  return <div className={classNames(props.className, styles.line, styles[props.color])}></div>
}
