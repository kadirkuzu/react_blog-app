import { User } from '../models/user';
import { httpService } from './common/axios';

export const userService = {
  async getById(id: string): Promise<User | null> {
    const res = await httpService.get<User[]>(`/users?id=${id}`);
    return res.data.length > 0 ? res.data[0] : null;
  }
};