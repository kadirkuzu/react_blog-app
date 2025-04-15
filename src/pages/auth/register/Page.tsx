import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Page.module.css';
import { authActions } from '../../../state/slices/auth-slice';
import PasswordInput from '../../../shared/components/password-input/Component';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const createAccount = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      authActions.login({
        id: '2',
        fullName,
        userName,
      })
    );

    navigate('/blogs');
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.pageContainer}>
        <form onSubmit={createAccount}>
          <h2 className="text-center text-white mb-4">Create Account</h2>

          <div className="mb-3">
            <label className="input-label">User Name</label>
            <input
              className="form-control"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="input-label">Full Name</label>
            <input
              className="form-control"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="input-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="input-label">Phone Number</label>
            <input
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <PasswordInput
              label="Password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={password.length < 6}
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary w-100 mt-3">Create Account</button>
            <p className="mt-3 text-white">
              Already have an account?{' '}
              <Link to="/login" className="text-primary fw-bold text-decoration-none">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;