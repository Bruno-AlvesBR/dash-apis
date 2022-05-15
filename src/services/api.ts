import axios from 'axios';
import Cookies from 'universal-cookie';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const cookie = new Cookies();
const authToken = cookie.get('authUserId');

if (authToken) {
  api.defaults.headers['Authorization'] = `Bearer ${authToken}`;
}
