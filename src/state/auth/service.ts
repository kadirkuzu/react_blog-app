import axios from '../axios';
import { NavigateFunction } from 'react-router-dom';
import { store } from '..';
import { authActions } from './auth-slice';
import { User } from '../../models/user';

export const AuthService = {
  async login(identifier: string, password: string, navigate: NavigateFunction) {
    const { data: users } = await axios.get('/users');

    const user = users.find(
      (u: User) =>
        (u.email === identifier || u.userName === identifier) &&
        u.password === password
    );

    if (user) {
      store.dispatch(authActions.login(user));
      navigate('/blogs');
    } else {
      alert('E-posta, kullanıcı adı veya şifre hatalı!');
    }
  },

  async register(fullName: string, userName: string, email: string, password: string, navigate: NavigateFunction) {
    const { data: users } = await axios.get('/users');

    if (users.some((u: User) => u.email === email)) return alert('Bu e-posta zaten kullanılıyor.');
    if (users.some((u: User) => u.userName === userName)) return alert('Bu kullanıcı adı zaten alınmış.');

    const newUser = {
      id: Date.now().toString(),
      fullName,
      userName,
      email,
      password,
    };

    await axios.post('/users', newUser);

    store.dispatch(authActions.login(newUser));
    navigate('/blogs');
  },

  logout() {
    store.dispatch(authActions.logout());
  },
};