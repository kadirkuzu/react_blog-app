import { httpService } from './common/axios';
import { NavigateFunction } from 'react-router-dom';
import { store } from '../state';
import { authActions } from '../state/auth-slice';
import { User } from '../models/user';

export const AuthService = {
  async login(identifier: string, password: string, navigate: NavigateFunction) {
    const { data: users } = await httpService.get('/users');

    const user = users.find(
      (u: User) =>
        (u.email === identifier || u.userName === identifier) &&
        u.password === password
    );

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      store.dispatch(authActions.login(user));
      navigate('/blogs');
    } else {
      alert('E-posta, kullanıcı adı veya şifre hatalı!');
    }
  },

  async register(fullName: string, userName: string, email: string, password: string, navigate: NavigateFunction) {
    const { data: users } = await httpService.get('/users');

    if (users.some((u: User) => u.email === email)) return alert('Bu e-posta zaten kullanılıyor.');
    if (users.some((u: User) => u.userName === userName)) return alert('Bu kullanıcı adı zaten alınmış.');

    const newUser = {
      id: Date.now().toString(),
      fullName,
      userName,
      email,
      password,
    };

    await httpService.post('/users', newUser);

    store.dispatch(authActions.login(newUser));
    navigate('/blogs');
  },

  logout() {
    localStorage.removeItem('user');
    store.dispatch(authActions.logout());
  },
};