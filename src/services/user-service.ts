import { User } from '../models/user';
import axios from './common/axios';

export const userService = {
  async getById(id: string): Promise<User | null> {
    const res = await axios.get<User[]>(`/users?id=${id}`);
    return res.data.length > 0 ? res.data[0] : null;
  }
};