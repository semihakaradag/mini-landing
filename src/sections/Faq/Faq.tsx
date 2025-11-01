import Accordion from '../../components/Accordion/Accordion';
import type { AccItem } from '../../components/Accordion/Accordion';
import styles from './Faq.module.scss';

const items: AccItem[] = [
  {
    id: 'what-is-this',
    question: 'Bu proje nedir?',
    answer: 'Modern SCSS, semantik HTML ve erişilebilir UI bileşenleriyle hazırlanmış tek sayfa bir ürün tanıtım örneği.'
  },
  {
    id: 'can-i-use',
    question: 'Kütüphane kullanıldı mı?',
    answer: 'Hayır. Harici UI kütüphanesi yok; tüm Button, Card, Input, Modal, Accordion bileşenleri özelleştirildi.'
  },
  {
    id: 'responsive',
    question: 'Hangi ekranlarda çalışır?',
    answer: 'Mobil-öncelikli olarak 320px’ten 1440px+’e kadar, 3 breakpoint ile responsive tasarlandı.'
  },
  {
    id: 'lighthouse',
    question: 'Performans hedefi nedir?',
    answer: 'Görsel optimizasyon ve sade JS ile Lighthouse’ta 90+ hedeflenir.'
  },
];

export default function Faq() {
  return (
    <section id="faq" className={styles.faq} aria-labelledby="faq-title">
      <div className="container">
        <header className={styles.header}>
          <h2 id="faq-title">Sıkça Sorulan Sorular</h2>
          <p>Merak edilenleri kısaca yanıtladık.</p>
        </header>

        <Accordion items={items} allowMultiple={false} />
      </div>
    </section>
  );
}
