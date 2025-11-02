import { useState } from "react";
import styles from "./Header.module.scss";

type Props = {
  onToggleTheme?: () => void;
   hidden?: boolean;
};

export default function Header({ onToggleTheme, hidden=false }: Props) {
  const [open, setOpen] = useState(false);

  return (
      <header className={`${styles.header} ${hidden ? styles.isHidden : ''}`}>
      <div className="container">
        <div className={styles.bar}>
          <a href="#home" className={styles.brand} aria-label="MiniUI anasayfa">
            Mini<span>UI</span>
          </a>

          <button
            className={styles.menuBtn}
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((s) => !s)}
          >
            <span className={styles.menuIcon} />
          </button>

          <nav
            id="main-nav"
            className={[styles.nav, open ? styles.open : ""].join(" ")}
            aria-label="Ana menü"
          >
            <a href="#features" onClick={() => setOpen(false)}>Özellikler</a>
            <a href="#pricing" onClick={() => setOpen(false)}>Fiyatlar</a>
            <a href="#faq" onClick={() => setOpen(false)}>SSS</a>
            <a href="#contact" onClick={() => setOpen(false)}>İletişim</a>
            <button
              type="button"
              className={styles.themeBtn}
              onClick={onToggleTheme}
              aria-label="Tema değiştir"
            >
              Tema
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
