import styles from './Card.module.scss';

type Props = {
  title: string;
  desc?: string;
  children?: React.ReactNode;
};

export default function Card({ title, desc, children }: Props) {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      {desc && <p>{desc}</p>}
      {children}
    </article>
  );
}
