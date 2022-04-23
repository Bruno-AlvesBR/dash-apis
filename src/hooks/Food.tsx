import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

import { IFoodProps } from '../interfaces/IFoodsProps';
import { api } from '../services/api';

interface IFoodContext {
  onsubmit?(event: IFoodProps): void;
  productData: IFoodProps;
}

interface IFoodProvider {
  children: ReactNode;
}

export const FoodContext = createContext(
  {} as IFoodContext,
);

export const FoodContextProvider = ({
  children,
}: IFoodProvider) => {
  const [productData, setProductData] = useState();

  const onsubmit = useCallback(async event => {
    try {
      const { data } = await api.post('/foods/create', {
        name: event?.name,
        description: event?.description,
        price: event?.price,
        thumbnail: event?.thumbnail,
        category: event?.category,
        brand: event?.brand,
        monthInstallment: event?.monthInstallment,
        quantity: event?.quantity,
      });

      setProductData(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <FoodContext.Provider
      value={{
        onsubmit,
        productData,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const UseFood = () => {
  const context = useContext(FoodContext);

  return context;
};
