import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import styles from './Pricing.module.scss';

type Plan = {
  name: string;
  price: string;
  perks: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  { name: 'Basic', price: '₺0 / ay',   perks: ['1 proje', 'Temel bileşenler', 'E-posta desteği'] },
  { name: 'Pro',   price: '₺149 / ay', perks: ['Sınırsız proje', 'Gelişmiş bileşenler', 'Öncelikli destek'], featured: true },
  { name: 'Team',  price: '₺399 / ay', perks: ['Takım işbirliği', 'Roller & yetkiler', 'Öncelikli destek'] },
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricing} aria-labelledby="pricing-title">
      <div className="container">
        <header className={styles.header}>
          <h2 id="pricing-title">Fiyatlar</h2>
          <p>İhtiyacına göre bir plan seç.</p>
        </header>

        <div className={styles.grid}>
          {plans.map((p) => (
            <article
              key={p.name}
              className={[styles.plan, p.featured ? styles.featured : ''].filter(Boolean).join(' ')}
              aria-label={`${p.name} planı`}
            >
              <Card title={p.name}>
                <div className={styles.price} aria-label={`Fiyat ${p.price}`}>{p.price}</div>
                <ul className={styles.perks}>
                  {p.perks.map((perk) => <li key={perk}>{perk}</li>)}
                </ul>
                <Button full size="lg" aria-label={`${p.name} planıyla başla`}>Başla</Button>
              </Card>

              {p.featured && <span className={styles.badge} aria-hidden="true">Önerilen</span>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
