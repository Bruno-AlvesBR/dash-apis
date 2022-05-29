import { IFoodCreate, IFoodProps } from '../../../interfaces/IFoodsProps';
import { api } from '../../api';

const delay = (amount = 750) =>
  new Promise(resolve => setTimeout(resolve, amount));

export const create = async ({
  ...data
}: IFoodCreate): Promise<IFoodCreate> => {
  await delay();

  console.log('testFood entrou2', { data });

  const foodResponse = await api.post('product/create', data);

  return foodResponse?.data || {};
};

export const findAll = async (): Promise<IFoodProps[]> => {
  await delay();

  const foodResponse = await api.get('product/foods');

  return foodResponse?.data || [];
};
