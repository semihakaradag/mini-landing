import Button from "../../components/Button/Button";
import styles from "./Pricing.module.scss";

export default function Pricing() {
  const plans = [
    {
      title: "Basic",
      price: "₺0 / ay",
      features: ["1 proje", "Temel bileşenler", "E-posta desteği"],
      recommended: false,
    },
    {
      title: "Pro",
      price: "₺149 / ay",
      features: ["Sınırsız proje", "Gelişmiş bileşenler", "Öncelikli destek"],
      recommended: true,
    },
    {
      title: "Team",
      price: "₺399 / ay",
      features: ["Takım işbirliği", "Roller & yetkiler", "Öncelikli destek"],
      recommended: false,
    },
  ];

  return (
    <section id="pricing" className={styles.pricing} aria-labelledby="pricing-title">
      <div className="container">
        <header className={styles.header}>
          <h2 id="pricing-title">Fiyatlar</h2>
          <p>İhtiyacına göre bir plan seç.</p>
        </header>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`${styles.card} ${plan.recommended ? styles.recommended : ""}`}
            >
              <h3>{plan.title}</h3>
              <p className={styles.price}>{plan.price}</p>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Button size="lg" full>
                Başla
              </Button>
              {plan.recommended && <span className={styles.badge}>Önerilen</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
