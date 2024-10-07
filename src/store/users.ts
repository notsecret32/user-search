import { usersApi } from '@/api';
import { errorMessages } from '@/constants';
import { IUser } from '@/types';
import { create } from 'zustand';

type State = {
  users: IUser[];
  isLoading: boolean;
  error: string;
};

type Action = {
  getUsersByName: (name?: string) => void;
};

export const useUsersStore = create<State & Action>(set => ({
  users: [],
  isLoading: false,
  error: '',
  getUsersByName: async name => {
    set({ isLoading: true });
    usersApi
      .getUsersByName(name)
      .then(response => set({ users: response.data }))
      .catch(error => set({ error: errorMessages.getError(error.code) }))
      .finally(() => set({ isLoading: false }));
  },
}));
