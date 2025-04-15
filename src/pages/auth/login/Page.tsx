import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Page.module.css';
import PasswordInput from '../../../shared/components/password-input/Component';
import { AuthService } from '../../../state/auth/service';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    AuthService.login(email, password, navigate);
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.pageContainer}>
        <h2 className="text-white text-center mb-4">Giriş Yap</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="input-label">E-posta</label>
            <input
              id="email"
              placeholder="E-posta adresinizi girin"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <PasswordInput
              label="Şifre"
              placeholder="Şifrenizi girin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={password.length < 6}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Giriş Yap</button>
        </form>

        <div className="text-center mt-3">
          <span className="text-white me-2">Hesabın yok mu?</span>
          <Link to="/register" className="text-primary fw-bold text-decoration-none">
            Kayıt ol
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;