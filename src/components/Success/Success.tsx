import styles from './Success.module.scss';

export default function Success({ title="Teşekkürler", text }: { title?: string; text: string }) {
  return (
    <div className={styles.wrap} role="status" aria-live="polite">
      <span className={styles.icon} aria-hidden="true">
        <svg viewBox="0 0 64 64">
          <circle className={styles.circle} cx="32" cy="32" r="28" />
          <path className={styles.check} d="M18 34 L28 44 L46 24" />
        </svg>
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
