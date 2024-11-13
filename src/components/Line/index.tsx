import styles from './styles.module.css';
import classNames from 'classnames';

interface LineProps {
  color: 'first' | 'second' | 'third' | 'fourth' | 'fifth';
  className?: string;
  type?: 'vertical' | 'horizontal';
}

export function Line(props: LineProps) {
  const type = props.type || 'vertical';

  return <div className={classNames(props.className, styles.line, styles[props.color], styles[type])}></div>
}
