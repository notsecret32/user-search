import { paramSerializer } from '@/utils';
import axios from 'axios';

export * from './users';

export const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  paramsSerializer: paramSerializer,
});
