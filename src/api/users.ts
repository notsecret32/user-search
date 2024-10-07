import { instance } from '@/api';
import { IUser } from '@/types';

export const usersApi = {
  getUsersByName: async (name?: string) =>
    instance.get<IUser[]>('/users', {
      params: {
        name,
      },
    }),
};
