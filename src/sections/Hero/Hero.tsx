import Button from "../../components/Button/Button";
import styles from "./Hero.module.scss";

export default function Hero() {
     const goFeatures = () => {
    document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.bg} aria-hidden="true" />
      <div className="container">
        <div className={styles.stack}>
          <p className={styles.badge}>Yeni • Sıfır bağımlılık</p>
          <h1 id="hero-title" className={styles.title}>
            Mini<span>UI</span> — sade, hızlı ve erişilebilir bileşenler
          </h1>
          <p className={styles.lead}>
            SCSS tabanlı, yeniden kullanılabilir <strong>Button, Input, Card, Modal, Accordion</strong> bileşenleriyle
            modern arayüzler. Mobil-öncelikli, tema destekli ve Lighthouse 90+.
          </p>

          <div className={styles.ctas}>
            <a href="#features">
              <Button size="lg">Bileşenleri Keşfet</Button>
            </a>
            <a href="#pricing" className={styles.secondary}>Planlara Bak</a>
          </div>
        </div>
      </div>
        {/* Aşağı ok – klavye ile de erişilebilir */}
      <button
        type="button"
        className={styles.scrollHint}
        onClick={goFeatures}
        aria-label="Özelliklere git"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </section>
  );
}
