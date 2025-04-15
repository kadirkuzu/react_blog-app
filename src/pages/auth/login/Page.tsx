import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Page.module.css';
import { authActions } from '../../../state/slices/auth-slice';
import PasswordInput from '../../../shared/components/password-input/Component';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      authActions.login({
        id: '1',
        fullName: 'Kadir Kuzu',
        userName: email.split('@')[0]
      })
    );

    navigate('/blogs');
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.pageContainer}>
        <h2 className="text-white text-center mb-4">Giriş Yap</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="input-label">E-posta</label>
            <input
              type="email"
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