import { IUser } from '@/types';
import axios from 'axios';

export const usersApi = {
  getUsersByName: async (name?: string) =>
    axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users', {
      params: {
        name,
      },
      paramsSerializer: params => {
        const filteredParams = Object.fromEntries(
          Object.entries(params).filter(
            ([key, value]) => value !== undefined && value !== ''
          )
        );
        return new URLSearchParams(filteredParams).toString();
      },
    }),
};
