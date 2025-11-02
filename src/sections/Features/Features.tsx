import Card from '../../components/Card/Card';
import styles from './Features.module.scss';

export default function Features() {
  const items = [
    {
      title: 'Hızlı Performans',
      desc: 'Modern tooling ile yüksek hız ve düşük gecikme.',
    },
    {
      title: 'Mobil-Öncelikli',
      desc: '320px’ten 1440px’e kadar kusursuz responsive.',
    },
    {
      title: 'Erişilebilirlik',
      desc: 'Klavye ile gezinme ve ekran okuyucu dostu yapı.',
    },
  ];

  return (
    <section id="features" className={styles.features} aria-labelledby="features-title">
      <div className="container">
        <header className={styles.header}>
          <h2 id="features-title">Öne Çıkan Özellikler</h2>
          <p>Ürünün değerini anlatan kısa ve net başlıklar</p>
        </header>

        <div className={styles.grid}>
          {items.map((it) => (
            <Card
      key={it.title}
      title={it.title}
      desc={it.desc}
      variant="feature" 
    />
          ))}   
        </div>
      </div>
    </section>
  );
}
