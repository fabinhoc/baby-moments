import { defineStore } from 'pinia';
import { UserType } from 'src/types/User.type';
import { api } from 'src/boot/axios';

const userKey: string = '@baby-moments:user';
const tokenKey: string = '@baby-moments:token';

const storageUser = localStorage.getItem(userKey) ?? '';
const user = localStorage.getItem(userKey)
  ? (JSON.parse(storageUser) as UserType)
  : ({} as UserType);
const token = localStorage.getItem(tokenKey) as string;

export const useAuthStore = defineStore('login', {
  state: () => ({
    user: user,
    token: token,
  }),
  actions: {
    authenticate(user: UserType, token: string) {
      try {
        this.user = user;
        this.token = token;
        localStorage.setItem(userKey, JSON.stringify(user));
        localStorage.setItem(tokenKey, token);
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } catch (error: unknown) {
        throw error;
      }
    },
    logout() {
      localStorage.setItem(userKey, '');
      localStorage.setItem(tokenKey, '');
      this.user = {} as UserType;
      this.token = '';
      api.defaults.headers.common['Authorization'] = '';
    },
    setUser(user: UserType) {
      this.user = user;
      localStorage.setItem(userKey, JSON.stringify(user));
    },
  },
  getters: {
    isLoggedIn: (state) => {
      return !!state.token;
    },
    isEmailVerified: (state) => {
      return !!state.user.email_verified_at;
    },
  },
});
