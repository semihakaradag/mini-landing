import Button from '../../components/Button/Button';
import styles from './Hero.module.scss';

export default function Hero() {   // ← default export
  return (
    <header id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className="container">
        <div className={styles.content}>
          <h1 id="hero-title">Ürününüz, en sade ve hızlı haliyle</h1>
          <p className={styles.lead}>
            Semantik HTML, modern SCSS ve erişilebilir bileşenlerle hazırlanmış mini landing.
          </p>
          <div className={styles.cta}>
            <Button size="lg">Hemen Başla</Button>
            <a className={styles.link} href="#features">Özelliklere göz at</a>
          </div>
        </div>
      </div>
    </header>
  );
}
