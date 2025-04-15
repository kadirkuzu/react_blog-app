import { useState } from 'react';
import styles from './Component.module.css';

interface Props {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isInvalid?: boolean;
}

const PasswordInput = ({ label, placeholder, value, onChange, isInvalid = false}: Props) => {
  const [type, setType] = useState<'password' | 'text'>('password');

  const toggleType = () => {
    setType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  return (
    <div>
      {label && <label className="input-label">{label}</label>}

      <div className={styles.inputContainer}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`form-control ${isInvalid ? 'is-invalid' : ''}`}
        />
        <span className={styles.toggleText} onClick={toggleType}>
          {type === 'password' ? 'Göster' : 'Gizle'}
        </span>
      </div>
    </div>
  );
};

export default PasswordInput;