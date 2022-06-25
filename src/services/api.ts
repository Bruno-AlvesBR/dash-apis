import axios from 'axios';
import Cookies from 'universal-cookie';

import { TOKEN } from '@/interfaces/IUserProps';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const cookie = new Cookies();
const authToken = cookie.get(TOKEN.AUTH_TOKEN);

if (authToken) {
  api.defaults.headers['Authorization'] = `Bearer ${authToken}`;
}
