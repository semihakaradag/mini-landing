import { useMemo, useState, type FormEvent, type ChangeEvent } from 'react';
import styles from './Contact.module.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import Success from '../../components/Success/Success';

type Errors = Partial<Record<'name' | 'email' | 'terms', string>>; // message kaldırıldı

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [terms, setTerms] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);

  // Mesaj OPSİYONEL -> validate'ten çıkarıldı
  const validate = (): Errors => {
    const e: Errors = {};
    if (!name.trim()) e.name = 'Ad soyad zorunludur.';
    if (!email.trim()) e.email = 'E-posta zorunludur.';
    else if (!emailRegex.test(email)) e.email = 'Geçerli bir e-posta girin.';
    if (!terms) e.terms = 'Koşulları onaylamalısınız.';
    return e;
  };

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setTerms(false);
    }
  };

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className="container">
        <header className={styles.header}>
          <h2 id="contact-title">İletişim</h2>
          <p>Bizimle iletişime Her Daim İletişime Geçebilirsiniz.</p>
        </header>

        <div className={styles.layout}>
          {/* Card'ı cam/yarı saydam panel gibi göstereceğiz (scss'de :global ile) */}
          <Card title="Bize Yazın">
            <form noValidate onSubmit={onSubmit} className={styles.form} aria-describedby="form-note">
              <p id="form-note" className="visually-hidden">
                Bizimle iletişime Her Daim İletişime Geçebilirsiniz.
              </p>

              <Input
                id="name"
                name="name"
                label="Ad Soyad "
                placeholder="Adınız Soyadınız"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'err-name' : undefined}
                autoComplete="name"
                required
              />
              {errors.name && (
                <span id="err-name" role="alert" className={styles.error}>
                  {errors.name}
                </span>
              )}

              <Input
                id="email"
                name="email"
                type="email"
                label="E-posta "
                placeholder="ornek@mail.com"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'err-email' : undefined}
                autoComplete="email"
                required
              />
              {errors.email && (
                <span id="err-email" role="alert" className={styles.error}>
                  {errors.email}
                </span>
              )}

              {/* Mesaj: OPSİYONEL */}
              <label htmlFor="message" className={styles.label}>
                Mesaj (opsiyonel)
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                placeholder="Mesajınızı yazın… (opsiyonel)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
              />

              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="terms"
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                  aria-invalid={!!errors.terms}
                />
                <span>Koşulları okudum, onaylıyorum.</span>
              </label>
              {errors.terms && (
                <span role="alert" className={styles.error}>
                  {errors.terms}
                </span>
              )}

              <div className={styles.actions}>
                <Button size="lg" full aria-label="Formu gönder">
                  Gönder
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>

      <Modal open={submitted} title="Teşekkürler" onClose={() => setSubmitted(false)} aria-live="polite">
        <Success text="Formunuz (yalancı gönderim) alındı. En kısa sürede dönüş yapılacak." />
      </Modal>
    </section>
  );
}
