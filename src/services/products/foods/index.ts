import { IFoodProps } from '../../../interfaces/IFoodsProps';
import { api } from '../../api';

export const findAll = async (): Promise<IFoodProps[]> => {
  const foodResponse = await api.get('product/foods');

  return foodResponse?.data || [];
};
