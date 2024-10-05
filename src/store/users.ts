import { usersApi } from '@/api';
import { IUser } from '@/types';
import { create } from 'zustand';

type State = {
  users: IUser[];
};

type Action = {
  getUsersByName: (name?: string) => void;
};

export const useUsersStore = create<State & Action>(set => ({
  users: [],
  getUsersByName: async name => {
    const { data } = await usersApi.getUsersByName(name);
    set({ users: data });
  },
}));
