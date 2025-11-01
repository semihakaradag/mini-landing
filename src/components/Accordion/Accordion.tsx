import { useState } from 'react';
import styles from './Accordion.module.scss';

export type AccItem = {
  id: string;
  question: string;
  answer: string;
};

type Props = {
  items: AccItem[];
  allowMultiple?: boolean;    // birden fazla açık olsun mu
  defaultOpenIds?: string[];  // başlangıçta açık olanlar
  className?: string;
};

export default function Accordion({
  items,
  allowMultiple = false,
  defaultOpenIds = [],
  className = '',
}: Props) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

  const isOpen = (id: string) => openIds.includes(id);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id);
      }
      return allowMultiple ? [...prev, id] : [id];
    });
  };

  return (
    <ul className={[styles.accordion, className].filter(Boolean).join(' ')}>
      {items.map(({ id, question, answer }) => {
        const panelId = `panel-${id}`;
        const buttonId = `control-${id}`;
        const open = isOpen(id);

        return (
          <li key={id} className={styles.item}>
            <h3 className={styles.header}>
              <button
                id={buttonId}
                className={styles.trigger}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(id)}
              >
                <span className={styles.question}>{question}</span>
                <svg
                  className={[styles.icon, open ? styles.iconOpen : ''].join(' ')}
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    d="M5 8l5 5 5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className={[styles.panel, open ? styles.open : styles.closed].join(' ')}
            >
              <p>{answer}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
