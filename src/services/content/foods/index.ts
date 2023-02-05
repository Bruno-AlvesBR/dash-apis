import { IFoodCreate } from '@/interfaces/IFoodsProps';
import { IProductProps } from '@/interfaces/IProductProps';
import { api } from '../../api';

export const create = async ({
  ...data
}: IFoodCreate): Promise<IFoodCreate> => {
  const foodResponse = await api.post('product/create', data);

  return foodResponse?.data || {};
};

export const findAll = async (): Promise<IProductProps[]> => {
  const foodResponse = await api.get('product/foods');

  return foodResponse?.data || [];
};

export const findBySlug = async (slug: string | string[]) => {
  const foodResponse = await api.get(`product/${slug}`);

  return foodResponse?.data || {};
};

export const update = async (id: string, data: IProductProps) => {
  const foodResponse = await api.put(`product/${id}`, data);

  return foodResponse?.data || {};
};

export const remove = async (id: string) => {
  const foodResponse = await api.delete(`product/${id}`);

  return foodResponse?.data || {};
};
