import styles from './Card.module.scss';

type Props = {
  title: string;
  desc?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'feature'; // yeni parametre
};

export default function Card({ title, desc, children, variant = 'default' }: Props) {
  return (
    <article
      className={`${styles.card} ${variant === 'feature' ? styles.feature : ''}`}
      tabIndex={0}
    >
      <h3>{title}</h3>
      {desc && <p>{desc}</p>}
      {children}
    </article>
  );
}
