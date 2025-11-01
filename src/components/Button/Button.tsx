import styles from './Button.module.scss';
import type { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  full?: boolean;
};

export default function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  className = '',
  ...rest
}: Props) {
  const cls = [
    styles.button,
    styles[variant],
    styles[size],
    full ? styles.full : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return <button className={cls} {...rest} />;
}
