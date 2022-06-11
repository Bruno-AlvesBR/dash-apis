import { IFoodCreate, IFoodProps } from '../../../interfaces/IFoodsProps';
import { IProductProps } from '../../../interfaces/IProductProps';
import { api } from '../../api';

const delay = (amount = 750) =>
  new Promise(resolve => setTimeout(resolve, amount));

export const create = async ({
  ...data
}: IFoodCreate): Promise<IFoodCreate> => {
  await delay();

  const foodResponse = await api.post('product/create', data);

  return foodResponse?.data || {};
};

export const findAll = async (): Promise<IFoodProps[]> => {
  await delay();

  const foodResponse = await api.get('product/foods');

  return foodResponse?.data || [];
};

export const findBySlug = async (slug: string | any) => {
  const foodResponse = await api.get(`product/${slug}`);

  return foodResponse?.data || {};
};

export const update = async (id: string, data: IProductProps) => {
  await delay();

  const foodResponse = await api.put(`product/${id}`, data);

  return foodResponse?.data || {};
};

export const remove = async (id: string) => {
  await delay();

  const foodResponse = await api.delete(`product/${id}`);

  return foodResponse?.data || {};
};
