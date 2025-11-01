import { useEffect, useRef } from 'react';
import styles from './Modal.module.scss';

type Props = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ open, title, onClose, children }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);
  const lastFocusRef = useRef<HTMLButtonElement>(null);
  const titleId = 'modal-title';

  // ESC ile kapat
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Focus trap
  useEffect(() => {
    if (!open) return;
    // modal açılınca ilk elemente fokus
    firstFocusRef.current?.focus();
  }, [open]);

  const handleTrap = (e: React.KeyboardEvent) => {
    if (e.key !== 'Tab') return;
    const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables || focusables.length < 2) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); (last as HTMLElement).focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); (first as HTMLElement).focus();
    }
  };

  if (!open) return null;

  return (
    <div className={styles.backdrop} aria-hidden="false">
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onKeyDown={handleTrap}
      >
        <h3 id={titleId} className={styles.title}>{title}</h3>

        {/* focus trap sentinel - baş */}
        <button ref={firstFocusRef} className="visually-hidden" aria-hidden="true" />

        <div className={styles.body}>{children}</div>

        <div className={styles.actions}>
          <button className={styles.close} onClick={onClose} aria-label="Kapat">Kapat</button>
        </div>

        {/* focus trap sentinel - son */}
        <button ref={lastFocusRef} className="visually-hidden" aria-hidden="true" />
      </div>
    </div>
  );
}
