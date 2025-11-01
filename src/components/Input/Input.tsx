import { forwardRef, type InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

// HTML <input> elementinin tüm props'larını al, bizim ek alanlarımızla birleştir
type Props = {
  label: string;
  errorText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { id, label, errorText, required, ...rest },
  ref
) {
  const invalid = Boolean(errorText);

  return (
    <div className={styles.field}>
      <label htmlFor={id}>
        {label}
        {required && ' *'}
      </label>

      <input
        id={id}
        ref={ref}
        required={required}
        aria-invalid={invalid}
        aria-describedby={invalid ? `${id}-error` : undefined}
        className={styles.input}
        {...rest}  // value, onChange, type, name, autoComplete, vs.
      />

      {invalid && (
        <span id={`${id}-error`} className={styles.error} role="alert">
          {errorText}
        </span>
      )}
    </div>
  );
});

export default Input;
