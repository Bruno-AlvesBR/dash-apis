import { IUserLogin } from '@/interfaces/IUserProps';
import { api } from '../api';

export const login = async ({
  email,
  password,
}: IUserLogin): Promise<IUserLogin> => {
  const userResponse = await api.post('user/login', {
    email,
    password,
  });

  return userResponse?.data || {};
};

export const recoveryUser = async (_id: string) => {
  const userResponse = await api.get(`user/${_id}`);

  return userResponse?.data || [];
};
