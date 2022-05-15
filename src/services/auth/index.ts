import { IUserLogin } from '../../interfaces/IUserProps';
import { api } from '../api';

const delay = (amount = 750) =>
  new Promise(resolve => setTimeout(resolve, amount));

export const login = async ({
  email,
  password,
}: IUserLogin): Promise<IUserLogin> => {
  await delay();

  const userResponse = await api.post('user/login', {
    email,
    password,
  });

  return userResponse?.data || {};
};

export const recoveryUser = async (user: string) => {
  await delay();

  const userResponse = await api.get(`user/${user}`);

  return userResponse?.data || [];
};
